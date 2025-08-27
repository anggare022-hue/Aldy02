export const metadata = {
  title: "Web Vercel Ready",
  description: "Scaffold siap deploy ke Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "ui-sans-serif, system-ui, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
