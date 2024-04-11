import { useState } from "react";
import {
  Button,
  Card,
  ListItem,
  OrderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { Deck } from "@/lib/ringsdb";
import { HeroModal } from "./hero-modal";

type DeckPreviewProps = {
  deck: Deck;
};

export const DeckPreview = ({ deck }: DeckPreviewProps) => {
  const { name, username, heroes } = deck;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  const openHeroModal = (heroId: string) => {
    setSelectedHero(heroId);
    onOpen();
  };

  return (
    <Card padding={6} gap={3}>
      <h2>{name}</h2>
      {username && <p>by {username}</p>}
      <h3>Heroes</h3>
      <OrderedList>
        {Object.entries(heroes).map(([heroId, quantity]) => {
          return (
            <ListItem key={heroId}>
              <Button
                variant="link"
                onClick={() => openHeroModal(heroId)}
              >{`${quantity}x ${heroId}`}</Button>
            </ListItem>
          );
        })}
      </OrderedList>
      {selectedHero && (
        <HeroModal cardId={selectedHero} isOpen={isOpen} onClose={onClose} />
      )}
    </Card>
  );
};
