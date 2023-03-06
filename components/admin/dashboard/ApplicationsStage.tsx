"use client";

import { Card } from "@mui/material";
import React from "react";
import ProgressBar from "../../shared/ProgressBar";

interface Props {
  title: string;
  value: number;
  color: any;
}

const stages: Props[] = [
  {
    title: "Interview",
    value: 26,
    color: "info",
  },

  {
    title: "Rejected",
    value: 12,
    color: "error",
  },
  {
    title: "Applied",
    value: 32,
    color: "success",
  },
];

function ApplicationsStage() {
  return (
    <Card className='p-4'>
      <div className='space-y-3'>
        <h6 className='font-semibold'>APPLICATIONS BY STAGE</h6>
        <p className='text-slate-600 text-sm'>
          Here is a breakdown of the applications by stages.
        </p>
      </div>

      <div className='mt-8 bg-slate-100'>
        <div className='space-y-2'>
          {stages.map((stage) => (
            <div key={stage.title} className='border-b last:border-0'>
              <div className='grid grid-cols-3 gap-4 p-3 items-center'>
                <span className='text-sm font-medium'>{stage.title}</span>
                <strong>{stage.value}</strong>
                <ProgressBar
                  color={stage.color}
                  sx={{
                    height: "0.6rem",
                    borderRadius: "0.5rem",
                  }}
                  variant={"determinate"}
                  value={stage.value}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ApplicationsStage;
