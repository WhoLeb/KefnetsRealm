const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
        <div class="nav">
            <a href="index.html">
            <img src="img/logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Поиск по сайту">
                    <button class="search-btn">Поиск</button>
                </div>
                <div class="account" onclick="location.href='user_profile.html'">
                    <img src="img/default_profile.png">
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="user_profile.html" class="link">Мой профиль</a></li>
            <li class="link-item"><a href="index.html" class="link">Торговая площадка</a></li>
            <li class="link-item"><a href="about.html" class="link">О проекте</a></li>
        </ul>
        <div class="empty"></div>
    `;
}

createNav();