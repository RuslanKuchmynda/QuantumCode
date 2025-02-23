"use client";
import {
  Sidebar as CustomSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/Sidebar";
import { routes } from "@/constants/routes";
import { Code2Icon, Lock, LogOut } from "lucide-react";
import { sidebarLinks } from "@/constants/sidebar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@store/auth-store";
import { cn } from "@/utils/shadcn/utils";

export function Sidebar() {
  const { isLoggedIn, clearAuth } = useAuthStore();
  const pathname = usePathname();
  if (pathname === routes.signIn || pathname === routes.signUp) {
    return;
  }

  return (
    <>
      <CustomSidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton disabled asChild>
                <a href={routes.home}>
                  <Code2Icon className="text-primary" />
                  <span className="font-medium">QuantumCode</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarLinks.map(
                  ({ link, label, icon: Icon, requiredAuth }, key) => {
                    if (requiredAuth && !isLoggedIn) {
                      return null;
                    }
                    return (
                      <SidebarMenuItem key={key}>
                        <SidebarMenuButton tooltip={label} asChild>
                          <Link href={link}>
                            <Icon />
                            <span>{label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  },
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="py-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={cn(
                  isLoggedIn
                    ? "text-destructive hover:text-destructive"
                    : "text-primary hover:text-primary",
                )}
                tooltip={isLoggedIn ? "Sign out" : "Sign In"}
                onClick={clearAuth}
                asChild
              >
                <Link href={routes.signIn}>
                  {isLoggedIn ? <LogOut /> : <Lock />}
                  <span>{isLoggedIn ? "Sign out" : "Sign In"}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </CustomSidebar>
      <div className="mt-2.5 px-2">
        <SidebarTrigger />
      </div>
    </>
  );
}
