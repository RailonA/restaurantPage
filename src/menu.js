

export var DisplayMenu = (function () {


                return {
                    displayMenu: function () {
                            // const main = document.querySelector('main');
            
                            const main = document.querySelector('main');

                            const homeLink = document.querySelector("#home-link");
                            const menuLink = document.querySelector("#menu-link");
                            const contactLink = document.querySelector('#contact-link');
                            homeLink.classList.remove('active');
                            menuLink.classList.add('active');
                            contactLink.classList.remove('active');
                            main.innerHTML=``;
                            main.classList.add('background');
                            DisplayMenu.card("./images/logo.png","Beef","this comes from cow","1000");
                            DisplayMenu.card("./images/logo.png","Beef","this comes from cow","1000");
                  },
                  card: function(picture, title, description, price) {
                     const main = document.querySelector('main');
                     const divCard = document.createElement('div');
                     const cardImage = document.createElement('img');
                     const cardTitle = document.createElement('h4');
                     const cardText = document.createElement('h5');
                     const priceTag = document.createElement('h5');
                     divCard.classList.add('card', 'card-body', 'mb-3');
                     cardImage.src = picture;
                     cardImage.classList.add('rounded-circle');
                     cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');
                     cardTitle.textContent = title;
                     cardText.classList.add('card-text');
                     cardText.textContent = description;
                     priceTag.textContent = price+" USD $";
                     
                     divCard.appendChild(cardImage);
                     divCard.appendChild(cardTitle);
                     divCard.appendChild(cardText);
                     divCard.appendChild(priceTag);
                     main.appendChild(divCard);
                  }        
            };
        })();
