"use client";

import { Card } from "@mui/material";
import React from "react";
import Calender from "./Calender";
import Button from "../../shared/Button";

import { BiCalendarEdit } from "react-icons/bi";

function Interviews() {
  return (
    <Card>
      <div className='p-4 flex justify-between items-center'>
        <h1 className='font-medium'>INTERVIEWS</h1>
        <div>
          <Button variant='text' size='small' endIcon={<BiCalendarEdit />}>
            Configure
          </Button>
        </div>
      </div>
      <Calender />
    </Card>
  );
}

export default Interviews;
