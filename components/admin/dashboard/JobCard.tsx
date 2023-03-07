"use client";

import { Rating } from "@mui/material";
import React from "react";
import { CiInboxIn } from "react-icons/ci";
import { ImBlocked } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import Card from "../../shared/Card";

function JobCard() {
  return (
    <Card className='space-y-2'>
      <div className='flex items-center justify-between p-4'>
        <div className='leading-relaxed'>
          <h1 className='font-semibold'>Test Job 3</h1>
          <p className='text-slate-600 text-sm'>
            San Francison, CA - Engineeering
          </p>
        </div>
        <div className='flex items-center space-x-4'>
          <Rating value={4} />
          <div className='bg-green-200 text-green-700 font-semibold text-sm rounded-md p-1'>
            OPEN
          </div>
        </div>
      </div>

      <div className='bg-slate-100 p-4 flex items-center justify-between'>
        <div>
          <h6 className='flex items-center space-x-2'>
            <span className='font-semibold text-2xl'>28</span>
            <span className='text-slate-600 text-xs'>Applicants</span>
          </h6>
        </div>

        <div className='flex items-center space-x-4'>
          <span className='flex items-center space-x-2'>
            <CiInboxIn color='' />
            <span className='font-semibold'>3</span>
          </span>

          <span className='flex items-center space-x-2'>
            <ImBlocked color='#ef4444' />
            <span className='font-semibold'>5</span>
          </span>

          <span className='flex items-center space-x-2'>
            <BiSearchAlt2 color='#fbbf24' />
            <span className='font-semibold'>20</span>
          </span>
        </div>
      </div>
    </Card>
  );
}

export default JobCard;
