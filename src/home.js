// define module

export var DisplayHome = (function () {
    return {
        displayHome: function () {
            const main = document.querySelector('main');
            const homeLink = document.querySelector("#home-link");
            const menuLink = document.querySelector("#menu-link");
            const contactLink = document.querySelector('#contact-link');
            homeLink.classList.add('active');
            menuLink.classList.remove('active');
            contactLink.classList.remove('active');
            const logo = document.createElement('img');
            const backgroundDiv = document.createElement('div');
            backgroundDiv.classList.add('myDiv');
            logo.src='./images/logo.png'
            logo.classList.add('rounded-circle');
            main.classList.add('align-self-center', 'mt-5');
            
            main.innerHTML = ``  
            main.appendChild(logo); 
            main.appendChild(backgroundDiv); 
            
         },
         card: function(picture, title, description) {
            const main = document.querySelector('main');
            const divCard = document.createElement('div');
            const cardImage = document.createElement('img');
            const cardTitle = document.createElement('h5');
            const cardText = document.createElement('h5');
            divCard.classList.add('card', 'card-body', 'mb-3','rounded-circle');
            cardImage.src = picture;
            cardImage.classList.add('rounded-circle')
            cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');
            cardTitle.textContent = title;
            
            cardText.classList.add('card-text');
            cardText.textContent = description;
            
            divCard.appendChild(cardImage);
            divCard.appendChild(cardTitle);
            divCard.appendChild(cardText);
            main.appendChild(divCard);
         }         
     };
  })();
  

