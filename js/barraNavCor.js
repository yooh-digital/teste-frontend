var menuItems = document.querySelectorAll('nav a');
var menuItemsFooter = document.querySelectorAll('footer a');

menuItemsFooter.forEach(item => {
    item.addEventListener('click', () => {

        var elementoClicado = event.target;
        var idSectionAlvo = elementoClicado.getAttribute('href');

        
        menuItems.forEach(item2 => {
            if (idSectionAlvo === item2.getAttribute('href')) {
                menuItems.forEach(item3 => {
                    if (temClasse(item3, "active")){
                        item3.classList.remove("active");
                    }
                });
                item2.classList.add("active");
            }
            console.log(item2);
        });
    });
});

menuItems.forEach(item => {

    item.addEventListener('click', mudaCor = (event) => {
        
        //var result = event.target.classList.contains("active");

        var result = temClasse(event.target, "active");

        if (!result) {
            const elementClasses = event.target.classList;
            console.log(elementClasses);

            menuItems.forEach(item => {
                if (temClasse(item, "active")){
                    item.classList.remove("active");
                }
            });

            elementClasses.add("active");
        }


        console.log(result);
    });
});

function temClasse(el, classe) {
    return !!(el.className.split(' ').indexOf(classe) + 1);
}