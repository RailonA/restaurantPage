export const DisplayHome = (function () {
  return {
    displayHome: function () {
      const main = document.querySelector('main');
      const homeLink = document.querySelector('#home-link');
      const menuLink = document.querySelector('#menu-link');
      const contactLink = document.querySelector('#contact-link');
      homeLink.classList.add('active');
      menuLink.classList.remove('active');
      contactLink.classList.remove('active');

      const body = document.querySelector('main');
      const logo = document.createElement('img');
      const backgroundDiv = document.createElement('div');
      const contentText = document.createElement('h5');
    
      backgroundDiv.classList.add('myDiv');
      logo.src='./images/logo.png'
      
      logo.classList.add('rounded-circle', 'd-flex');
      backgroundDiv.classList.add('justify-content-center');
  
      main.classList.add( 'mt-5');
      main.innerHTML = ``  
      
      backgroundDiv.classList.add('justify-content-center');
      contentText.classList.add('card-content', 'd-flex', 'justify-content-center');
      contentText.textContent = 'Welcome to the best Restaurent in town';
      
      backgroundDiv.classList.add('background');
      logo.src='./images/logo.png'
      logo.classList.add('rounded-circle', 'my-2');
      main.classList.add('my-2','mx-auto');
      main.innerHTML = ``
      
      backgroundDiv.appendChild(logo);
      backgroundDiv.appendChild(contentText);
      body.appendChild(backgroundDiv);
      
      main.appendChild(backgroundDiv);
    
         }        
     };
  })();
  

