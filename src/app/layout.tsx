import '@/styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=' min-h-screen antialiased'
      >
        {children}
      </body>
    </html>
  );
}
