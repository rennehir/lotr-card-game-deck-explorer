This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About the project and technologies

### Next.js App router

I used Next.js App router to learn more about it and get experience of the feature that has gained a lot of popularity, and also a lot of not-so-great feedback.

Most things in this project were accomplished very easily, but I would need to spend more time with the app router to learn more of its intricacies. E.g. hydration errors when using `loading.tsx` files to automatically handle loading states.

### Chakra UI

I am quite familiar with Chakra UI as I have used it in many projects. For this one I chose Chakra UI to get up and running and be able to make a nice looking app very fast.

### RingsDB API

The API lacks documentation and the endpoints are not very well designed. For example the `/decklists/by_date` endpoint returns hero names, but `/decklist/[id]` returns only their IDs, which made the search functionality in this app behave in a not-most-optimal way. I.e. not able to show the deck's heroes' names without making additional API calls.

## Future improvements

### Search

- Fetching more data to also show heroes' names and images.

### Pages

- A statically generated page for each deck and card. This would make it easier to e.g. share direct links to the decks or cards.

### Decklist

- "Click-to-copy" feature to easily copy the deck ID
- or clicking the deck to automatically make the search with that deck's ID
