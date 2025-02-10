export const metadata = {
  title: "Dance",
  description: "Terminsprøve",
};

export default function RootLayout({children}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
