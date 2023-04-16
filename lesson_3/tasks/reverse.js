"use string";

/* 
Создайте функцию, которая принимает строку и возвращает true, 
если строка является палиндромом (читается одинаково вперед и назад), 
в противном случае false.
*/

export const reverse = (str) => {
  const reverseStr = str.toLowerCase().split("").reverse().join("");
  return str === reverseStr;
};
