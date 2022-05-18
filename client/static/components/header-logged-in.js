class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
        <style>
       
  
        </style>
        
        <nav class="nav-list">
        <article class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
       
        <ul class="menu__box" >
        <li class="menu__item"><a href="#" >Bookmark <i class="fa-solid fa-bookmark"></i></a></li>  
        <li class="menu__item"><a href="#" >Booking and events <i class="fa-regular fa-book-open"></i></a></li>  
        <li class="menu__item"><a href="#" >Help <i class="fa-regular fa-circle-question"></i></a></li>  
        <li class="menu__item"><a href="#" >Packages <i class="fa-light fa-cart-flatbed-boxes"></i></a></li> 
        <li class="menu__item"><a href="#" >Safety <i class="fa-solid fa-bookmark"></i></a></li>   
      </ul>
      </article >
      
      <h1 class="logo" >Rent a Partner</h1>
        
        <ul class="nav-l">
          <li ><a href="">Book</a></li>
          <li ><a href="">About us</a></li>
          <li><a href="">Login</a></li>
        </ul>
        
      </nav>
      
    
     
      `;
    }
  }
  customElements.define("header-component", Header);
  