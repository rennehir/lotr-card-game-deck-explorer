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

  useEffect(() => {
    setLoading(true);
    const fetchHero = async () => {
      const hero = await getCard(cardId);
      setHero(hero);
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
          {hero && (
            <ModalBody>
              <Image
                src={`${IMAGE_BASE_URL}${hero.imagesrc}`}
                width={100}
                height={100}
                alt={hero.name}
              />
            </ModalBody>
          )}
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
