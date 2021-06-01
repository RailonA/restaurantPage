const renderMenuPage = (() => ({
  displayMenu() {
    const main = document.querySelector('#content');
    const homeLink = document.querySelector('#home-link');
    const menuLink = document.querySelector('#menu-link');
    const contactLink = document.querySelector('#contact-link');
    const bodySel = document.querySelector('body');
    bodySel.classList.add('bodyBackground2');
    main.classList.add('mx-auto');
    homeLink.classList.remove('active');
    menuLink.classList.add('active');
    contactLink.classList.remove('active');
    main.innerHTML = '';
    renderMenuPage.card('./images/picanha.jpeg', 'Pincanha Wagyu', 'Top sirloin cap, also known as Brazilian picanha, is an inexpensive and flavorful steak that can be roasted or grilled.', '1000');
    renderMenuPage.card('./images/ribeye.jpeg', 'Rib Eye', 'The rib eye or ribeye (also known as Scotch fillet in Australia and New Zealand), is a beef steak from the rib section. The rib section of beef spans from ribs six through twelve. Ribeye steaks are mostly composed of the Longissimus dorsi muscle but also contain the Complexus and Spinalis muscles.', '1000');
  },
  card(picture, title, description, price) {
    const main = document.querySelector('#content');
    const divCard = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardTitle = document.createElement('h4');
    const cardText = document.createElement('h5');
    const priceTag = document.createElement('h5');
    divCard.classList.add('background', 'my-2');
    cardImage.src = picture;
    cardImage.classList.add('rounded-circle', 'max-width-pic');
    cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');
    cardTitle.textContent = title;
    cardText.classList.add('card-text', 'description-mw');
    cardText.textContent = description;
    priceTag.textContent = `Price: ${price} USD $`;
    divCard.append(cardImage);
    divCard.append(cardTitle);
    divCard.append(cardText);
    divCard.append(priceTag);
    main.append(divCard);
  },
}))();
export default renderMenuPage;
