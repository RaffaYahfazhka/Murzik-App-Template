import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/containers/AppSidebar";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        {/* SIDEBAR */}
        <AppSidebar />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-auto bg-zinc-50 px-6 py-6 dark:bg-black">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
