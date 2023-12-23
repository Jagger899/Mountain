const mobileMenu = document.getElementById('mobile-menu-open');
const mobileMenuList = document.getElementById('mobile-menu-list');
const firstLine = document.getElementById('first-line');
console.log(firstLine)
const secondLine = document.getElementById('second-line');
console.log(secondLine)
const thirdLine = document.getElementById('third-line');
console.log(thirdLine)

mobileMenu.addEventListener('click', function () {

  mobileMenuList.classList.toggle('header__mobile-menu-list--active');

  if (mobileMenuList.classList.contains('header__mobile-menu-list--active')) {
    console.log('yes')
    firstLine.classList.add('header__mobile-menu-line--rotate1');
    secondLine.classList.add('header__mobile-menu-line--none');
    thirdLine.classList.add('header__mobile-menu-line--rotate2');
  } else {
    firstLine.classList.remove('header__mobile-menu-line--rotate1');
    secondLine.classList.remove('header__mobile-menu-line--none');
    thirdLine.classList.remove('header__mobile-menu-line--rotate2');
  }
})

// const swiper = new Swiper('.mountain__slider', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,


// });

const videobutton = document.getElementById('video-button');
console.log(videobutton);

const videoButtonBox = document.getElementById('mountain__video-box');

const youtube = document.querySelector('.mountain__youtube');
console.log(youtube)
console.log(videoButtonBox);

videobutton.addEventListener('click', function () {
  if (!videoButtonBox.classList.contains('mountain__video-box_active')) {
    videoButtonBox.classList.add('mountain__video-box_active');
    return;
  }
  
});

youtube.addEventListener('click', function (event) {
  console.log(event)
  const clickOnBlock = event.composedPath();
  console.log(clickOnBlock)
  // if (!clickOnBlock) {
  //   videoButtonBox.classList.remove('mountain__video-box_active');
  // }
})

// videoButtonBox.addEventListener('click', function (event) {
//   console.log('click')
//   const clickOnBlock = event.composedPath().includes(videoButtonBox);

  
// }); 
