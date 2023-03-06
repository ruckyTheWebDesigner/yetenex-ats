"use client";

import { AppBar, ListItemButton, ListItemIcon } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomAvatar from "../shared/Avatar";
import CustomCollapse from "../shared/Collapse";
import ListItem from "../shared/ListItem";

import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { MdDashboard, MdOutlineAssessment } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";

type CollapseProps = {
  title: string;
  icon?: React.ReactNode;

  children?: React.ReactNode;
};

const collapseItemsList = [
  {
    title: "Adaylar",
    icon: <HiDocumentReport size={20} />,
    children: [
      {
        title: "Başvurular",
        link: "/admin/ads",
      },
      {
        title: "Havuzum",
        link: "#",
      },
      {
        title: "Veritabanı",
        link: "#",
      },
    ],
  },

  {
    title: "İlanlar",
    icon: <BsFileEarmarkSpreadsheet size={20} />,
    children: [
      {
        title: "İlanlarım",
        link: "/admin/ads",
      },
      {
        title: "Havuzum",
        link: "#",
      },
    ],
  },

  {
    title: "Değerlendirme",
    icon: <MdOutlineAssessment size={20} />,
    children: [
      {
        title: "Kişik Testi",
        link: "#",
      },
      {
        title: "Biliçsel Test",
        link: "#",
      },

      {
        title: "Video Asses",
        link: "#",
      },
      {
        title: "İngilizce",
        link: "#",
      },
      {
        title: "Parametrik Soru",
        link: "#",
      },
    ],
  },
  {
    title: "Kurum Bilgileri",
    icon: <BsInfoLg size={20} />,
    children: [
      {
        title: "Departmanlar",
        link: "#",
      },
      {
        title: "Çalışanlar",
        link: "#",
      },

      {
        title: "Tanıtım Sayfası",
        link: "#",
      },
      {
        title: "Üyelik Haklarım",
        link: "#",
      },
    ],
  },
];

function SideBar() {
  return (
    <div className='h-screen overflow-auto bg-[#EDF1D6] shadow-sm min-w-full relative'>
      <div className='space-y-8'>
        <div className='py-5 lg:py-6 px-4 lg:px-6 font-bold text-2xl'>LOGO</div>
        <div className='px-4 space-y-4 lg:space-y-5'>
          <Link href={"/admin/dashboard"}>
            <ListItem title='Dashboard' icon={<MdDashboard size={20} />} />
          </Link>

          {collapseItemsList.map((item, index) => {
            return (
              <CustomCollapse
                key={item.title}
                title={item.title}
                icon={item.icon}>
                <div>
                  <ul className='list-disc list-inside space-y-2'>
                    {item.children.map((child) => {
                      return (
                        <Link href={child.link} key={child.link}>
                          <ListItemButton>
                            <li className=''>{child.title}</li>
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </CustomCollapse>
            );
          })}
        </div>
      </div>

      <div className='border-t-2 absolute bottom-0'>
        <div className='flex items-center justify-between px-4 lg:px-6 py-5 lg:py-6'>
          <div className='flex items-center space-x-4'>
            <CustomAvatar
              src={
                "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt='John Doe'
              sx={{ width: 40, height: 40 }}
            />
            <div>
              <h3 className='text-sm font-medium text-gray-800'>John Doe</h3>
              <p className='text-xs font-normal text-gray-600'>
                john@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
