import { reverse } from "./tasks/reverse.js";
import { promptFunc } from "./tasks/prompt.js";
import { getWord } from "./tasks/getWord.js";
import { filterShows, shows, filterCriteria } from "./tasks/filterShows.js";

//
//
/* ********** REVERSE ******* */
console.log(reverse("wwwqqqeee123451q2w3e4r"));
console.log(reverse("wwwqqqeee 12345 1q2w3e4r"));
console.log(reverse("kek"));
console.log(reverse("kek  kek"));

//
//
/* ********** filterShows ******* */
console.log(filterShows(shows, filterCriteria));

//
//
/* ********** getWord ******* */
console.log(getWord(2, ["фильм", "фильма", "фильмов"]));
console.log(getWord(5, ["предмет", "предмета", "предметов"]));

//
//
/* ********** PROMPT ******* */

// promptFunc();
