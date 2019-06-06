var botoes = document.querySelectorAll('#portifolio button');

console.log(botoes);

botoes.forEach(item => {

    item.addEventListener('click', filtrar = (event) => {
        
        if (temClasse(item, "design")){

            var imagesPortifolio = document.querySelectorAll('figure.photography');
            var imagesPortifolio2 = document.querySelectorAll('figure.identify');
            var imagesPortifolio3 = document.querySelectorAll('figure.ilustration');
            
            imagesPortifolio.forEach(item =>{
                item.setAttribute("hidden", true);
            });
            imagesPortifolio2.forEach(item =>{
                item.setAttribute("hidden", true);
            });
            imagesPortifolio3.forEach(item =>{
                item.setAttribute("hidden", true);
            });

            console.log(imagesPortifolio);
            console.log(imagesPortifolio2);
            console.log(imagesPortifolio3);
        }
        else if (temClasse(item, "photography")){
            
            var imagesPortifolio = document.querySelectorAll('figure.design');
            var imagesPortifolio2 = document.querySelectorAll('figure.identify');
            var imagesPortifolio3 = document.querySelectorAll('figure.ilustration');
            
            imagesPortifolio.forEach(item =>{
                item.setAttribute("hidden", true);
            });
            imagesPortifolio2.forEach(item =>{
                item.setAttribute("hidden", true);
            });
            imagesPortifolio3.forEach(item =>{
                item.setAttribute("hidden", true);
            });

            console.log(imagesPortifolio);
            console.log(imagesPortifolio2);
            console.log(imagesPortifolio3);
        }
        else if (temClasse(item, "design")){
            console.log("Caralhooooo");
        }
        else if (temClasse(item, "design")){
            console.log("Caralhooooo");
        }
        else if (temClasse(item, "design")){
            console.log("Caralhooooo");
        }
        
    });
     
});

function temClasse(el, classe) {
    return !!(el.className.split(' ').indexOf(classe) + 1);
}