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
import { Code2Icon, LogOut } from "lucide-react";
import { sidebarLinks } from "@/constants/sidebar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
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
                {sidebarLinks.map(({ link, label, icon: Icon }, key) => (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton tooltip={label} asChild>
                      <Link href={link}>
                        <Icon />
                        <span>{label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={"Sign Out"} disabled asChild>
                <a href={routes.signIn}>
                  <LogOut className="text-destructive" />
                  <span className="font-medium">Sign Out</span>
                </a>
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
