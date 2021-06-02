const pageLoad = (() => {
  const contentContainer = document.querySelector('body');
  const header = document.createElement('header');
  header.innerHTML = `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mx-auto">
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
  </nav>
  `;
  const main = document.createElement('div');
  main.setAttribute('id', 'content');

  const footer = document.createElement('footer');

  footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0', 'col-12', 'align-self-center');
  footer.innerHTML = `
  <div class="container text-center">
    <a href='https://www.freepik.com/photos/background' class='text-muted'>Background photo created by benzoix - www.freepik.com</a>
  </div>`;

  contentContainer.append(header);
  contentContainer.append(main);
  contentContainer.append(footer);
})();

export default pageLoad;