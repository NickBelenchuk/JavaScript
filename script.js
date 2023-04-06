"use strict";

const User = {
  fullname: "Nick",
  age: 321,
  any_info_about_ur_place: { country: "Ukraine" },
  hascats: false,
  hobbies: ["one", "two", "three"],
  greeting: function () {
    return `Hey, my name is ${this.fullname}`;
  },
};

const SecondUser = { ...User };
SecondUser.occupation = { text: "PoGrammer ^_^" };

console.log(SecondUser.occupation);

document.querySelector(".text").innerHTML = JSON.stringify(
  SecondUser.occupation
);
