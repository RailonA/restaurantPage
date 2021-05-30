

export var DisplayMenu = (function () {


                return {
                    displayMenu: function () {
                            // const main = document.querySelector('main');
            
                            const mainDiv = document.querySelector('main');
            
                            const homeLink = document.querySelector("#home-link");
                            const menuLink = document.querySelector("#menu-link");
                            const contactLink = document.querySelector('#contact-link');
                            homeLink.classList.remove('active');
                            menuLink.classList.add('active');
                            contactLink.classList.remove('active');
            
                            mainDiv.innerHTML='';
                            const menuCard = document.createElement('div');
                            menuCard.classList.add('card', 'card-body', 'mb-3', 'col-4');
            
                            const image = document.createElement('img');
                            image.src = 'https://external-preview.redd.it/JVszJQei9uyJeK_Hk2GmZi7DMZZDVobZIi-2YM3SORo.jpg?auto=webp&s=dc69b844a3d4ba4af9c0b154df4133d1b12a3a64';
                            const cardTitle = document.createElement('h5');
                            cardTitle.classList.add('card-title');
                            cardTitle.textContent = `Card Title`;
                            const cardText = document.createElement('h5');
                            cardText.classList.add('card-text');
                            cardText.textContent = `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;
                          

                            image.src = 'https://external-preview.redd.it/JVszJQei9uyJeK_Hk2GmZi7DMZZDVobZIi-2YM3SORo.jpg?auto=webp&s=dc69b844a3d4ba4af9c0b154df4133d1b12a3a64';
                            cardTitle.textContent = `Card Title`;
                            cardText.textContent = `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;
                          
                            menuCard.appendChild(image);
                            menuCard.appendChild(cardTitle);
                            menuCard.appendChild(cardText);
                            mainDiv.appendChild(menuCard);
                            mainDiv.appendChild(menuCard);

                       

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
