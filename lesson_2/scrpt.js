// Задачи:
// 1. Создать массив объектов, где объект имеет следующую структуру:
// id: Something unique
// title: String,
// year: Number,
// actors: [String, String, String],
// description: String,
// details: {
//    genre: String,
//    reviews: [{ username: String, content: String, score: Number }]
// }
// Минимум будет 3 объекта в массиве.

// 2. Пробежаться циклом по массиву
// 3. На каждой итерации в консоль выводится строка:

// The 1997 film “Escape from Shawshank”, which tells the story of “Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.”
// This movie starred DiCaprio, van Damme and etc. It was rated by 23 users, with a total rating of 9. Register to watch this drama.

// 4. Создать функцию, которая будет принимать в себя массив с фильмами и год, а отдавать она должна массив только с теми фильмами, которые подходят

// For example, getMovieByYear(movies, 2019) -> [{ …, year: 2019 }, { …, year: 2020 }]
// + то же самое, но поиск по заголовку.

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
      reviews: [{ John: "PogChapm", Lilu: "kekW", score: 4 }],
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
      reviews: [{ Archi: "PogChapm", Lui: "kekW", score: 2 }],
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
      reviews: [{ Leo: "PogChapm", Tom: "kekW", score: 3 }],
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
      reviews: [{ David: "PogChapm", Alex: "kekW", score: 4 }],
    },
  },
];

const text =
  "The 1997 film “Escape from Shawshank”, which tells the story of “Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.”This movie starred DiCaprio, van Damme and etc. It was rated by 23 users, with a total rating of 9. Register to watch this drama.";

filmList.forEach((element) => {
  console.log(` Id: ${element.id}
  text: ${text}`);
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

console.log(sortFilmsByYear(filmList, 3333));
console.log(sortFilmsByTitle(filmList, "Film-4"));
