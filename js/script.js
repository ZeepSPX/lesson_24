"use strict"

// ====================================Функції=========================================
// function showName() {
// 	console.log(`Vasily`);
// }
// setTimeout(showName, 0);
// console.log(`Mykolia`);

// =====================================================================================
// showMessage();
// function showMessage() {
// 	console.log(`Повідомлення`);
// }

// =======================================================================================
// let showMessage = function () {
// 	console.log(`Message`);
// }
// showMessage();

// ========================================================================================
// let showMessage;

// if (2 > 1) {
// 	showMessage = function () {
// 		console.log(`Message`);
// 	}
// }
// showMessage();

// =======================================Масиви===================================================

// let arr = [`Vasil`, `Ishtvan`, `Olya`,];
// let newArr = arr;
// newArr.push(`Petro`);
// console.log(arr.length);

// =================================================================================================
// let users = [`Vasil`, `Ishtvan`,];

// let newUsers = users;
// newUsers.push(`Olya`);
// console.log(newUsers);

// let substituteUsers = users;
// substituteUsers.splice(1, 1, `Petro`);
// console.log(substituteUsers);

// let searchUsers = users;
// console.log(searchUsers.find(el => el.length < 10));
// console.log(searchUsers.indexOf(`Petro`));

// let deleteUsers = users;
// let removed = deleteUsers.splice(0, 1);
// console.log(removed);

// let adUsers = users;
// adUsers.splice(0, 0, `Mary`, `Pavlo`);
// console.log(adUsers);

// ========================================================================================================

// let arr = [`Vasil`, `Ishtvan`, `Olya`,];

// let deleteUsers = arr;
// let removed = deleteUsers.splice(1, 1);
// console.log(removed);
// console.log(deleteUsers);
// let adUsers = deleteUsers;
// adUsers.splice(0, 1, `Mary`, `Pavlo`);
// console.log(adUsers);

// ==========================================================================================================

// let str = `Vasil,Ishtvan,Olya`;
// let strArr = str.split(`,`, 3);
// console.log(strArr);

// ==========================================================================================================

// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
// 	console.log(previousValue);
// });

// =====================DOM===================================================================================

// const elemOne = document.querySelector(`[data-say-hi]`);
// const one = elemOne.getAttribute(`data-say-hi`);
// console.log(one);

// ===========================================================================================================

// const textElement = document.getElementsByTagName(`li`)[1];
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

// =============================================================================================================

// const elem = document.querySelectorAll(`.like`);
// console.log(elem);

// =============================================================================================================

// const list = document.querySelectorAll(`ul`);
// list.insertAdjacentHTML(
// 	`beforeend`,
// 	`<li>Text</li>`
// );

// ================================Прокрутка======================================================================

const width = document.documentElement;
const mainWidth = width.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainWidth);

// ================================================================================================================
function scrollPage() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(scrollPage, 1000);

// ===================================================================================================================

const itemOne = document.querySelector('.title');
const itemTwo = document.querySelector('.page__task');
const itemThree = document.querySelector(`.page__img`);

const getItemCoords = itemOne.getBoundingClientRect();
const getItemTwo = itemTwo.getBoundingClientRect();
const getItemThree = itemThree.getBoundingClientRect();

console.log(getItemCoords);
console.log(getItemTwo);
console.log(getItemThree);