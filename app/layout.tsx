"use client";

import "./globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// export const metadata = {
//   title: "Custom Next.js App",
//   description: "A custom Next.js app",
// };

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },

    primary: {
      main: "#FF731D",
    },

    secondary: {
      main: "#001253",
    },

    text: {
      primary: "#0f172a",
      secondary: "#0f172a",
      disabled: "#000",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
