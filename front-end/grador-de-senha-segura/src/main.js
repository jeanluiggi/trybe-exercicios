import { nanoid } from "nanoid";
// const randomPassword = nanoid();
const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid();
})

// console.log(randomPassword);
// console.log('Hello world');