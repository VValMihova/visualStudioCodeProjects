function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];
  input.forEach((element) => {
    const [name, age] = element.split(" ");
    const cat = new Cat(name, age);
    cats.push(cat);
  });

  cats.forEach((el) => {
    el.meow();
  });
}

cats(["Mellow 2", "Tom 5"]);
