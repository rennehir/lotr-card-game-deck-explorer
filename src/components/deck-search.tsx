"use client";
import { useState, useTransition } from "react";

import { searchDeck } from "@/app/actions";
import { Deck } from "@/lib/ringsdb";
import {
  Alert,
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
  const [error, setError] = useState<string>();
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (formData: FormData) => {
    startTransition(async () => {
      setError(undefined);
      try {
        const deck = await searchDeck(formData);
        setDeck(deck);
      } catch (error) {
        setError("Failed to find a deck");
        setDeck(undefined);
      }
    });
  };

  return (
    <VStack spacing={6} marginBlock={6} align="stretch">
      <Heading as="h2">Search for a deck</Heading>
      <form action={handleSearch}>
        <HStack spacing={2}>
          <Input name="deckId" type="text" placeholder="Search for a deck" />
          <Button type="submit">Search</Button>
        </HStack>
      </form>
      {error && <Alert status="error">{error}</Alert>}

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
