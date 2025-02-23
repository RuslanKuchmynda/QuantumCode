import { Injectable, BadRequestException } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "@/database/db";
import { userSchema } from "@/database/schemas";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "@/modules/auth/dto/signUp.dto";
import { comparePassword, hashPassword } from "@/common/bcrypt.fucns";

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
      .from(userSchema)
      .where(eq(userSchema.email, email))
      .limit(1);
    if (user.length === 0) {
      throw new BadRequestException("User not found");
    }

    const isValid = await comparePassword(password, user[0].password);
    if (!isValid) throw new BadRequestException("Invalid credentials");

    const token = this.generateToken(user[0]);

    return { message: "Logged in successfully", data: { ...token } };
  }

  async signUp(data: SignUpDto) {
    if (data.password !== data.repeatPassword) {
      throw new BadRequestException("Passwords do not match");
    }

    const existingUser = await db
      .select()
      .from(userSchema)
      .where(eq(userSchema.email, data.email));
    if (existingUser.length > 0) {
      throw new BadRequestException("User already exists");
    }

    const hashedPassword = await hashPassword(data.password);

    const [newUser] = await db
      .insert(userSchema)
      .values({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
      })
      .returning();

    const token = this.generateToken(newUser);

    return { message: "Registered and logged in successfully", token };
  }
}
