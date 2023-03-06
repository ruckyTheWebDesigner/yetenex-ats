"use client";
import { Card } from "@mui/material";
import React from "react";

function Notifications() {
  return (
    <Card className='p-4'>
      <div className='space-y-2'>
        <h1 className='font-medium'>NOTIFICATIONS</h1>
        <p className='text-slate-600 text-sm'>You have no new notifications</p>
      </div>
    </Card>
  );
}

export default Notifications;
