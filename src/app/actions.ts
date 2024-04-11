"use server";

import { getDeck } from "@/lib/ringsdb";

export const searchDeck = async (formData: FormData) => {
  "use server";
  const deckId = formData.get("deckId");
  if (!deckId) {
    return;
  }
  const deck = await getDeck(Number(deckId));
  return deck;
};
