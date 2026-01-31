"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Users,
  Info,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { logout } from "@/lib/auth";
import { useEffect, useState } from "react";

// MENU CONFIG
const items = [
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Home",
    url: "/",
    icon: Info,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [,setLoggedIn] = useState(false);

  useEffect(() => {
      fetch("/api/session")
        .then((res) => res.json())
        .then((data) => setLoggedIn(data.loggedIn))
        .catch(() => setLoggedIn(false));
    }, []);
  

  return (
    <Sidebar>
      <SidebarContent>
        {/* ===== MAIN MENU ===== */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ===== FOOTER / LOGOUT ===== */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={async () => {
                    await logout(router);
                    setLoggedIn(false);
                  }}
                  className="text-destructive cursor-pointer"
                >
                  <LogOut />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
