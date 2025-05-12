import SignInForm from "@/components/form/SignInForm";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <SignInForm />
      <Image
        fill
        className="absolute -z-50 "
        src="/auth-bg.jpg"
        alt="Background"
      />
    </div>
  );
}
