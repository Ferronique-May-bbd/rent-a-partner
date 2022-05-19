class HeaderLoggedIn extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const userDisplayImage = this.attributes.userDisplayImage.value
      this.innerHTML = `
      <header>
      <nav>
            <input type="checkbox" name="toggle-side-menu">
          <label for="toggle-side-menu">
            <span class="menu-icon"></span>
          </label>      
          <section class="side-nav-panel">
            <ul class="top-nav">
              <li><a href="">Saved partners <i class="fa-solid fa-bookmark"></i></a></li>
              <li><a href="#">Bookings and events <i class="fa-solid fa-book-open"></i></a></li>
              <li><a href="#">Help <i class="fa-regular fa-circle-question"></i></a></li>
              <li><a href="" >Packages <i class="fa-solid fa-cubes-stacked"></i></a></li>
              <li class="header-mobile"><a href="">About us <i class="fa-solid fa-circle-info"></i></a></li>
              <li><a href="#">Safety <i class="fa-regular fa-circle-check"></i></a></li>
            </ul>
          </section>
      </nav>
    <h1 id="header-logo" >Rent a Partner</h1>
    <section class="social-nav__header">
      <li class="header-desktop" ><a href="">Book</a></li>
      <li class="header-desktop"><a href="">About us</a></li>
      <li><a href=""><img class="user-display-image" src="${userDisplayImage}" alt="User profile image"></a></li>
    </section>
  </header>
      `;
    }
  }
  customElements.define("header-logged-in", HeaderLoggedIn);
  