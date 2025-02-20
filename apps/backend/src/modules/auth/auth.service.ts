import { Injectable, BadRequestException } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { db } from "@/database/db";
import { users } from "@/database/schemas";
import * as bcrypt from "bcrypt";

export interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  async signIn(
    email: string,
    password: string,
  ): Promise<{ message: string; user: any }> {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      const isValid = await bcrypt.compare(password, existingUser[0].password);
      if (!isValid) throw new BadRequestException("Invalid credentials");

      return { message: "Logged in successfully", user: existingUser[0] };
    } else {
      throw new BadRequestException("User not found");
    }
  }

  async signUp(
    email: string,
    password: string,
  ): Promise<{ message: string; user: User }> {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      throw new BadRequestException("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Явно типізуємо результат вставки
    const newUser = await db
      .insert(users)
      .values({
        email,
        password: hashedPassword,
      })
      .returning();

    // Тепер newUser має тип User
    return { message: "Registered successfully", user: newUser[0] }; // використовуйте first елемент, якщо це масив
  }
}
