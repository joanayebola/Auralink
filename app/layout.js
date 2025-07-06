import "./globals.css";

export const metadata = {
  title: "Auralink",
  description: "Hear Every Detail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" type="image/x-icon" href="/favicon.ico" />
       </head> 
      <body
      >
        {children}
      </body>
    </html>
  );
}
