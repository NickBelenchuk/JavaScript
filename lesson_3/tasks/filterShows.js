"use strict";
/*
3. Создать ОДНУ функцию, которая принимает объект критериев (год, название и рейтинг),
a возвращать будет массив фильмов/сериалов по трем критериям:

filterByYear + filterByTitle = one function

For example, filterShows(shows, filterCriteria);
*/

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
  { title: "Bad boys", year: 1881, rating: 5 },
  { title: "Good girls", year: 2019, rating: 8 },
  { title: "The cringe", year: 2001, rating: 7 },
  { title: "Real cringe", year: 2008, rating: 6 },
  { title: "Lord of the rings", year: 2021, rating: 9 },
  { title: "The word", year: 2019, rating: 3 },
  { title: "Any idea", year: 2006, rating: 5 },
  { title: "True Detective", year: 2023, rating: 10 },
];

export const filterCriteria = { year: 2016, title: "the", rating: 6 };
