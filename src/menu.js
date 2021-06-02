const renderMenuPage = (() => ({
  displayMenu() {
    const main = document.querySelector('#content');
    const homeLink = document.querySelector('#home-link');
    const menuLink = document.querySelector('#menu-link');
    const contactLink = document.querySelector('#contact-link');
    const bodySel = document.querySelector('body');
    bodySel.classList.add('bodyBackground2');
    main.classList.add('mx-auto');
    main.classList.add('my-2', 'col-8', 'd-flex', 'flex-wrap', 'justify-content-center');
    homeLink.classList.remove('active');
    menuLink.classList.add('active');
    contactLink.classList.remove('active');
    main.innerHTML = '';
    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');
    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');
    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');
    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');
  },
  card(picture, title, description, price) {
    const main = document.querySelector('#content');
    const divCard = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardTitle = document.createElement('h4');
    const cardText = document.createElement('h5');
    const priceTag = document.createElement('h5');
    divCard.classList.add('col-4', 'background', 'm-4');
    cardImage.src = picture;
    cardImage.classList.add('rounded-circle', 'd-flex', 'justify-content-center', 'col-6', 'ml-50');
    cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');
    cardTitle.textContent = title;
    cardText.classList.add('card-text', 'd-flex', 'justify-content-center');
    cardText.textContent = description;
    priceTag.textContent = `Price  USD  $: ${price}`;
    divCard.append(cardImage);
    divCard.append(cardTitle);
    divCard.append(cardText);
    divCard.append(priceTag);
    main.append(divCard);
  },
}))();
export default renderMenuPage;
