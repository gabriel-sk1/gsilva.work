import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Silva | Desenvolvedor de software",
  description: "Portfólio de Gabriel Silva: desenvolvimento web, sistemas, automações e engenharia da computação.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "32x32" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#f7f7f8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-kumo-base text-kumo-default antialiased">
        <div id="app-root" className="isolate">{children}</div>
      </body>
    </html>
  );
}
