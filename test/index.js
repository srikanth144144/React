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

// const a = "welcome to bangalore";
// const b = a.split(" ").reverse().join(" ");
// const c = b.split("").reverse().join("");
// console.log(c);

// const a = "heart";
// const b = "earth";
// const c = a.split("").sort().join("");
// const d = b.split("").sort().join("");
// if (c === d) {
//   console.log("anagram ");
// } else {
//   console.log(" not anagram");
// }
// const a = [1, 2, 3, 7, 1, 3, 6, 8, 2, 1, 3];
// const b = new Set(a);
// console.log(b);

// const a = [1, 2, 3, 4];
// const b = [5, 6, 7, 8, 9];
// const c = [...a, ...b];
// console.log(c);
// let a = [1, 2, 21, 11, 111, 12, 3, 13];
// console.log(
//   a.sort((a, b) => {
//     return a - b;
//   })
// );

// let x = [1, 2, 3, undefined, "xyz"];
// let c = x.filter((n) => typeof n === "number");
// console.log(c);
// const a = [1, 2, 3, 4, 2, 5, 2, 3, 4, 5];
// const b = new Set(a);
// console.log(b);

// const a = "Hai all of you";
// const b = a.split(" ").reverse().join(" ").split("").reverse().join("");
// console.log(b);

// const hari = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 5,
// };
// console.log(Object.entries(hari).length);
// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const b = a.slice(4);
// console.log(b);
// console.log(a);

// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const b = a.splice(4, 2, 10, 11, 12);
// console.log(b);
// console.log(a);

// const a = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wensday",
//   "thursday",
//   "sunday",
//   " wensday",
// ];
// const b = a.splice(5, 2, "friday", "saturday");
// console.log(b);
// console.log(a);
// const element = document.getElementById("one");
// console.log(element);

// let str = "Hai Hari ";
// let str1 = str.split("").reverse().join("");
// console.log(str1);
// const a = 25;
// const b = function () {
//   console.log(a);
// };
// b();
// var x;
// console.log(x);
// var a = 20;
// {
//   let a = 50;
// }
// console.log(a);

function x() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x();
