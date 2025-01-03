import React from 'react'

import type { Metadata } from "next";
import "../sass/nanify.scss"


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
