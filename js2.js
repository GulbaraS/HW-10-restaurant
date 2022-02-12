// task 2 "Cars"

class Cars {
    constructor(model, year, color, engine) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.engine = engine;
}

showInfo() {
  return(
    `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Engine type : ${this.engine}`
  )};
};



class Electrocars extends Cars {
    constructor(model, year, color, engine, batery) {
        super(model, year, color, engine);
        this.batery = batery;
    }

   promote() {
       return(`We have best electocars ever! Follow us and enjoy!`)
   };
    
};


const bmw = new Cars("bmw", "2009", "red", "diesel");
const tesla = new Electrocars("Tesla",2019, "white", "electro", 5);

 console.log(bmw.showInfo());
console.log(tesla.showInfo());
console.log(tesla.promote());