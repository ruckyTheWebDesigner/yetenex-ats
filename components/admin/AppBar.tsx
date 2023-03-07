"use client";
import React from "react";
import Search from "./Search";

import AppBar from "@mui/material/AppBar";
import { BiMenu, BiBell } from "react-icons/bi";
import Badge from "../shared/Badge";
import Tooltip from "../shared/Tooltip";

import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Drawer } from "@mui/material";
import Menu from "../shared/Menu";

import CustomAvatar from "../shared/Avatar";
import SideBar from "./SideBar";

export default function Appbar() {
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopAppbBar />
      </div>
      <div className='block lg:hidden'>
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

        <div className='flex items-center space-x-12'>
          <div className='flex items-center space-x-5'>
            <Tooltip title='Inbox'>
              <Badge badgeContent={4} color='primary'>
                <AiOutlineMail
                  size={25}
                  className='text-gray-600 cursor-pointer'
                />
              </Badge>
            </Tooltip>
            <Tooltip title='Notifications'>
              <Badge badgeContent={10} max={10} color='primary'>
                <BiBell size={25} className='text-gray-600 cursor-pointer' />
              </Badge>
            </Tooltip>
            <Tooltip title='Calendar'>
              <Badge badgeContent={4} color='primary'>
                <AiOutlineCalendar
                  size={25}
                  className='text-gray-600 cursor-pointer'
                />
              </Badge>
            </Tooltip>
            <Tooltip title='Video Tutorials'>
              <Badge badgeContent={4} color='primary'>
                <AiOutlineVideoCameraAdd
                  size={25}
                  className='text-gray-600 cursor-pointer'
                />
              </Badge>
            </Tooltip>
          </div>

          <Menu
            title={
              <CustomAvatar
                sx={{
                  width: 35,
                  height: 35,
                }}
                src={
                  "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            }>
            <div>hello world</div>
          </Menu>
        </div>
      </div>
    </div>
  );
}
