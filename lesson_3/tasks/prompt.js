"use strict";

/* 
4.  Задача: через prompt юзер вводить число от 0 до 100 (включительно).
 Если число в промежутке [0 - 40], отдаем строку “You failed the exam, try again”
 Если число в промежутке [41 - 70], отдаем строку “You passed the exam, but you have to attend additional classes”.
 Если число в промежутке [71 - 100], отдаем строку “You passed the exam, get some rest before the next one”.
 Если число не входит ни в один промежуток, то отдаем “The number must be from 0 to 100”
 Если это не число, то отдаем “It must be a number”

*/

export const promptFunc = () => {
  const examResult = prompt("Please enter a number from 0 to 100 ");

  if (isNaN(examResult)) {
    console.log("Hmmm....well, isn't a number O_o");
  } else if (examResult < 0 || examResult > 100) {
    console.log("The number must be from 0 to 100 -_-");
  } else if (examResult <= 40) {
    console.log("You failed the exam, try again +_+");
  } else if (examResult <= 70) {
    console.log(
      "You passed the exam, but you have to attend additional classes"
    );
  } else {
    console.log("You passed the exam, get some rest before the next one ^_^");
  }
};
