const menu = document.querySelector('.nav__menu'),
close = document.querySelector('.nav__close'),
navList = document.querySelector('.nav__list'),
drop = document.querySelectorAll('.dropdown');

// menu.addEventListener('click', () => {
//   menu.src = "images/icon-close-menu.svg";
// })

// function chgBg() {
//   document.body.style.backgroundColor = '#000';
// }


// menu toggle

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navList.classList.toggle('active');
  document.body.classList.toggle('active');
})


// dropdown menu

drop.forEach(n => n.addEventListener('click', () => {
  n.classList.toggle('active');
  
  const dropCon = n.nextElementSibling;

  if (n.classList.contains('active')) {
    dropCon.classList.add('active');
  } else {
    dropCon.classList.remove('active')
  }
}))