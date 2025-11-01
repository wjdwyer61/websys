

$(document).ready(function() {

    $.getJSON('data/menu.json', function(read) {

        menu=read.dishes;
        const menu1 = menu[0];
        const menu2 = menu[1];
        const menu3 = menu[2];
        const menu4 = menu[3];
        const item1 = `
            <img src="${menu1.image}" alt="${menu1.name}">
            <div class="menutext">
                <h2><u>${menu1.name}</u></h2>
                <p>${menu1.description}.</p>
                <h3>${menu1.category} - ${menu1.cuisine}</h3>
                <p>Contains: ${menu1.ingredients}</p>
                <h2><u>$${menu1.price}</u></h2>
            </div>
        `;
        const item2 = `
            <img src="${menu2.image}" alt="${menu2.name}">
            <div class="menutext">
                <h2><u>${menu2.name}</u></h2>
                <p>${menu2.description}.</p>
                <h3>${menu2.category} - ${menu2.cuisine}</h3>
                <p>Contains: ${menu2.ingredients}</p>
                <h2><u>$${menu2.price}</u></h2>
            </div>
        `;
        const item3 = `
            <img src="${menu3.image}" alt="${menu3.name}">
            <div class="menutext">
                <h2><u>${menu3.name}</u></h2>
                <p>${menu3.description}.</p>
                <h3>${menu3.category} - ${menu3.cuisine}</h3>
                <p>Contains: ${menu3.ingredients}</p>
                <h2><u>$${menu3.price}</u></h2>
            </div>
        `;
        const item4 = `
            <img src="${menu4.image}" alt="${menu4.name}">
            <div class="menutext">
                <h2><u>${menu4.name}</u></h2>
                <p>${menu4.description}.</p>
                <h3>${menu4.category} - ${menu4.cuisine}</h3>
                <p>Contains: ${menu4.ingredients}</p>
                <h2><u>$${menu4.price}</u></h2>
            </div>
        `;

        $('#first').html(item1);
        $('#second').html(item2);
        $('#third').html(item3);
        $('#last').html(item4);

    })

});
