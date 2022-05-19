class HeaderLoggedIn extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const userDisplayImage = this.attributes.userDisplayImage.value
      const userId = this.attributes.userID.value
      this.innerHTML = `
      <header>
      <nav>
            <input type='checkbox' name='toggle-side-menu'>
          <label for='toggle-side-menu'>
            <span class='menu-icon'></span>
          </label>      
          <section class='side-nav-panel'>
            <ul class='top-nav'>
              <li><a href='saved-partners?${userId}'>Saved partners <i class='fa-solid fa-bookmark'></i></a></li>
              <li><a href='events?${userId}'>Bookings and events <i class='fa-solid fa-book-open'></i></a></li>
              <li><a href='help'>Help <i class='fa-regular fa-circle-question'></i></a></li>
              <li><a href='packages'>Packages <i class='fa-solid fa-cubes-stacked'></i></a></li>
              <li class='header-mobile'><a href='about-us'>About us <i class='fa-solid fa-circle-info'></i></a></li>
              <li><a href='about-us#safety'>Safety <i class='fa-regular fa-circle-check'></i></a></li>
            </ul>
          </section>
      </nav>
    <h1 id='header-logo' >Rent a Partner</h1>
    <section class='social-nav__header'>
      <li class='header-desktop' ><a href='browse-partners'>Book</a></li>
      <li class='header-desktop'><a href='about-us'>About us</a></li>
      <li><a href='profile?${userId}'><img class='user-display-image' src='${userDisplayImage}' alt='User profile image'></a></li>
    </section>
  </header>
      `;
    }
  }
  customElements.define('header-logged-in', HeaderLoggedIn);
  