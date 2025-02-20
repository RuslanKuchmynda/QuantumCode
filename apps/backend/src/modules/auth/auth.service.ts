import { Injectable, BadRequestException } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "@/database/db";
import { users } from "@/database/schemas";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "@/modules/auth/dto/signUp.dto";

export interface User {
  id: number;
  email: string;
  password: string;
  refreshToken?: string | null;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateToken(user: User) {
    const accessToken = this.jwtService.sign(
      { id: user.id, email: user.email },
      { expiresIn: "60m" },
    );
    return { accessToken };
  }

  async signIn(email: string, password: string) {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (user.length === 0) {
      throw new BadRequestException("User not found");
    }

    const isValid = await bcrypt.compare(password, user[0].password);
    if (!isValid) throw new BadRequestException("Invalid credentials");

    const token = this.generateToken(user[0]);

    return { message: "Logged in successfully", user: user[0], ...token };
  }

  async signUp(data: SignUpDto) {
    if (data.password !== data.repeatPassword) {
      throw new BadRequestException("Passwords do not match");
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, data.email));
    if (existingUser.length > 0) {
      throw new BadRequestException("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const [newUser] = await db
      .insert(users)
      .values({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
      })
      .returning();

    // Генерація токенів для нового користувача
    const token = this.generateToken(newUser);

    return { message: "Registered and logged in successfully", token };
  }
}
