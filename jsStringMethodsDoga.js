import input from './input.js'

let inputText = await input('Kérem a neved: ');
let HelperArray = inputText.split("");
let HelperStr1 = "";
let HelperStr2 = "";
let HelperStr3 = "";
let HelperStr4 = HelperArray.slice(4,11);
let HelperStr5 = inputText.toUpperCase();
let HelperStr6 = "";
let HelperStr7 = "";
let HelperStr8 = "";

for (let i = 0; i < 5; i++) {
    HelperStr1 += HelperArray[i];  
}
for (let i = 5; i < HelperArray.length; i++) {
    HelperStr3 += HelperArray[i];  
}
for (let i = 3; i <= 8; i++) {
    HelperStr2 += HelperArray[i];  
}

//1.feladat
console.log(HelperStr1);
//2.feladat
console.log(HelperStr2);
//3.feladat
console.log(HelperStr3);
//4.feladat
console.log(HelperStr4);
//5.feladat
console.log(HelperStr5);
//6.feladat

//7.feladat

//8.feladat
