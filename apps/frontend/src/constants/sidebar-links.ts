import { routes } from "@/constants/routes";
import {
  Globe,
  Trophy,
  Info,
  User,
  MessageSquareMore,
  Settings,
  HelpCircle,
} from "lucide-react";

export const sidebarLinks = [
  {
    link: routes.profile,
    label: "Profile",
    icon: User,
    requiredAuth: true,
  },
  {
    link: routes.problems,
    label: "Problems",
    icon: Globe,
    requiredAuth: false,
  },
  {
    link: routes.leaderboard,
    label: "Leaderboard",
    icon: Trophy,
    requiredAuth: false,
  },
  {
    link: routes.forum,
    label: "Forum",
    icon: MessageSquareMore,
    requiredAuth: false,
  },
  {
    link: routes.aboutUs,
    label: "About us",
    icon: Info,
    requiredAuth: false,
  },
  {
    link: routes.settings,
    label: "Settings",
    icon: Settings,
    requiredAuth: true,
  },
  {
    link: routes.faq,
    label: "FAQ",
    icon: HelpCircle,
    requiredAuth: false,
  },
];
