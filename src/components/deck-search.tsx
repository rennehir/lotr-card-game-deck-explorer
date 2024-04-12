"use client";
import { useState, useTransition } from "react";

import { searchDeck } from "@/app/actions";
import { Deck } from "@/lib/ringsdb";
import {
  Button,
  Heading,
  HStack,
  Input,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import { DeckPreview } from "./deck-preview";

export const DeckSearch = () => {
  const [deck, setDeck] = useState<Deck>();
  const [isPending, startTransition] = useTransition();

  return (
    <VStack spacing={6} marginBlock={6} align="stretch">
      <Heading as="h2">Search for a deck</Heading>
      <form
        action={async (formData) => {
          startTransition(async () => {
            const deck = await searchDeck(formData);
            setDeck(deck);
          });
        }}
      >
        <HStack spacing={2}>
          <Input name="deckId" type="text" placeholder="Search for a deck" />
          <Button type="submit">Search</Button>
        </HStack>
      </form>

      {(deck || isPending) && (
        <Skeleton isLoaded={deck && !isPending}>
          <VStack spacing={4} align="stretch">
            <Heading as="h3" size="lg">
              Search result
            </Heading>
            {deck && <DeckPreview deck={deck} />}
          </VStack>
        </Skeleton>
      )}
    </VStack>
  );
};
