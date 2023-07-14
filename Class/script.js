class Person {
  constructor(name, surName, birthdayDate) {
    this.name = name;
    this.surName = surName;
    this.birthdayDate = birthdayDate;
  }

  getDate() {
    const currentDate = new Date();
    const birthDate = new Date(this.birthdayDate);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    const years = age;
    const months = monthDiff;
    const days = dayDiff;

    if (dayDiff < 0) {
      months--;
      const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days = daysInMonth - birthDate.getDate() + currentDate.getDate();
    }

    if (monthDiff < 0) {
      years--;
      months = 12 - birthDate.getMonth() + currentDate.getMonth();
      if (dayDiff < 0) {
        months--;
      }
    }

    return `${years} years, ${months} month, ${days} days`;
  }

  render() {
    const rootDiv = document.createElement("div");
    rootDiv.classList.add("root");

    const nameP = document.createElement("p");
    nameP.classList.add("name");
    nameP.textContent = `Name: ${this.name} ${this.surName}`;

    const birthdayP = document.createElement("p");
    birthdayP.classList.add("birthday");
    birthdayP.textContent = `Birthday: ${this.birthdayDate}`;

    const yearsP = document.createElement("p");
    yearsP.classList.add("years");
    yearsP.textContent = `Years old: ${this.getDate()}`;

    rootDiv.appendChild(nameP);
    rootDiv.appendChild(birthdayP);
    rootDiv.appendChild(yearsP);

    document.body.appendChild(rootDiv);
  }
}

const person = new Person("Ivan", "Iavanov", "1590-07-12");
person.render();
