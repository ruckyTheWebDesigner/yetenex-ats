"use client";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

type ListItemProps = {
  title: string;
  icon?: React.ReactNode;
};

function ListItem({ title, icon }: ListItemProps) {
  return (
    <ListItemButton>
      <ListItemIcon>{icon ? icon : null}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}

export default ListItem;
