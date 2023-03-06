// "use client";

import { Avatar } from "@mui/material";
import React from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  sx?: any;
};

function CustomAvatar({ src, alt, sx }: AvatarProps) {
  return <Avatar src={src} alt={alt} sx={sx} />;
}

export default CustomAvatar;
