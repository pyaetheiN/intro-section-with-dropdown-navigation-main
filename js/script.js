const menu = document.querySelector('.nav__menu'),
      close = document.querySelector('.nav__close'),
      navList = document.querySelector('.nav__list'),
      drop = document.querySelectorAll('.dropdown');


// menu toggle

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navList.classList.toggle('active');
  document.body.classList.toggle('active');
});


// dropdown menu

drop.forEach(n => n.addEventListener('click', (e) => {
  e.stopPropagation();  // The stopPropagation() method allows you to prevent propagation of the current event.
  n.classList.toggle('active');
  
  const dropCon = n.nextElementSibling;

  if (n.classList.contains('active')) {
    dropCon.classList.add('active');
  } 
  else {
    dropCon.classList.remove('active');
  } 

}));


// close nav-menu and dropdown when clicked outside

document.body.addEventListener('click', (e) => {

  if(e.target !== menu && e.target !== navList) {
    menu.classList.remove('active');
    navList.classList.remove('active');
    document.body.classList.remove('active');
  }

  // removing dropdown
  drop.forEach(n => {
    n.classList.remove('active');

    const dropCon = n.nextElementSibling;
    dropCon.classList.remove('active');
  })

});