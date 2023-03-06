import React from "react";
import Content from "@/components/admin/Content";

import DashboardAppBar from "@/components/admin/AppBar";
import SideBar from "@/components/admin/SideBar";

export const metadata = {
  title: "Dashboard/ username",
  description: "A dashboard for username",
};

function Dashboard() {
  return (
    <div className=''>
      <div>
        <h6 className='font-medium'>Hello, John 👋</h6>
      </div>
    </div>
  );
}

export default Dashboard;
