/* eslint-disable no-unused-vars */
import pageLoad from './pageload';
import renderHomePage from './home';
import renderMenuPage from './menu';
import renderContactPage from './contact';

const homeLink = document.querySelector('#home-link');
const menuLink = document.querySelector('#menu-link');
const contactLink = document.querySelector('#contact-link');

homeLink.addEventListener('click', () => { renderHomePage.displayHome(); });
menuLink.addEventListener('click', () => { renderMenuPage.displayMenu(); });
contactLink.addEventListener('click', () => { renderContactPage.displayContact(); });

renderHomePage.displayHome();