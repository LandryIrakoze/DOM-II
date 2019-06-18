// Your code goes here
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
}));

const images = document.querySelectorAll('img');
images.forEach(item => addEventListener('wheel', (e) => {
    console.log('test');
}));

const header = document.querySelector('.main-navigation');
header.addEventListener('mousemove', (e) => {
    header.style.backgroundColor = `rgb(180, ${e.clientY % 255}, ${e.clientX % 255})`;
});

const funBusTitle = document.querySelector('.intro h2');
funBusTitle.addEventListener('mouseover', () => {
    funBusTitle.classList.toggle('fun');
})

funBusTitle.addEventListener('mouseleave', () => {
    funBusTitle.classList.toggle('fun');
})

const buttons = document.querySelectorAll('.btn');
buttons.forEach(item => item.addEventListener('click', () => {
    alert('you are signed up!');
}));

const content = document.querySelectorAll('p');
content.forEach(item => item.addEventListener('copy', () => {
    alert('be sure to share our content with your twitter feed!');
}));
