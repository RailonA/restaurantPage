const renderHomePage = (() => ({
  displayHome() {
    const main = document.querySelector('#content');
    const homeLink = document.querySelector('#home-link');
    const menuLink = document.querySelector('#menu-link');
    const contactLink = document.querySelector('#contact-link');
    const bodySel = document.querySelector('body');
    bodySel.classList.remove('bodyBackground2');
    homeLink.classList.add('active');
    menuLink.classList.remove('active');
    contactLink.classList.remove('active');
    const logo = document.createElement('img');
    const backgroundDiv = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('h4');
    const divDescription = document.createElement('div');
    divDescription.classList.add('description-mw');
    description.textContent = "We make eating good in the woods feel safe";
    backgroundDiv.classList.add('background', 'my-2', 'text-center');
    logo.src = './images/logo.png';
    
    logo.classList.add('rounded-circle', 'my-1', 'col-3', 'logo');
    title.textContent = 'Welcome to';
    main.innerHTML = '';
    main.classList.add('mx-auto');
    main.append(backgroundDiv);
    backgroundDiv.appendChild(title);
    backgroundDiv.appendChild(logo);
    backgroundDiv.appendChild(divDescription);
    divDescription.appendChild(description);
  },
}))();

export default renderHomePage;