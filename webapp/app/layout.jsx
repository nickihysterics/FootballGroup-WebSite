import { Exo_2, Golos_Text } from "next/font/google";

import SiteChrome from "../components/site-chrome";
import { getSiteData } from "../lib/api";

import "./globals.css";

const exo = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Газпром Футбол",
  description: "Официальный сайт футбольной команды Газпрома: матчи, состав, медиа, арена и контакты клуба.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  const { club } = await getSiteData();

  return (
    <html lang="ru" className={`${exo.variable} ${golos.variable}`}>
      <body>
        <SiteChrome club={club}>{children}</SiteChrome>
      </body>
    </html>
  );
}
