// import "./globals.css";
import DashboardAppBar from "@/components/admin/AppBar";
import SideBar from "@/components/admin/SideBar";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6'>
          <div className='hidden md:block'>
            <SideBar />
          </div>
          <div className='md:col-span-3 lg:col-span-5'>
            <div className=''>
              <DashboardAppBar />
            </div>
            <div className='py-8 px-6'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
