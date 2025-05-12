import { Card } from "../ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { userData } from "@/constants/user-data";
import { Progress } from "../ui/Progress";

export default function UserInfoCard() {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png1" alt="@shadcn" />
          <AvatarFallback className="text-2xl font-bold">
            {userData.name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{userData.name}</h1>
          <p className="text-gray-500">@{userData.username}</p>
        </div>
        <div className="w-full">
          <div className="flex justify-between text-sm mb-1">
            <span>Rank</span>
            <span className="font-semibold">#{userData.rank}</span>
          </div>
          <Progress
            value={userData.acceptanceRate}
            className="h-2"
          />
          <p className="text-sm text-gray-500 mt-1">
            Acceptance Rate: {userData.acceptanceRate}%
          </p>
        </div>
      </div>
    </Card>
  );
}
