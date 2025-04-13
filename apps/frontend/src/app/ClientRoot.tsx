"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/Sidebar";
import { Sidebar } from "@/components/layout/Sidebar";
import { useAuthInit } from "@store/auth-store";

const ClientRoot = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  useAuthInit();
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={false}>
        <Sidebar />
        <main className="w-full">{children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default ClientRoot;
