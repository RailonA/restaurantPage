const renderContactPage = (() => ({
  displayContact() {
    const main = document.querySelector('#content');
    const homeLink = document.querySelector('#home-link');
    const menuLink = document.querySelector('#menu-link');
    const contactLink = document.querySelector('#contact-link');
    const bodySel = document.querySelector('body');
    bodySel.classList.remove('bodyBackground2');
    homeLink.classList.remove('active');
    menuLink.classList.remove('active');
    contactLink.classList.add('active');
    main.innerHTML = `<div class="background my-2 ">

                  <div class="row ">
                    <h1 class="header-title d-flex justify-content-center"> Contact </h1>
                    <hr>
                    <div class="col-sm-6">
                        <iframe width="100%" height="320px;" frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22794.904172424587!2d-110.60580651265356!3d44.42571515608779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351e55555555555%3A0xaca8f930348fe1bb!2sYellowstone%20National%20Park!5e0!3m2!1sen!2sus!4v1622643262533!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                  
                    <div class="col-sm-6 background">
                      <form action="form.php" class="contact-form" method="post">
                  
                        <div class="form-group">
                          <input type="text" class="form-control" id="name" name="nm" placeholder="Name" required="">
                        </div>
                  
                  
                        <div class="form-group form_left">
                          <input type="email" class="form-control" id="email" name="em" placeholder="Email" required="">
                        </div>
                  
                        <div class="form-group">
                          <textarea class="form-control textarea-contact" rows="5" id="comment" name="FB"
                            placeholder="Tips in finding you will be helpful" required=""></textarea>
                          <br>
                          <button class="btn btn-dark"> <i class="fas fa-paper-plane"></i> Send </button>
                        </div>
                      </form>
                    </div>

                  </div>
                  
                  
                  <div class="container my-2">
                  <div class="row background ">
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <div class="box">
                        <div class="icon">
                          <div class="info">
                            <h3 class="title">MAIL</h3>
                            <p>
                              <i class="fa fa-envelope" aria-hidden="true"></i> railonacosta@gmail.com
                            </p>
                          </div>
                        </div>
                        <div class="space"></div>
                      </div>
                    </div>
                  
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <div class="box">
                        <div class="icon">
                          <div class="info">
                            <h3 class="title">CONTACT</h3>
                            <p>
                              <i class="fab fa-whatsapp-square"></i> 123-456-7890
                            </p>
                          </div>
                        </div>
                        <div class="space"></div>
                      </div>
                    </div>
                  
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <div class="box">
                        <div class="icon">
                          <div class="info">
                            <h3 class="title">ADDRESS</h3>
                            <p>
                              <i class="fa fa-map-marker" aria-hidden="true"></i> ABC Street 123 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>`;
  },
}))();
export default renderContactPage;