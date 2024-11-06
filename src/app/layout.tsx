import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Brainwave',
  description: 'Your description here',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/brainwave-symbol.svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
