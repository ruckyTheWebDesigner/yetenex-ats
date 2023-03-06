import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className=''>
        <DateCalendar
          onChange={(date) => {
            console.log(date);
          }}
        />

        <div className='p-4 pr-8'>
          <span className='text-slate-600 text-sm'>
            {"You don't have any interviews scheduled for today. "}
          </span>
        </div>
      </div>
    </LocalizationProvider>
  );
}
