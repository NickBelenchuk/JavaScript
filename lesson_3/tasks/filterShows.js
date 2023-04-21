"use strict";
/*
3. Создать ОДНУ функцию, которая принимает объект критериев (год, название и рейтинг),
a возвращать будет массив фильмов/сериалов по трем критериям:

filterByYear + filterByTitle = one function

For example, filterShows(shows, filterCriteria);
*/

// це шок, те що тут написано((

export const filterShows = (shows, filterCriteria) => {
  const { year, title, rating } = filterCriteria;
  const filteredShows = shows.filter((show) => {
    const yearValue = !year || show.year >= year;
    const titleValue =
      !title || show.title.toLowerCase().includes(title.toLowerCase());
    const ratingValue = !rating || show.rating >= rating;

    return yearValue && titleValue && ratingValue;
  });

  return filteredShows;
};

export const shows = [
  { title: "Bad boys", year: 2222, rating: 5 },
  { title: "Good girls", year: 3333, rating: 8 },
  { title: "The cringe", year: 4141, rating: 7 },
  { title: "Real cringe", year: 1111, rating: 6 },
  { title: "Lord of the rings", year: 2121, rating: 9 },
];

export const filterCriteria = { year: 2016, title: "the", rating: 7 };
