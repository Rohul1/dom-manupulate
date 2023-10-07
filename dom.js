// const byClassname = document.getElementsByClassName("title")
// console.log(byClassname);

// const names = ["rohul", "mohon", "jakaria", "she"]

// for (const name of names) {
//     console.log(name + "chowdhury")
// }
// const liCollection = document.getElementsByTagName("li")
// // console.log(liCollection)
// for (const li of liCollection) {
//     console.log(li)
// }

// const allHeadings = document.getElementsByTagName("h1")
// for (const h1 of allHeadings) {
//     console.log(h1.innerText);
// }

const fruits = document.getElementsByClassName("all-fruits");
for (const fruit of fruits) {
    console.log(fruit.innerText);
}

const fruitLi = document.querySelectorAll(".all-fruits li");
// console.log(fruitLi);
for (const allFruitLi of fruitLi) {
    console.log(allFruitLi);
}