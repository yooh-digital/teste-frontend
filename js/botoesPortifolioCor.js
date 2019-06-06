var botoes = document.querySelectorAll('#portifolio button');

console.log(botoes);

botoes.forEach(item => {

    item.addEventListener('click', mudaCor = (event) => {
        
        var result = temClasse(event.target, "active2");

        console.log(result);

        if (!result) {
            const elementClasses = event.target.classList;
            
            botoes.forEach(item => {
                if (temClasse(item, "active2")){
                    item.classList.remove("active2");
                }
            });

            elementClasses.add("active2");
        }
    });
     
});

function temClasse(el, classe) {
    return !!(el.className.split(' ').indexOf(classe) + 1);
}