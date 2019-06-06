var menuItems = document.querySelectorAll('li a');


menuItems.forEach(item => {
    
    item.addEventListener('click', scrollOnClick = (event) => {
        event.preventDefault(); // nao permitir o evento padrao de scroll instantaneo

        var elementoClicado = event.target;
        var idSectionAlvo = elementoClicado.getAttribute('href'); // pegando id do alvo do scroll
        var section = document.querySelector(idSectionAlvo); // pegando a section
        var distanciaScroll = section.offsetTop; //distancia do começo da section para o topo

        //talves nao se aplique a todos os browser
        //window.scroll({
        //    top: distanciaScroll - 73,
        //    behavior: "smooth"
        //}); 

        //essa pode funcionar para todos
        smoothScrollTo(0, distanciaScroll - 73);
    });
});

//smooth scroll animation
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
   
    duration = typeof duration !== 'undefined' ? duration : 400;
   
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
   
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };