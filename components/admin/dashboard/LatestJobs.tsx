"use client";

import React from "react";
import Button from "../../shared/Button";
import JobCard from "./JobCard";

import { AiOutlinePlus } from "react-icons/ai";

function LatestJobs() {
  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='font-serif text-lg font-medium'>Latest Jobs</h1>
        <Button startIcon={<AiOutlinePlus />}>CREATE NEW JOB</Button>
      </div>

      <div className='space-y-3 lg:space-y-4'>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default LatestJobs;
