import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ThemeProvider } from "./contexts/Theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "5Pots",
  viewport: "width=device-width,initial-scale=1",
  description: "Calendário com as novidades de League of Legends",
  "theme-color": "#141529",
  image: "/thumb.jpg",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}
