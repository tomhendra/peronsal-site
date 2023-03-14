export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <span>This is the admin layout</span>
        {children}
      </body>
    </html>
  );
}
