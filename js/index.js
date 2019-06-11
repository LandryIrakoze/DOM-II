// Your code goes here
//Logo Size Toggle
const title = document.querySelector('.logo-heading');
title.addEventListener('dblclick', () => {
    title.classList.toggle('logo-heading-big');
});

//Nav Items
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
}));
navItems.forEach(item => item.addEventListener('mouseover', () => {
    item.classList.toggle('a-hover');
}));
navItems.forEach(item => item.addEventListener('mouseout', () => {
    item.classList.toggle('a-hover');
}));

//Destination Items
const destinationItems = document.querySelectorAll('.destination');
destinationItems.forEach(item => item.addEventListener('mouseenter', () => {
   item.classList.toggle('destination-background');
}));
destinationItems.forEach(item => item.addEventListener('mouseleave', () => {
   item.classList.toggle('destination-background');
}));

//Button
const button = document.querySelectorAll('.btn');
button.forEach(item => item.addEventListener('click', () => {
    alert("you are signed up! 🌴");
}));

//Scroll
// const home = document.querySelector('.home');
// home.addEventListener('mousemove', (e) => {
//     home.style.backgroundColor = `rgb(${e.offsetX * 10},${e.offsetY * 10},100)`
// })

//MouseMove
const header = document.querySelectorAll('h2');
header.forEach(item => item.addEventListener('mousemove', (e) => {
    console.log("its working!");
}));

//Scroll
const home = document.querySelector('.home');
home.addEventListener('wheel', (e) => {
    console.log(e.deltaX, e.deltaY);
});


//Copy
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(item => item.addEventListener('copy', copyItem));
function copyItem() {
    console.log("selected!");
}

//focus 
//blur

//before input/keydown
//select

/* 
Preventdefault();
alert
*/