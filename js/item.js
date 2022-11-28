const createItem = () => {
    let nav = document.querySelectorAll('.item');
    nav.forEach(element => {
        element.innerHTML = `\
            <div class="item-div" onclick="location.href='item.html'">\
                <div class="owners">\
                    <a href="#"><img src="img/logo.png" alt="token collection" class="collection" title="collection"></a>\
                    <a href="#"><img src="img/logo.png" alt="token owner" class="owner" title="owner"></a>\
                    <a href="#"><img src="img/logo.png" alt="token creator" class="creator" title="creator"></a>\
                </div>\
                <div class="picture-box">\
                        <img src="img/default_profile.png" alt="penguing token" class="picture">\
                    </div>\
                    <div class="name">Bilbo Shaggins</div>\
                <div class="price">\
                    <img src="img/Ethereum-ETH-icon.png" width="16px" height="16px"\
                        style="background-color: transparent;margin-right: 5px;">100 ETH\
                </div>\
            </div>\
        `;
    });
}

createItem();