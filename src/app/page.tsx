import { DeckList } from "@/components/decklist";
import { getDeckList } from "@/lib/ringsdb";
import { DeckSearch } from "@/components/deck-search";

const getDecklist = async () => {
  const decklist = await getDeckList();
  return decklist;
};

const Home = async () => {
  const decks = await getDecklist();

  return (
    <main>
      <DeckSearch />
      <div>
        <DeckList decks={decks} />
      </div>
    </main>
  );
};

export default Home;
