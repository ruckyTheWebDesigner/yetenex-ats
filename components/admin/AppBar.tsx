"use client";
import React from "react";
import Search from "./Search";

import AppBar from "@mui/material/AppBar";

import { BiMenu } from "react-icons/bi";

import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { Drawer } from "@mui/material";
import CustomAvatar from "../shared/Avatar";
import SideBar from "./SideBar";

export default function Appbar() {
  return (
    <>
      <div className='hidden md:block'>
        <DesktopAppbBar />
      </div>
      <div className='block md:hidden'>
        <MobileAppbBar />
      </div>
    </>
  );
}

function MobileAppbBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <AppBar position='static' color='transparent'>
        <div className='py-3 px-4 flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <BiMenu
              onClick={() => {
                setOpenDrawer(true);
              }}
              size={30}
              className='text-gray-600 cursor-pointer'
            />
            <h1 className='text-xl'>LOGO</h1>
          </div>

          <div>
            <CustomAvatar
              src={
                "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt='John Doe'
              sx={{ width: 35, height: 35 }}
            />
          </div>
        </div>
      </AppBar>

      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}>
        <SideBar />
      </Drawer>
    </>
  );
}

function DesktopAppbBar() {
  return (
    <div className='bg-white shadow-sm '>
      <div className='px-8 py-4 lg:py-6 flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        </div>

        <div>
          <Search />
        </div>

        <div>
          <div className='flex items-center gap-2 lg:gap-3'>
            <div className='p-2 border border-primary rounded-full hover:bg-slate-100 transition-all'>
              <AiOutlineMail
                size={20}
                className='text-gray-600 cursor-pointer'
              />
            </div>
            <div className='p-2 border border-primary rounded-full hover:bg-slate-100 transition-all'>
              <BiBell size={20} className='text-gray-600 cursor-pointer' />
            </div>
            <div className='p-2 border border-primary rounded-full hover:bg-slate-100 transition-all'>
              <AiOutlineCalendar
                size={20}
                className='text-gray-600 cursor-pointer'
              />
            </div>
            <div className='p-2 border border-primary rounded-full hover:bg-slate-100 transition-all'>
              <AiOutlineVideoCameraAdd
                size={20}
                className='text-gray-600 cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
