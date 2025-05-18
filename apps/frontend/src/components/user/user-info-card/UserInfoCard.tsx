"use client";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../user.funcs";

export default function UserInfoCard() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  return (
    <div className="flex items-center gap-6">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-2xl font-bold">{user?.firstName[0]}</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          {user?.firstName} {user?.lastName}
        </h1>
        <p className="text-muted-foreground">Member since January 2024</p>
      </div>
    </div>
  );
}
