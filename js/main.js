const humburgerWrap = document.querySelector('.humburger-wrap');
const titleCircleFront = document.querySelector('.title-circle__front');
const titleCircleBack = document.querySelector('.title-circle__back');
const humburgerWrapActive = document.querySelector('.humburger-wrap__active');

const openMenu = () => {
  titleCircleFront.classList.add('title-circle__front__active');
  titleCircleBack.classList.add('title-circle__back__active');
};

const closeMenu = () => {
  titleCircleFront.classList.remove('title-circle__front__active');
  titleCircleBack.classList.remove('title-circle__back__active');
}

humburgerWrap.addEventListener('click', openMenu);
humburgerWrapActive.addEventListener('click', closeMenu);
