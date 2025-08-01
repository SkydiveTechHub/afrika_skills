import DashboardLayoutProvider from "@/components/common/LayoutProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html>
      <body
      >
        <SidebarProvider>
            <DashboardLayoutProvider>
              {children}
            </DashboardLayoutProvider>
        </SidebarProvider>

      </body>
    </html>
  );
}