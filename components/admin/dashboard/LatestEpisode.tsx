"use client";

import { Card } from "@mui/material";
import React from "react";

import Image from "next/image";

function LatestEpisode() {
  return (
    <Card className='p-4 space-y-4'>
      <div>
        <h6 className='font-medium'>LATEST EPISODE</h6>
      </div>
      <div className='relative pb-2'>
        <Image
          className='rounded-md'
          src={
            "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          loading='lazy'
          height={200}
          width={300}
          alt={""}
        />
      </div>

      <div className='space-y-4'>
        <h6 className='font-semibold'>
          How the Right assessments can help you win the war for talent
        </h6>
        <p className='text-slate-500 leading-relaxed text-sm'>
          in this episode, we will be talking about how the right assessments
          can help you win the war for talent in this episode, we will be
          talking about how the right assessments can help you win the war for
          talent
        </p>
      </div>
    </Card>
  );
}

export default LatestEpisode;
