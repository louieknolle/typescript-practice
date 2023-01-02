// // const printName = (person: { first: string; last: string }): void => {
// //   console.log(`${person.first} ${person.last}`);
// // };

// // printName({ first: "Louie", last: "Knolle" });

// // let coordinate: { x: number; y: number } = { x: 34, y: 32 };

// // const randomCoord = (): { x: number; y: number } => {
// //   return { x: Math.random(), y: Math.random() };
// // };

// // printName({ first: "Mick", last: "Jagger", age: 473 });

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: { x: number; y: number } = { x: 34, y: 32 };

// const randomCoord = (): Point => {
//   return { x: Math.random(), y: Math.random() };
// };

// const doublePoint = (point: Point): Point => {
//   return { x: point.x * 2, y: point.y * 2 };
// };

// // type MyNum = number;
// // let age: MyNum = 31;

// const calculatePayout = (song: Song): number => {
//   return song.numStreams * 0.0033;
// };

// const printSong = (song: Song): void => {
//   console.log(`${song.title} - ${song.artist}`);
// };

// type Song = {
//   title: string;
//   artist: string;
//   numStreams: number;
//   credits: { producer: string; writer: string };
// };

// type User = {
//   readonly id: number;
//   username: string;
// };

// const user: User = {
//   id: 123,
//   username: "Cat Stevens",
// };

// console.log(user.id);

// type Circle = {
//   radius: number;
// };

// type Colorful = {
//   color: string;
// };

// type ColorfulCircle = Circle & Colorful;

// const happyFace: ColorfulCircle = {
//   radius: 4,
//   color: "yellow",
// };

// type Cat = {
//   numLives: Number;
// };

// type Dog = {
//   breed: string;
// };

// type CatDog = Cat &
//   Dog & {
//     age: number;
//   };

// const doggy: CatDog = {
//   numLives: 7,
//   breed: "husky",
//   age: 9,
// };
