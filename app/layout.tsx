"use client";
import "@tremor/react/dist/esm/tremor.css";
import "./globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

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

  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: "#fff",
        },
      },
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
