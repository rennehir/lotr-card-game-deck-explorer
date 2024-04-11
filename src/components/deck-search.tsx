"use client";
import { useState } from "react";

import { searchDeck } from "@/app/actions";
import { Deck } from "@/lib/ringsdb";
import { Button, Card, Input } from "@chakra-ui/react";
import { DeckPreview } from "./deck-preview";

export const DeckSearch = () => {
  const [deck, setDeck] = useState<Deck>();
  // TODO: Loading state

  return (
    <Card padding={6}>
      <form
        action={async (formData) => {
          const deck = await searchDeck(formData);
          setDeck(deck);
        }}
      >
        <Input name="deckId" type="text" placeholder="Search for a deck" />
        <Button type="submit">Search</Button>
      </form>
      {deck && <DeckPreview deck={deck} />}
    </Card>
  );
};
