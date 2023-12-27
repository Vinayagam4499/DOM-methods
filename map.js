const numbers = [1,2,3,4,5]

const doublenumbers = numbers.map((numbers) => numbers * 2);

console.log(doublenumbers)


// Javascript method: Map 

// Example-1:
// mencari angka * 2 
// to have numbers * 2 (multiple by two) within array angka
// gunakan metode "map" 
// please use "map" method

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Example-2:
// menampilkan jumlah huruf untuk tiap elemen array mahasiswa, result berupa array

// Example-3:
// menampilkan nama dan jumlah huruf untuk tiap elemen array mahasiswa, result berupa object

const mahasiswa = ['Andromeda', 'Bima Sakti', 'Solar System'];


// A. Map method with Function Declaration 

  // Example-1
const newAngka1 = angka.map( function(number) {
  return number * 2;
});
console.log(newAngka1); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength1 = mahasiswa.map(function(nama){
 return nama.length;
});
console.log(strLength1); // result: [9, 10, 12]

  // Example-3  
let mhsObject1 = mahasiswa.map(function(nama){
 return {nama: nama, letters: nama.length} 
});
console.log(mhsObject1); 
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// B. Map method with Arrow Function 

  // Example-1
const newAngka2 = angka.map( (number) => {
  return number * 2;
});
console.log(newAngka2); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength2 = mahasiswa.map( (nama) => {
  return nama.length;
});
console.log(strLength2); // result: [9, 10, 12]

  // Example-3
let mhsObject2 = mahasiswa.map( (nama) => {
  return {nama: nama, letters: nama.length}
});
console.log(mhsObject2); 
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// C. Map method with Arrow Function in Single Line

  // Example-1:
const newAngka3 = angka.map( number => number * 2);
console.log(newAngka3); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2:
let strLength3 = mahasiswa.map( nama => nama.length);
console.log(strLength3); // result: [9, 10, 12]

  // Example-3:
let mhsObject3 = mahasiswa.map( nama => ({nama: nama, letters: nama.length})); // add parentheses () to return object in single line arrow function
console.log(mhsObject3);
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// D. Map Method with Function Declaration inside Function Declaration

  // Example-1
function newAngka4(x){
 return x.map(function(number){
  return number * 2;
 });
}
console.log(newAngka4(angka)); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
function strLength4(x){
 return x.map( function(nama){
  return nama.length;
 }); 
}
console.log(strLength4(mahasiswa)); // result: [9, 10, 12]

  // Example-3
function mhsObject4(x){
 return x.map(function(nama){
  return {nama: nama, letters: nama.length}
 });
}
console.log(mhsObject4(mahasiswa));
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// E. Map Method with Function Declaration inside Function Expression

  // Example-1
let newAngka5 = function(x){
 return x.map(function(number){
   return number * 2;
 });
}
console.log(newAngka5(angka)); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength5 = function(x){
 return x.map( function(nama){
  return nama.length;
 });
}
console.log(strLength5(mahasiswa)); // result: [9, 10, 12] 

  // Example-3
let mhsObject5 = function(x){
 return x.map(function(nama){
  return {nama: nama, letters: nama.length}
 });
}
console.log(mhsObject5(mahasiswa));
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// F. Map Method with Arrow Function inside Function Declaration

  // Example-1
function newAngka6(x){
 return x.map( number => {
  return number * 2;
 })
}
console.log(newAngka6(angka)); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
function strLength(x){
 return x.map( nama => {
  return nama.length;
 });
}
console.log(strLength(mahasiswa)); // result: [9, 10, 12]

  // Example-3
function mhsObject6(x){
 return x.map( nama => {
  return {nama: nama, letters: nama.length}
 });
}
console.log(mhsObject6(mahasiswa));
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// G. Map Method with Arrow Function inside Function Expression

  // Example-1
let newAngka7 = function(x){
 return x.map( number => {
  return number * 2;
 });
}
console.log(newAngka7(angka)); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength7 = function(x){
 return x.map( nama => {
  return nama.length;
 });
}
console.log(strLength7(mahasiswa)); // result: [9, 10, 12]

  // Example-3
let mhsObject7 = function(x){
 return x.map( nama => {
  return {nama: nama, letters: nama.length}
 });
}
console.log(mhsObject7(mahasiswa));
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]


// H. Map Method with Single Line Arrow Function inside Function Declaration

  // Example-1
function newAngka8(x){
 return x.map( number => number * 2);
}
console.log(newAngka8(angka)); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
function strLength8(x){
 return x.map( nama => nama.length);
}
console.log(strLength8(mahasiswa)); // result: [9, 10, 12]

  // Example-3
function mhsObject8(x){
 return x.map( nama => ({nama: nama, letters: nama.length}));
}
console.log(mhsObject8(mahasiswa));
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]

// I. Map Method with Single Line Arrow Function inside Function Expression

  // Example-1
let newAngka9 = function(x){
 return x.map( number => number * 2);
}
console.log(newAngka9(angka)); // result: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

  // Example-2
let strLength9 = function(x){
 return x.map( nama => nama.length);
}
console.log(strLength9(mahasiswa)); // result: [9, 10, 12]

  // Example-3
let mhsObject9 = function(x){
 return x.map( nama => ({nama: nama, letters: nama.length}));
}
console.log(mhsObject9(mahasiswa));
// result: [{letters: 9,
//   nama: "Andromeda"
//   }, {
//   letters: 10,
//   nama: "Bima Sakti"
//   }, {
//   letters: 12,
//   nama: "Solar System"
//   }]

