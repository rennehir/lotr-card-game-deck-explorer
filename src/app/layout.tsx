import type { Metadata } from "next";

import { fonts } from "@/fonts";
import { Providers } from "@/providers";
import { Box, Container, Heading } from "@chakra-ui/react";

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
          <Box as="header" padding={4} bg="gray.800" color="white">
            <Container>
              <Heading>Deck Explorer</Heading>
            </Container>
          </Box>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
