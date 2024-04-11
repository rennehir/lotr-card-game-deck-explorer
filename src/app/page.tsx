import { DeckList } from "@/components/decklist";
import { getDeckList } from "@/lib/ringsdb";

const getDecklist = async () => {
  const decklist = await getDeckList();
  return decklist;
};

const Home = async () => {
  const decks = await getDecklist();
  return (
    <main>
      <div>
        <DeckList decks={decks} />
      </div>
    </main>
  );
};

export default Home;
