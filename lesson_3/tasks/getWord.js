"use strict";

// Задача: изменять окончание слова в зависимости от количества:
// For example, 2 фильма, 5 фильмов, 1 фильм + 1 movie and 2 movies

// getWord(2, ['фильм', "фильма", 'фильмов']) -> 2 фильма
// getWord(5, ['предмет', "предмета", 'предметов']) -> 5 предметов

export const getWord = (number, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const indexOfCases =
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];

  return `${number} ${words[indexOfCases]}`;
};
