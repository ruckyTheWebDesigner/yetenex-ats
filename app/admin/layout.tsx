import DashboardAppBar from "@/components/admin/AppBar";
import SideBar from "@/components/admin/SideBar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 relative'>
        <div className='hidden md:block min-h-full bg-[#EDF1D6] relative'>
          <SideBar />
        </div>
        <div className='md:col-span-3 lg:col-span-5 min-w-full'>
          <div className=''>
            <DashboardAppBar />
          </div>
          <div className='py-8 lg:py-12'>{children}</div>
        </div>
      </body>
    </html>
  );
}
