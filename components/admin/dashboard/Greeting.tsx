"use client";

import React from "react";

function Greeting() {
  const date = new Date();
  return (
    <div className='flex items-center justify-between font-serif'>
      <div>
        <h1 className='text-xl lg:text-2xl font-medium'>Welcome back, Tom</h1>
      </div>

      <div className=''>
        <p className='text-sm text-slate-700'>
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

export default Greeting;
