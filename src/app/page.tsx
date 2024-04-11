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
        <p>{decks.length} decks found</p>
      </div>
    </main>
  );
};

export default Home;
