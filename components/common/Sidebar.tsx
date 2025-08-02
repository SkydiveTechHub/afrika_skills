"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "ADMIN",
      url: "/dashboard",
      items: [
        { title: "Dashboard", url: "/dashboard" },
        {
          title: "Admin Post",
          url: "/dashboard/admin-post",
          items: [
            {
              title: "Jobs",
              url: "/dashboard/admin-post/job",
            },
          ],
        },
        { title: "Banners", url: "/banners" },
        { title: "Admin Roles", url: "/admin-roles" },
        { title: "Audit Log", url: "/audit-log" },
        { title: "Report & Analysis", url: "/report-analysis" },
      ],
    },
    {
      title: "USER",
      url: "#",
      items: [
        { title: "Users Post", url: "/users-post" },
        { title: "Users Management", url: "/users-management" },
        { title: "Subscriptions", url: "/subscriptions" },
      ],
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<string[]>([]);

  // Toggle accordion menu
  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar {...props}>
      {/* Sidebar Header (Logo) */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image
                  src="/icons/africa-Logo.svg"
                  width={100}
                  height={40}
                  alt="Logo"
                  priority
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Menu */}
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === group.url}
                  className="font-semibold text-gray-700"
                >
                  <Link href={group.url}>{group.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Accordion for Submenu */}
              {group.items?.map((item) => (
                <React.Fragment key={item.title}>
                  {item.items ? (
                    <>
                      <SidebarMenuItem>
                        <button
                          onClick={() => toggleMenu(item.title)}
                          className={`flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100 transition ${
                            pathname.startsWith(item.url)
                              ? "bg-blue-100 text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          <span>{item.title}</span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              openMenus.includes(item.title) ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </SidebarMenuItem>
                      {openMenus.includes(item.title) && (
                        <SidebarMenuSub>
                          {item.items.map((sub) => (
                            <SidebarMenuSubItem key={sub.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === sub.url}
                              >
                                <Link href={sub.url}>{sub.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </>
                  ) : (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === item.url}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  )}
                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <div className="text-xs text-gray-500 text-center py-2">
          © {new Date().getFullYear()} Africa Portal
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
