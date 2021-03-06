# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/desktop-design.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/responsive-intro-section-with-dropdown-navigation-using-flexbox-BJUebvsNc
- Live Site URL: https://pyaethein.github.io/intro-section-with-dropdown-navigation-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- Making content cover the whole viewport height for larger screens
- Making image bigger using `transform: scale(1.3)`
- I realized that making menu toggle using images and not with icons as images are more scalable.
- Closing navbar and dropdown upon clicking outside

```html
<div class="nav__menu"></div>
```
```css
/* covering content according to vh */
.home{
  display: flex;
  align-items: center;
  min-height: calc(100vh - 70px);
}
/* making banner larger */
.home__banner{
  transform: scale(1.3);
}
/* menu toggle */
.nav__menu{
  width: rem(32);
  height: rem(18);
  background-image: url("../images/icon-menu.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.nav__menu.active{
  background-image: url("../images/icon-close-menu.svg");
  width: rem(26);
  height: rem(26);
}
```
```js
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
```

### Continued development

Looking forward to learn more about JavaScript dom manipulations

## Author

- Frontend Mentor - [@pyaetheiN](https://www.frontendmentor.io/profile/pyaetheiN)
- Twitter - [@pt_boyyy](https://www.twitter.com/pt_boyyy)