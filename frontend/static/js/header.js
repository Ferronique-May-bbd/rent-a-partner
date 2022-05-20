const loadHeader = () => {
    let html = '';
    let header= document.createElement("header");
    if(sessionStorage.UserId) {
        let jsonUserId = JSON.parse(sessionStorage.UserId);
        let profilePic = jsonUserId[0].ProfilePicUrl;
        let userId = jsonUserId[0].Id;
        let roleId = jsonUserId[0].RoleId;
        console.log(roleId);
        
        html = `<nav>
                    <input type='checkbox' name='toggle-side-menu'>
                    <label for='toggle-side-menu'>
                        <span class='menu-icon'></span>
                    </label>      
                    <section class='side-nav-panel'>
                        <ul class='top-nav'>
                        <li><a href='#'>Saved partners <i class='fa-solid fa-bookmark'></i></a></li>
                        <li><a href='${roleId == 1 ? `event-request?${userId}`  : `bookings?${userId}`}'>Bookings and events <i class='fa-solid fa-book-open'></i></a></li>
                        <li><a href='#'>Help <i class='fa-regular fa-circle-question'></i></a></li>
                        <li><a href='/packages'>Packages <i class='fa-solid fa-cubes-stacked'></i></a></li>
                        <li class='header-mobile'><a href='/#about-us'>About us <i class='fa-solid fa-circle-info'></i></a></li>
                        <li><a href='#'>Safety <i class='fa-regular fa-circle-check'></i></a></li>
                        <li><a href='/logout'>LogOut <i class="fa-solid fa-arrow-right-from-bracket"></i></a></li>
                        </ul>
                    </section>
                </nav>
                <a href='/'><h1 id='header-logo' >Rent a Partner</h1></a>
                <section class='social-nav__header'>
                <li class='header-desktop' ><a href='browse-partners'>Book</a></li>
                <li class='header-desktop'><a href='/#about-us'>About us</a></li>
                <li><a href='profile?${userId}'><img class='user-display-image' src='static/img/${profilePic}' alt='User profile image'></a></li>
                </section>`
    }else {
        html = `<nav>
                    <input type='checkbox' name='toggle-side-menu'>
                    <label for='toggle-side-menu'>
                        <span class='menu-icon'></span>
                    </label>      
                    <section class='side-nav-panel'>
                        <ul class='top-nav'>
                        <li><a href='login'>Saved partners <i class='fa-solid fa-bookmark'></i></a></li>
                        <li><a href='login'>Bookings and events <i class='fa-solid fa-book-open'></i></a></li>
                        <li><a href='#'>Help <i class='fa-regular fa-circle-question'></i></a></li>
                        <li><a href='packages'>Packages <i class='fa-solid fa-cubes-stacked'></i></a></li>
                        <li class='header-mobile'><a href='/#about-us'>About us <i class='fa-solid fa-circle-info'></i></a></li>
                        <li><a href='#'>Safety <i class='fa-regular fa-circle-check'></i></a></li>
                        </ul>
                    </section>
                </nav>
                <a href='/'><h1 id='header-logo'>Rent a Partner</h1></a>
                <section class='social-nav__header'>
                <li class='header-desktop' ><a href='login'>Book</a></li>
                <li class='header-desktop'><a href='/#about-us'>About us</a></li>
                <li><a href='login'>Login</a></li>
                </section>`
    }

    header.innerHTML = html;

    let body = document.querySelector('body');
    body.insertAdjacentElement("afterbegin", header);
}

loadHeader();