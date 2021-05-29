/* eslint-disable no-undef */
// <body>
//   <div id="content">
//   </div>
// </body>

 import {
   DisplayHome
  } from './home.js';
  import {
    DisplayMenu
   } from './menu.js';
 

const header = document.createElement('header');
const contentSelector = document.querySelector('#content');
header.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">

  <div class="collapse navbar-collapse justify-content-md-center">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" id="home-link">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="menu-link">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="contact-link">Contact Us</a>
      </li>
    </ul>
  </div>

</div>
</nav>`;

contentSelector.append(header);
// Display Home Page  displayHome();
const main = document.createElement('main');
contentSelector.append(main);
const homeLink = document.querySelector("#home-link");
homeLink.addEventListener("click", DisplayHome.displayHome())

// Display Menu Page  displayMenu();
const MenuLink = document.querySelector("#menu-link");
MenuLink.addEventListener("click", DisplayMenu.displayMenu())




const footer = document.createElement('footer');

footer.classList.add('py-4','bg-dark','flex-shrink-0');
footer.innerHTML=`
<div class="container text-center">
  <a href='https://www.freepik.com/photos/background' class='text-muted'>This is the footer</a>
</div>`;

contentSelector.append(footer);

const mainSelector = document.querySelector('main');


const contactLink = document.querySelector('#contact-link');

contactLink.addEventListener("click", e => {
  mainSelector.innerHTML = `
  <div class="container">

<div class="row">
  <h1 class="header-title"> Contact </h1>
  <hr>
  <div class="col-sm-6">
    <iframe width="100%" height="320px;" frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.622139199621!2d-74.82882132173242!3d11.008790582397756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c84c74a8641276e!2sTEXANO%201931%20COMIDAS%20RAPIDAS%20Y%20ASADOS!5e0!3m2!1ses!2sco!4v1622259091106!5m2!1ses!2sco"
      allowfullscreen></iframe>
  </div>

  <div class="col-sm-6">
    <form action="form.php" class="contact-form" method="post">

      <div class="form-group">
        <input type="text" class="form-control" id="name" name="nm" placeholder="Name" required="" autofocus="">
      </div>


      <div class="form-group form_left">
        <input type="email" class="form-control" id="email" name="em" placeholder="Email" required="">
      </div>

      <div class="form-group">
        <textarea class="form-control textarea-contact" rows="5" id="comment" name="FB"
          placeholder="Type Your Message/Feedback here..." required=""></textarea>
        <br>
        <button class="btn btn-dark"> <i class="fas fa-paper-plane"></i> Send </button>
      </div>
    </form>
  </div>
</div>

</div>

<div class="container second-portion">
<div class="row">
  <div class="col-xs-12 col-sm-6 col-lg-4">
    <div class="box">
      <div class="icon">
        <div class="info">
          <h3 class="title">MAIL</h3>
          <p>
            <i class="fa fa-envelope" aria-hidden="true"></i> thisrestaurant@myrestaurant.com
          </p>
        </div>
      </div>
      <div class="space"></div>
    </div>
  </div>

  <div class="col-xs-12 col-sm-6 col-lg-4">
    <div class="box">
      <div class="icon">
        <div class="info">
          <h3 class="title">CONTACT</h3>
          <p>
            <i class="fab fa-whatsapp-square"></i> (+57)-9624XXXXX
          </p>
        </div>
      </div>
      <div class="space"></div>
    </div>
  </div>

  <div class="col-xs-12 col-sm-6 col-lg-4">
    <div class="box">
      <div class="icon">
        <div class="info">
          <h3 class="title">ADDRESS</h3>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i> 15/3 Junction Plot Shree Krishna Krupa",
            Rajkot - 360001.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`
})

