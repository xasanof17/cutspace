    //Navigation
    const menu = document.querySelector('.menu-btn'),
      list = document.querySelector('.nav__list');
    menu.onclick = function () {
      menu.classList.toggle('active');
      list.classList.toggle('active');
    }
    
    window.addEventListener('scrollTop', function() {
      document.querySelector('nav__content').style.padding = `20px 20px`
    })