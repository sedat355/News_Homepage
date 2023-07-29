"use strict"

const menuIcon = document.querySelector('.menu_icon')
const closeIcon = document.querySelector('.close_icon')
const navIcons = document.querySelectorAll('.icons')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hide');
    menuIcon.classList.remove('show');
    closeIcon.classList.add('show');
    closeIcon.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.add('hide');
    closeIcon.classList.remove('show');
    menuIcon.classList.add('show');
    menuIcon.classList.remove('hide');
})