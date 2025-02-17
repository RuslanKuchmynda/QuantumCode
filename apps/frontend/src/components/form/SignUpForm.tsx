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
import { paths } from "@/constants/paths";

export default function SignUpForm() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Welcome! Please enter your details.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input label="First name" placeholder="Tim" type="email" />
          <Input label="Last name" placeholder="Wells" type="email" />

          <Input label="Email" placeholder="Test@example.com" type="email" />
          <Input label="Password" placeholder="Password" type="password" />
        </form>
        <CardDescription>
          Do have an account?
          <Link className="text-primary" href={paths.signIn}>
            Sign in
          </Link>{" "}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center w-full">
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
}
