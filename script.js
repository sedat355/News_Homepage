"use strict"

const menuIcon = document.querySelector('.menu_icon')
const closeIcon = document.querySelector('.close_icon')
const navList = document.querySelector('.nav_list')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hide');
    menuIcon.classList.remove('show');
    closeIcon.classList.add('show');
    closeIcon.classList.remove('hide');

    navList.classList.add('show');

});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.add('hide');
    closeIcon.classList.remove('show');
    menuIcon.classList.add('show');
    menuIcon.classList.remove('hide');

    navList.classList.remove('show');
})