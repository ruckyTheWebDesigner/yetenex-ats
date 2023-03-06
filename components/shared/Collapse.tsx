"use client";

import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { BsInbox } from "react-icons/bs";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

type CollapseProps = {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

function CustomCollapse({ title, icon, children }: CollapseProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>{icon ? icon : <BsInbox size={20} />}</ListItemIcon>
        <ListItemText primary={title} />
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton>

      <Collapse
        sx={{
          pl: 4,
          marginTop: 1,
        }}
        in={open}
        timeout='auto'
        unmountOnExit>
        {children}
      </Collapse>
    </div>
  );
}

export default CustomCollapse;
