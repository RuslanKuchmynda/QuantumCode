import { routes } from "@/constants/routes";
import { Globe, Trophy, Info, User } from "lucide-react";

export const sidebarLinks = [
  { link: routes.profile, label: "Profile", icon: User },
  { link: routes.problems, label: "Problems", icon: Globe },
  { link: routes.leaderboard, label: "Leaderboard", icon: Trophy },
  { link: routes.about, label: "About us", icon: Info },
];
