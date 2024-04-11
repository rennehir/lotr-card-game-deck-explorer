import { ListItem, OrderedList } from "@chakra-ui/react";

import { Deck } from "@/lib/ringsdb";

type DeckListProps = {
  decks: Deck[];
};

export const DeckList = async ({ decks }: DeckListProps) => {
  return (
    <OrderedList>
      {decks.map((deck) => (
        <ListItem key={deck.id}>
          <article>
            <h2>{deck.name}</h2>
          </article>
        </ListItem>
      ))}
    </OrderedList>
  );
};
