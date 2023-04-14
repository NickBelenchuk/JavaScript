const filmList = [
  {
    id: 1,
    title: "Film-1",
    year: 1111,
    actors: ["David", "notDavid", "antiDevid"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia.",
    details: {
      genre: "Comedy",
      reviews: [{ John: "PogChapm", content: "kekW", score: 4 }],
    },
  },
  {
    id: 2,
    title: "Film-2",
    year: 2222,
    actors: ["Kris", "notKris", "antiKris"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia.",
    details: {
      genre: "Comedy",
      reviews: [
        { Archi: "PogChapm", content: "kekW", score: 2 },
        { Archi: "PogChapm", content: "kekW", score: 2 },
        { Archi: "PogChapm", content: "kekW", score: 2 },
      ],
    },
  },
  {
    id: 3,
    title: "Film-3",
    year: 3333,
    actors: ["Alex", "notAlex", "antiAlex"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia.",
    details: {
      genre: "Comedy",
      reviews: [{ Leo: "PogChapm", content: "kekW", score: 3 }],
    },
  },
  {
    id: 4,
    title: "Film-4",
    year: 4444,
    actors: ["John", "notJohn", "antiJohn"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia.",
    details: {
      genre: "Comedy",
      reviews: [
        { David: "PogChapm", content: "kekW", score: 5 },
        { David: "PogChapm", content: "kekW", score: 5 },
        { David: "PogChapm", content: "kekW", score: 5 },
        { David: "PogChapm", content: "kekW", score: 5 },
        { David: "PogChapm", content: "kekW", score: 5 },
        { David: "PogChapm", content: "kekW", score: 5 },
      ],
    },
  },
];

const maxScore = 10;
let reviewsCount = 0;
let totalScore = 0;

filmList.forEach((film) => {
  const reviews = film.details.reviews;
  reviewsCount += reviews.length;
  reviews.forEach((review) => {
    totalScore += review.score;
  });
});

const avgScore = (totalScore / reviewsCount).toFixed(2);

console.log(`Total reviews count: ${reviewsCount}`);
console.log(`Average score: ${avgScore}`);

const text = `The 1997 film “Escape from Shawshank”, which tells the story of “Over the course of several years, 
  two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.
  ”This movie starred DiCaprio, van Damme and etc. It was rated by ${reviewsCount} users, with a total rating of ${avgScore} / ${maxScore}. Register to watch this drama.`;

// What's the point of outputting the same text multiple times? О_о
filmList.forEach((element) => {
  console.log(` Id: ${element.id}
  text: ${text}
  `);
});

const sortFilmsByYear = (filmList, year) => {
  const sortedFilmByYear = filmList.find(
    (film) => Number(film.year) === Number(year)
  );
  return sortedFilmByYear;
};
const sortFilmsByTitle = (filmList, title) => {
  const sortedFilmByTitle = filmList.find(
    (film) => String(film.title) === String(title)
  );
  return sortedFilmByTitle;
};

console.log(sortFilmsByYear(filmList, 2222));
console.log(sortFilmsByTitle(filmList, "Film-2"));
