import { formatDate } from "./date";

const RINGSDB_BASE_URL = "https://ringsdb.com/api";

export type Deck = {
  id: number;
  name: string;
  date_creation: string;
  date_update: string;
  description_md: string;
  user_id: number;
  username: string;
  heroes: { [cardId: string]: number };
  heroes_details: HeroDetails[];
  slots: { [cardId: string]: number };
  version: string;
  last_pack: string;
  nb_votes: number;
  nb_favorites: number;
  starting_threat: number;
};

type HeroDetails = {
  name: string;
  sphere: string;
  pack: string;
};

export const getDeckList = async (date?: Date): Promise<Deck[]> => {
  const decklistDate = date || new Date();

  const url = `${RINGSDB_BASE_URL}/public/decklists/by_date/${formatDate(
    decklistDate
  )}`;
  console.log(url);

  // TODO: Error handling
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
