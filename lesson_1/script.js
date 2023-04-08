"use strict";

const container = document.querySelector(".container");
const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

const User = {
  fullName: "Nick",
  age: 321,
  info: { country: "Ukraine" },
  hasCats: false,
  hobbies: ["one", "two", "three"],
  greeting: function () {
    return `Hey, my name is ${this.fullname}`;
  },
};

const SecondUser = { ...User };
SecondUser.occupation = { text: "PogChamp  ^_^" };

console.log(SecondUser.occupation);

text.innerHTML = JSON.stringify(SecondUser.occupation);

btn.addEventListener("click", function () {
  text.innerHTML = SecondUser.occupation.text;
});
