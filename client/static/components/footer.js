class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer id='footer'>
            <section class='footer-max-width'>
                <ul>
                    <li><a href='#'>Back to top</a></li>
                    <li><a href='#about-us'>About us</a></li>
                    <li><a href='browse-partners'>Book</a></li>
                </ul>
                <ul>
                    <li><a href='#'>Terms and conditions</a></li>
                    <li><a href='#'>Privacy policy</a></li>
                    <li><a href='#'>Copyright</a></li>
                </ul>
                <ul>
                    <li><a href='packages'>Packages</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Safety</a></li>
                </ul>
                
                <ul class='socials-logo'>
                    <li><a class='logo' href='/'>Rent a partner</a></li>
                    <ul class='socials'>
                        <li><a href='https://www.facebook.com/'><i class='fa-brands fa-facebook-f'></i></a></li>
                        <li><a href='https://www.instagram.com/?hl=en'><i class='fa-brands fa-instagram'></i></a></li>
                        <li><a href='https://twitter.com/'><i class='fa-brands fa-twitter'></i></a></li>
                        <li><a href='https://www.linkedin.com/'><i class='fa-brands fa-linkedin-in'></i></a></li>
                    </ul>
                </ul>
          </section>
        </footer>
      `;
    }
  }
  
customElements.define('footer-component', Footer);