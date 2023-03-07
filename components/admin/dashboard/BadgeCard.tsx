"use client";

import { Card } from "@mui/material";
import React from "react";

function BadgeCards() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Card variant='outlined' className='p-3 md:p-4'>
        <div>
          <h1 className='text-3xl font-bold mb-1'>0</h1>
        </div>
        <p className='text-slate-600 text-sm'>0 new applications today</p>
      </Card>

      <Card variant='outlined' className='p-3 md:p-4'>
        <div>
          <h1 className='text-3xl font-bold mb-1'>3</h1>
        </div>
        <p className='text-slate-600 text-sm'>3 open job positions</p>
      </Card>

      <Card variant='outlined' className='p-3 md:p-4'>
        <div>
          <h1 className='text-3xl font-bold mb-1'>10</h1>
        </div>
        <p className='text-slate-600 text-sm'>10 new reports</p>
      </Card>
    </div>
  );
}

export default BadgeCards;
