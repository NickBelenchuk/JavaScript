// Task 1
const movies = [
  {
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
    ],
  },
];

const year = new Date().getFullYear();

for (const movie of movies) {
  for (const actor of movie.actors) {
    actor.age = year - actor.birthyear;
  }
}

console.log(movies);
