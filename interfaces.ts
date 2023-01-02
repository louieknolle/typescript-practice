//similar to type aliases, different syntax
//allow us to describe the shape of objects and only objects

// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 1, y: 1 }

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

// interface Person {
//   readonly id: number;
//   first: string;
//   last: string;
//   nickname?: string;
//   //must be method w/ no args that returns string
//   //   sayHi: () => string;
//   sayHi(): string;
// }

const thomas: Person = {
  first: "Thomas",
  last: "hardy",
  nickname: "Tom",
  id: 1234,
  sayHi: () => {
    return "hello";
  },
};

thomas.first = "thjs";
// thomas.id = 23412

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "blue suede shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return newPrice;
  },
};

console.log(shoes.applyDiscount(0.4));

//reopening/ adding to interfaces

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string
}

const elton: Dog = {
    name: 'Elton';
    age: 0.5,
    breed: 'Australian Shep',
    bark() {
        return 'Woof woof'
    }
}

//extending/inheriting from interfaces

interface ServiceDog extends Dog {
    job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
    name: 'Chewy',
    age: 4.5,
    breed: 'lab',
    bark() {
        return 'bark'; 
    },
    job: 'guide dog'
}

//interface multiple inheritance 
interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Person, Employee {
    level: string;
    languages: string[];
}

const pierre: Engineer = {
    name: 'pierre',
    id: 123,
    email: 'email',
    level: 'senior',
    languages: ['js', 'python']
}

// TYPES vs INTERFACES
//interfaces can only describe shape of an object
//interfaces can be reopened and added to with new fields, types cannot (use case: if interface is spread between different files)
//interfaces can be extended to include others, types have to use intersection syntax with & 