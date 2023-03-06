import React from "react";
import Container from "@/components/shared/Container";
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
      <Container maxWidth='lg' className='grid grid-cols-7 gap-6 md:gap-8'>
        <div className='col-span-5'>
          <div className='grid gap-6 lg:gap-8'>
            <Greeting />
            <BadgeCard />
            <LatestJobs />
            <ApplicationsStage />
          </div>
        </div>

        <div className='col-span-2'>
          <div className='grid gap-6 lg:gap-8'>
            <Interviews />
            <Notifications />
            <LatestEpisode />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
