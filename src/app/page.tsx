import { DeckList } from "@/components/decklist";
import { getDeckList } from "@/lib/ringsdb";
import { DeckSearch } from "@/components/deck-search";
import { Box, Heading, VStack } from "@chakra-ui/react";

const getDecklist = async () => {
  const decklist = await getDeckList();
  return decklist;
};

const Home = async () => {
  const decks = await getDecklist();

  return (
    <main>
      <VStack spacing={6} align="stretch">
        <DeckSearch />
        <Box>
          <Heading as="h2">Decks published today</Heading>
          <DeckList decks={decks} />
        </Box>
      </VStack>
    </main>
  );
};

export default Home;
