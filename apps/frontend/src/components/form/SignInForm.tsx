"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { signIn } from "@/components/form/sign-in-form.funcs";
import { useAuthStore } from "@store/auth-store";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const router = useRouter();
  const { setAccessToken } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await signIn(data);
      setAccessToken(response.accessToken);
      router.push(routes.profile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Welcome! Please enter your details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              label="Email*"
              placeholder="john.d@example.com"
              type="email"
              error={errors.email}
              value={"admin@example.com"}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password*"
              placeholder="Password"
              type="password"
              error={errors.password}
              value={"Admin1!"}
              {...register("password", { required: true, minLength: 6 })}
            />
          </div>
          <CardDescription>
            Don’t have an account?{" "}
            <Link className="text-primary" href={routes.signUp}>
              Sign up
            </Link>{" "}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center w-full">
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
