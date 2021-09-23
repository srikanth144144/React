// const obj = {
//   name: "Gani",
//   age: 24,
//   id: 123,
// };
// function aadher() {
//   console.log(this.name);
//   console.log(this.age);
//   console.log(this.id);
// }
// function pancard(lastname, a, b, c, d) {
//   console.log(this.name);
//   console.log(this.age);
//   console.log(this.id);
//   console.log(lastname, a, b, c, d);
// }
// const ganesh = pancard.bind(obj, [1, 2, 3, 4, 5]);
// ganesh();

// var a = 1;
// var b = { a: 1 };
// function m(a, b) {
//   a = 2;
//   b.a = 3;
//   console.log(a);
//   console.log(b.a);
// }
// m(a, b);
// console.log(a);
// console.log(b.a);

// var x = 1;
// function m() {
//   console.log(x);
//   var x = 10;
// }
// m();

/////
// function m() {
//   console.log(this);
// }
// m();

// const a = [1, 2, 3, 4, 5];
// const b = a.join();
// console.log(b);

// const obj = {
//   a: 1,
//   b: 2,
//   c() {
//     console.log(this.a + this.b);
//   },
// };
// // obj.c();
// const d = obj.c;
// d();
// const obj = {
//   a: 1,
//   b: () => {
//     // console.log(this.a++);
//     console.log(this.a);
//   },
// };

// obj.b();

// const obj = {
//   a: 1,
//   n: function () {
//     const x = () => {
//       console.log(this.a);
//     };
//     x();
//   },
// };
// obj.n();

// const a = {
//   a: 1,
//   b: "srikanth",
//   c: 24,
// };
// console.log(delete a.c);
// console.log(a);
// console.log([] + []);

// var A = {
//   x: function () {
//     console.log("x");
//     return A;
//   },
//   y: function () {
//     console.log("y");
//     return A;
//   },
//   z: function () {
//     console.log("z");
//     return A;
//   },
// };
// A.x().y().z();

// let fun = function () {
//   {
//     let l = "let";
//     var v = "var";
//   }

//   console.log(v);
//   console.log(l);
// };
// fun();
// console.log(5 < 6 < 7);
// console.log(7 > 6 > 5);
