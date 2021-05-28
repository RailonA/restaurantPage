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
main.classList.add("px-5", "py-4")
main.innerHTML=`
<h1 class="text-center"> Restaurant Page </h1>
<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Delicious FastFood</h5>
  <p class="card-text">Prepare yourself to taste the heaven in a dish.</p>
</div>
</div>
<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
<div class="card-header">Hours</div>
<div class="card-body">
  <h5 class="card-title">24/7</h5>
  <p class="card-text"> From Thursday to Sunday only.</p>
</div>
</div>
<div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
<div class="card-header">Location</div>
<div class="card-body">
  <h5 class="card-title">Barranquilla, Colombia</h5>
  <p class="card-text">742 Evergreen Terrace.</p>
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