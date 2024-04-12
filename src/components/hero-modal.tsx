import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Skeleton,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Box,
  VStack,
  Alert,
} from "@chakra-ui/react";

import { Card, getCard } from "@/lib/ringsdb";

const IMAGE_BASE_URL = "https://ringsdb.com";

type HeroModalProps = {
  cardId: string;
  isOpen: boolean;
  onClose: () => void;
};

export const HeroModal = ({ cardId, isOpen, onClose }: HeroModalProps) => {
  const [hero, setHero] = useState<Card>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setError(undefined);
    setLoading(true);
    const fetchHero = async () => {
      try {
        const hero = await getCard(cardId);
        setHero(hero);
      } catch (error) {
        setError("Failed to fetch hero");
      }
    };

    fetchHero().then(() => setLoading(false));
  }, [cardId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hero #{cardId}</ModalHeader>
        <ModalCloseButton />
        <Skeleton isLoaded={!loading && !!hero}>
          <ModalBody>
            {error && <Alert status="error">{error}</Alert>}
            {hero && !error && (
              <VStack spacing={4} alignItems="between">
                <StatGroup>
                  <Stat>
                    <StatLabel>Name</StatLabel>
                    <StatNumber>{hero.name}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Sphere</StatLabel>
                    <StatNumber>{hero.sphere_name}</StatNumber>
                  </Stat>
                </StatGroup>
                <StatGroup>
                  <Stat>
                    <StatLabel>Threat</StatLabel>
                    <StatNumber>{hero.threat}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Willpower</StatLabel>
                    <StatNumber>{hero.willpower}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Attack</StatLabel>
                    <StatNumber>{hero.attack}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Defense</StatLabel>
                    <StatNumber>{hero.defense}</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Health</StatLabel>
                    <StatNumber>{hero.health}</StatNumber>
                  </Stat>
                </StatGroup>
                <Box position="relative" width="full" height={520}>
                  <Image
                    src={`${IMAGE_BASE_URL}${hero.imagesrc}`}
                    fill={true}
                    objectFit="contain"
                    alt={hero.name}
                  />
                </Box>
              </VStack>
            )}
          </ModalBody>
        </Skeleton>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
