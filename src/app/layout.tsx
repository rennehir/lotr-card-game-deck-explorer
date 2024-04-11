import type { Metadata } from "next";

import { fonts } from "@/fonts";
import { Providers } from "@/providers";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Deck Explorer for The Lord of the Rings: The Card Game",
  description: "Explore daily decks or find your favorite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
