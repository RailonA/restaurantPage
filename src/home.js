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
            const description = document.createElement('h1');
            backgroundDiv.classList.add('background');
            logo.src='./images/logo.png'
            logo.classList.add('rounded-circle', 'my-2');
            main.classList.add('my-2','mx-auto');
            description.textContent= "Welcome";
            main.innerHTML = ``  
            main.appendChild(backgroundDiv); 
            backgroundDiv.appendChild(description); 
            backgroundDiv.appendChild(logo); 
            
         }        
     };
  })();
  

