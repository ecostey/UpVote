window.Seed = (function () {
    const submissions = [
      {
        id: 1,
        title: 'Matilda',
        img: "https://i.imgur.com/ZJkhCRh.jpg",
        description: 'Matilda is a book by British writer Roald Dahl. It was published in 1988 by Jonathan Cape in London, with 232 pages and illustrations by Quentin Blake.',
        url: 'https://www.indiebound.org/book/9780142410370',
        votes: 20,
        author: 'Roald Dahl',
    },
    {
        id: 2,
        title: 'Where the Wild Things Are',
        img: "https://i.imgur.com/RFctWwI.jpg",
        description: 'Where the Wild Things Are is a 1963 children\'s picture book by American writer and illustrator Maurice Sendak, originally published by Harper & Row.',
        url: 'https://www.indiebound.org/book/9780060254926/Maurice-Sendak/Where-Wild-Things-Are',
        votes: 13,
        author: 'Maurice Sendak',
    },
    {
        id: 3,
        title: 'Fancy Nancy: Stellar Stargazer!',
        img: "https://i.imgur.com/QC0qLRj.jpg",
        description: 'Fancy Nancy is a 2005 childrens picture book written by Jane O\'Connor and illustrated by Robin Preiss Glasser. The book spent nearly 100 weeks on the New York Times Best Seller list, launching a series that now numbers upwards of 80 books, selling 30 million volumes.',
        url: 'https://www.indiebound.org/book/9780061915239',
        votes: 14,
        author: 'Jane O\'Connor',
    }
];

return { submissions: submissions };
}());