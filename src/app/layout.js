import "./globals.css";

export const metadata = {
  title: "CBF - Seleção Brasileira",
  description: "Uma homenagem à maior seleção de futebol do mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}