// define module

// const main = document.createElement('main');
// const contentSelector = document.querySelector('#content');
// contentSelector.append(main);

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
                    main.innerHTML = `<h1 class="text-center"> Restaurant Page </h1>
                    <div class="card text-white bg-dark mb-3 mx-auto" style="max-width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Delicious FastFood</h5>
                    <p class="card-tex()t">Prepare yourself to taste the heaven in a dish.</p>
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
                    <div class=displayHomeard-text">742 Evergreen Terrace.</p>
                    </div>
                    </div>`   
                   
         }
         
     };
  })();
  

