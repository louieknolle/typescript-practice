// let age: number | string = 21;
// age = 23;
// age = "24";

// type Point3 = {
//   x: number;
//   y: number;
// };

// type Loc = {
//   lat: number;
//   long: number;
// };

// let coordinates: Point | Loc = { x: 1, y: 34 };
// coordinates = { lat: 123, long: 345 };

// const printAge = (age: number | string): void {
//     console.log(`You are ${age} years old.`)
// }

// printAge(23);
// printAge('87');

// //type narrowing
// const calcTax = (price: number | string, tax: number) => {
//     // return price * tax
//     if (typeof price === 'string') {
//         price = parseFloat(price.replace('$',''));

//         return price * tax;
//     }
// }

// // const nums: number[] = [1,2,3,4]
// // const nums: any[] = [1,2,3,4, true, {}, 'string']
// // const stuff: (number | string)[] = [1,2,3,'string']

// const coords1: (Point | Loc)[] = []
// coords1.push({lat: 321, long: 123})
// coords1.push({ x: 1, y: 1})

// /// LITERAL TYPES
// let zero: 0 = 0;
// let hi: 'hi' = 'hi';

// const giveAnswer = (answer: 'yes' | 'no' |'maybe'): void => {
//     console.log(`The answer is ${answer}`)
// }

// let mood: "happy" | 'sad' = 'happy';
