import { useState } from "react";
import {
  Button,
  Card,
  Heading,
  ListItem,
  OrderedList,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Deck } from "@/lib/ringsdb";
import { HeroModal } from "./hero-modal";

type DeckPreviewProps = {
  deck: Deck;
};

export const DeckPreview = ({ deck }: DeckPreviewProps) => {
  const { name, username, heroes, slots, starting_threat } = deck;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  const openHeroModal = (heroId: string) => {
    setSelectedHero(heroId);
    onOpen();
  };

  return (
    <Card padding={6} gap={3}>
      <Heading as="h2">{name}</Heading>
      <StatGroup>
        <Stat>
          <StatLabel>Heroes</StatLabel>
          <StatNumber>{Object.keys(heroes).length}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Cards</StatLabel>
          <StatNumber>
            {Object.values(slots).reduce((a, b) => a + b, 0)}
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Starting threat</StatLabel>
          <StatNumber>{starting_threat}</StatNumber>
        </Stat>
      </StatGroup>
      {username && <p>by {username}</p>}
      <Heading as="h3" size="md">
        Heroes
      </Heading>
      <Text as="i">Click on a hero to see more details</Text>
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
