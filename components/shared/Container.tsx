"use client";

import { Breakpoint, Container, SxProps, Theme } from "@mui/material";
import React from "react";

interface CardProps {
  children?: React.ReactNode;
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth?: Breakpoint | false;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export default function CustomContainer(
  { sx, maxWidth, children }: CardProps = {
    maxWidth: "lg",
  }
) {
  return (
    <Container maxWidth={maxWidth} sx={sx}>
      {children}
    </Container>
  );
}
