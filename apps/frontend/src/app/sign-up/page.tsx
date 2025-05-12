import SignUpForm from "@/components/form/SignUpForm";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <SignUpForm />
      <Image
        fill
        className="absolute -z-50 "
        src="/auth-bg.jpg"
        alt="Background"
      />
    </div>
  );
}
