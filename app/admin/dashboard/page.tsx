import React from "react";
import Greeting from "@/components/admin/dashboard/Greeting";
import BadgeCard from "@/components/admin/dashboard/BadgeCard";
import LatestJobs from "@/components/admin/dashboard/LatestJobs";
import Interviews from "@/components/admin/dashboard/Interviews";
import Notifications from "@/components/admin/dashboard/Notifications";
import ApplicationsStage from "@/components/admin/dashboard/ApplicationsStage";
import LatestEpisode from "@/components/admin/dashboard/LatestEpisode";

export const metadata = {
  title: "Admin Dashboard",
  description: "A dashboard for username",
};

function Dashboard() {
  return (
    <div className=''>
      <div className='grid grid-cols-1 lg:grid-cols-7 gap-6 md:gap-8'>
        <div className='lg:col-span-5'>
          <div className='grid gap-6 lg:gap-8'>
            <Greeting />
            <BadgeCard />
            <LatestJobs />
            <ApplicationsStage />
          </div>
        </div>

        <div className='lg:col-span-2'>
          <div className='grid gap-6 lg:gap-8'>
            <Interviews />
            <Notifications />
            <LatestEpisode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
