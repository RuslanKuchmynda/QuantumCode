"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/Sidebar";
import { Sidebar } from "@/components/layout/Sidebar";

const queryClient = new QueryClient();

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider defaultOpen={false}>
        <Sidebar />
        <main className="w-full">{children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default ClientWrapper;
