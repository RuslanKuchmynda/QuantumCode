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

export default function SignInForm() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Welcome! Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input label="Email" placeholder="Test@example.com" type="email" />
          <Input label="Password" placeholder="Password" type="password" />
        </form>
        <CardDescription>
          Don’t have an account?
          <Link className="text-primary" href={routes.signUp}>
            Sign up
          </Link>{" "}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center w-full">
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
}
