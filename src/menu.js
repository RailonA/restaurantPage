

export var DisplayMenu = (function () {


                return {
                    displayMenu: function () {
                            // const main = document.querySelector('main');
            
                            const main = document.querySelector('main');
                            main.classList.add('col-12');
                            main.classList.add('col-12');

                            const homeLink = document.querySelector("#home-link");
                            const menuLink = document.querySelector("#menu-link");
                            const contactLink = document.querySelector('#contact-link');
                            homeLink.classList.remove('active');
                            menuLink.classList.add('active');
                            contactLink.classList.remove('active');
            
                            main.innerHTML='';
                            // Meny Card One
                            const menuCardOne = document.createElement('div');
                            menuCardOne.classList.add('card', 'card-body', 'mb-3', 'col-3');
                            const imageOne = document.createElement('img');
                            imageOne.src = 'https://external-preview.redd.it/JVszJQei9uyJeK_Hk2GmZi7DMZZDVobZIi-2YM3SORo.jpg?auto=webp&s=dc69b844a3d4ba4af9c0b154df4133d1b12a3a64';
                            const cardTitleOne = document.createElement('h5');
                            cardTitleOne.classList.add('card-title', 'd-flex', 'justify-content-center');
                            cardTitleOne.textContent = `Card Title`;
                            const cardTextOne = document.createElement('h5');
                            cardTextOne.classList.add('card-text');
                            cardTextOne.textContent = `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;
                            // Meny Card Two
                            const menuCardTwo = document.createElement('div');
                            menuCardTwo.classList.add('card', 'card-body', 'mb-3', 'col-3');
                            const imageTwo = document.createElement('img');
                            imageTwo.src = 'https://external-preview.redd.it/JVszJQei9uyJeK_Hk2GmZi7DMZZDVobZIi-2YM3SORo.jpg?auto=webp&s=dc69b844a3d4ba4af9c0b154df4133d1b12a3a64';
                            const cardTitleTwo = document.createElement('h5');
                            cardTitleTwo.classList.add('card-title','d-flex', 'justify-content-center');
                            cardTitleTwo.textContent = `Card Title`;
                            const cardTextTwo = document.createElement('h5');
                            cardTextTwo.classList.add('card-text');
                            cardTextTwo.textContent = `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;
                            // Meny Card Three
                            const menuCardThree = document.createElement('div');
                            menuCardThree.classList.add('card', 'card-body', 'mb-3', 'col-3');
                            const imageThree = document.createElement('img');
                            imageThree.src = 'https://external-preview.redd.it/JVszJQei9uyJeK_Hk2GmZi7DMZZDVobZIi-2YM3SORo.jpg?auto=webp&s=dc69b844a3d4ba4af9c0b154df4133d1b12a3a64';
                            const cardTitleThree = document.createElement('h5');
                            cardTitleThree.classList.add('card-title','d-flex', 'justify-content-center');
                            cardTitleThree.textContent = `Card Title`;
                            const cardTextThree = document.createElement('h5');
                            cardTextThree.classList.add('card-text');
                            cardTextThree.textContent = `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;

                            menuCardOne.appendChild(imageOne);
                            menuCardOne.appendChild(cardTitleOne);
                            menuCardOne.appendChild(cardTextOne);
                            main.appendChild(menuCardOne);

                            menuCardTwo.appendChild(imageTwo);
                            menuCardTwo.appendChild(cardTitleTwo);
                            menuCardTwo.appendChild(cardTextTwo);
                            main.appendChild(menuCardTwo);

                            menuCardThree.appendChild(imageThree);
                            menuCardThree.appendChild(cardTitleThree);
                            menuCardThree.appendChild(cardTextThree);
                            main.appendChild(menuCardThree);


                // main.innerHTML = `
                // <div class="card-group">
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // </div>
                // <div class="card-group">
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // </div>
                // <div class="card-group">
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // <div class="card">
                //     <img class="card-img-top" src=".../100px180/" alt="Card image cap">
                //     <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                //     </div>
                // </div>
                // </div>`
                
                  }       
            };
        })();
