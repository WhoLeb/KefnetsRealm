const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <a href="index.html">
            <img src="img/logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search for character or campaign">
                    <button class="search-btn">search</button>
                </div>
                <!-- <a href="#"></a> -->
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">shop</a></li>
            <li class="link-item"><a href="user_profile.html" class="link">My profile</a></li>
            <li class="link-item"><a href="about.html" class="link">about</a></li>
        </ul>
    `;
}

createNav();