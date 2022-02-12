// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greet() {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   }
// }

// class Client extends Person {
//   constructor(firstName, lastName, email, city) {
//     super(firstName, lastName);
//     this.email = email;
//     this.city = city;
//   }

//   greet() {
//     return super.greet() + " I'm from " + this.city;
//   }

//   // greet() {
//   //   return `${this.firstName} Email: ${this.email}`;
//   // }
// }

// const john = new Person("john", "doe");
// console.log(john.greet());

// const mary = new Client("mary", "mike", "mary@mary.com", "NY");
// console.log(mary.greet());

class Restaurant {
  constructor(name, cusineType, served) {
    this.name = name;
    this.cusineType = cusineType;
    this.served = 0;
  }

  showInfo() {
    return `${this.name} is a restaurant of ${this.cusineType} meal.`;
  }

  // 0 - sun
  // 1 = mon
  // 2 = tue
  // 3 = wed
  // 4 = thu
  // 5 = fri
  // 6 = sat

  isOpen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`;
    } else {
      if (currentHour > 9 && currentHour < 22) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }

  serve() {
    return this.served +=1;
  };

  setServed(){   
   return Math.floor(res);
  }

  showTotalServed(){
    return Math.floor(res + (this.serve() -1));
  }

}

const res = Number(prompt("введите количество посетителей"));

const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");

console.log(beshBarmak.showInfo());
console.log(beshBarmak.isOpen());

console.log(beshBarmak.serve());
console.log(beshBarmak.serve());
console.log(beshBarmak.setServed());
console.log(beshBarmak.showTotalServed());


