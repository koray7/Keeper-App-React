import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from './emojipedia';

var numbers = [10, 20, 30, 60];

// function double(x) {
//     return x * 2;
// }
// const newNumbers = numbers.map(double)
// console.log(newNumbers)

// const newNumbers = numbers.filter(function (num) {
//     return num <= 20
// });


// var newNumbers = [];

// numbers.forEach(function(num) {
//     if(num<=5) {
//     newNumbers.push(num) 
//     } else {
//         console.log("No needed")
//     }
// })

// var number = 0;

// numbers.forEach(function(currentNumber) {
//     number += currentNumber
// });

// const number = numbers.reduce(function(totalNumber, currentNumber) {
//     return totalNumber + currentNumber
// })

// console.log(number)
// const imageSizes = [
//     { name: "horizontal", width: 600, height: 380 },
//     { name: "vertical", width: 400, height: 650 },
//     { name: "thumbnail", width: 300, height: 300 },
//   ];
//   imageSizes.map((a) => {
//     const capitalizedName = a.name[1].toUpperCase()
//     // return `${capitalizedName} image - ${a.width} x ${a.height}`;
//     console.log(`${capitalizedName} image - ${a.width} x ${a.height}`)
//   });

// const newN = numbers.findIndex(function(num){
//     return num > 30
// })
// console.log(newN)

// console.log(emojipedia);

const mean = emojipedia.map(function(emojimeaning) {
    return emojimeaning.meaning.substring(0, 100);
})
console.log(mean)




ReactDOM.render(
<App />

, document.getElementById("root"));
