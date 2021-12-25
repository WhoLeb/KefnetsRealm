var items = document.getElementsByClassName('.item');

for (var a = 0; a < items.length; a++) {
    let words = items[a].innerHTML.split(' ');
    let collection_src = words[0];
    let owner_src = words[1];
    let creator_src = words[2];
    let token_src = words[3];
    let char_name = words[4];
    items[a].innerHTML =  String.format(`
    <div class="owners">
        <img src="{1}" alt="token collection" class="collection" title="collection">
        <img src="{2}" alt="token owner" class="owner" title="owner">
        <img src="{3}" alt="token creator" class="creator" title="creator">
    </div>  
    <div class="picture">
        <img src="{4}" alt="penguing token">
    </div>
    <div class="name">{5}</div>  
    <div class="price"></div>
    `, collection_src, owner_src, creator_src, token_src, char_name);
}