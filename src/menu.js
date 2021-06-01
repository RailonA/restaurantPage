export const DisplayMenu = (() => {
  return {
    displayMenu: function () {
      const main = document.querySelector('main');
      const homeLink = document.querySelector('#home-link');
      const menuLink = document.querySelector('#menu-link');
      const contactLink = document.querySelector('#contact-link');
      homeLink.classList.remove('active');
      menuLink.classList.add('active');
      contactLink.classList.remove('active');
      main.classList.add('align-self-center', 'mt-5', 'justify-content-center');

      main.innerHTML = `
                  <div class='container '>
                  <div class='hero'>
                  <h1 class='d-flex justify-content-center m-5' >Menu</h1>
                  </div>
                  <div class='menu-container col-12 d-flex flex-wrap justify-content-center'>
                     <div class='menu-item col-3 justify-content-center'>
                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                           <div class='item-content col-6'>
                              <h4 class='text-center'>Hamburger: <span>$2.49</span></h4>
                              <p class='text-center'>
                              Buns, patty, tomato, onions, lettuce, and our secret family
                              recipe.
                              </p>
                           </div>
                     </div>
                     <div class='menu-item col-3 justify-content-center'>
                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                           <div class='item-content col-6'>
                              <h4 class='text-center'>Cheeseburger: <span>$2.99</span></h4>
                              <p class='text-center'>Similar to our hamburger, but with cheese.</p>
                           </div>
                     </div>
                     <div class='menu-item col-3 justify-content-center'>
                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                        <div class='item-content col-6'>
                           <h4 class='text-center'>Double Cheeseburger: <span>$3.49</span></h4>
                           <p class='text-center'>Similar to our cheeseburger, but with an extra patty.</p>
                        </div>
                     </div>
                     <div class='menu-item col-3 justify-content-center'>
                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                        <div class='item-content col-6'>
                           <h4 class='text-center'>Steak: <span>$11.99</span></h4>
                           <p class='text-center'>A juicy steak made just how you like it.</p>
                        </div>
                     </div>
                     <div class='menu-item col-3 justify-content-center'>
                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                        <div class='item-content col-6'>
                           <h4 class='text-center'>BBQ Ribs: <span>$8.99</span></h4>
                           <p class='text-center'>Barbecue ribs with your choice of a add-ons.</p>
                        </div>
                     </div>
                     <div class='menu-item col-3 justify-content-center'>
                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                        <div class='item-content col-6'>
                           <h4 class='text-center'>BBQ Ribs: <span>$8.99</span></h4>
                           <p class='text-center'>Barbecue ribs with your choice of a add-ons.</p>
                        </div>
                     </div>
                     <div class='menu-item col-3 justify-content-center'>
                     <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                     <div class='item-content col-6'>
                        <h4 class='text-center'>Caesar Salad: <span>$7.99</span></h4>
                        <p class='text-center'>
                        Your typical caesar salad that comes with your choice of
                        dressings.
                        </p>
                     </div>
                  </div>
                  <div class='menu-item col-3 justify-content-center'>
                  <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />
                     <div class='item-content col-6'>
                        <h4 class='text-center'>French Fries: <span>$1.99</span></h4>
                        <p class='text-center'>
                        Sometimes you don't want to eat your burger alone, why not add
                        some french fries?
                        </p>
                     </div>
                  </div>
                  </div>

                  </div>`;
                  }       
  };
})();
