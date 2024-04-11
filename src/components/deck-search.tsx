"use client";
import { useState } from "react";

import { searchDeck } from "@/app/actions";
import { Deck } from "@/lib/ringsdb";
import { Box, Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { DeckPreview } from "./deck-preview";

export const DeckSearch = () => {
  const [deck, setDeck] = useState<Deck>();
  // TODO: Loading state

  return (
    <VStack spacing={6} marginBlock={6} align="stretch">
      <Heading as="h2">Search for a deck</Heading>
      <form
        action={async (formData) => {
          const deck = await searchDeck(formData);
          setDeck(deck);
        }}
      >
        <HStack spacing={2}>
          <Input name="deckId" type="text" placeholder="Search for a deck" />
          <Button type="submit">Search</Button>
        </HStack>
      </form>
      {deck && (
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="lg">
            Search result
          </Heading>
          <DeckPreview deck={deck} />
        </VStack>
      )}
    </VStack>
  );
};
