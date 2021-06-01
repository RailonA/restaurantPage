import { DisplayHome } from './home.js'
import { DisplayMenu } from './menu.js'
import { DisplayContact } from './contactUs.js'
const header = document.createElement('header');
const contentSelector = document.querySelector('#content');
header.innerHTML = `
    <nav class='navbar navbar-expand navbar-dark bg-dark'>
    <div class='container-fluid'>
      <div class='collapse navbar-collapse' id='navbarsExample02'>
        <ul class='navbar-nav mx-auto'>
          <li class='nav-item'>
            <a class='nav-link active' aria-current='page' href='#' id='home-link'>Home</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#' id='menu-link'>Menu</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#' id='contact-link'>Contact Us</a>
          </li>
        </ul>
        </div>
    </div>
    </nav>
    `;

contentSelector.append(header);
const main = document.createElement('main');
contentSelector.append(main);

const homeLink = document.querySelector('#home-link');
const menuLink = document.querySelector('#menu-link');
const contactLink = document.querySelector('#contact-link');

DisplayHome.displayHome();

// DisplayHome.card('./images/logo.png','Logo','this is the description')
// Display Menu Page  displayMenu();
// MenuLink.addEventListener('click', DisplayMenu.displayMenu())
homeLink.addEventListener('click', () => { DisplayHome.displayHome() });
menuLink.addEventListener('click', () => { DisplayMenu.displayMenu() });
contactLink.addEventListener('click', () => { DisplayContact.displayContact() });

const footer = document.createElement('footer');

footer.classList.add('py-4','bg-dark','flex-shrink-0');
footer.innerHTML=`
<div class='container text-center'>
  <a href='https://www.freepik.com/photos/background' class='text-muted'>This is the footer</a>
</div>`;

contentSelector.append(footer);







