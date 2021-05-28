// <body>
//   <div id="content">
//   </div>
// </body>
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

const main = document.createElement('main');
main.classList.add("px-5", "py-4", "justify-content-center")
main.innerHTML=`
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
  <h5 class="card-title">Dark card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
  <h5 class="card-title">Dark card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
  <h5 class="card-title">Dark card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
`
contentSelector.append(main);

const footer = document.createElement('footer');

footer.classList.add('py-4','bg-dark','flex-shrink-0');
footer.innerHTML=`
<div class="container text-center">
  <a href='https://www.freepik.com/photos/background' class='text-muted'>This is the footer</a>
</div>`;

contentSelector.append(footer);