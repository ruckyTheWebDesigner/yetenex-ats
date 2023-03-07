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
      <body className='grid grid-cols-1 lg:grid-cols-6 relative'>
        <div className='hidden lg:block min-h-full bg-[#EDF1D6] relative'>
          <SideBar />
        </div>
        <div className='lg:col-span-5 min-w-full'>
          <div className=''>
            <DashboardAppBar />
          </div>
          <div className='py-8 lg:py-12 px-4 container mx-auto md:px-8 lg:px-12 2xl:px-36'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
