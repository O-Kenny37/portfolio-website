const hamSpan = document.querySelector('.hamburger-span');
const spanOne = document.querySelector('.span1');
const spanTwo = document.querySelector('.span2');
const nav = document.querySelector('nav');

hamSpan.addEventListener('click', () => {
  if(spanOne.classList.contains('span1-open')) {
    spanOne.classList.remove('span1-open');
    spanTwo.classList.remove('span2-open');
    nav.style.display = 'none';
  } else {
    spanOne.classList.add('span1-open');
    spanTwo.classList.add('span2-open');
    nav.style.display = 'block';
  }
});
//////////////////ABOUT IMAGE CHANGE///////////////////////////

function changeImage() {
  let aboutImage = document.querySelector('.about-image1');

  if(aboutImage.src.match('logo-img/IMG_9054.PNG')) {
    aboutImage.src = 'logo-img/IMG_9054.PNG';
  } 
  else {
    aboutImage.src = 'logo-img/IMG_9054.PNG';
  }

}
setInterval(() => {
  changeImage();
}, 8000);

// PROJECT BOOKS ANIMATION

const projectFrontCover = document.querySelector('.project-front-cover');
const projectOneBook = document.querySelector('.project-one-book');
const projectTwoBook = document.querySelector('.project-two-book');
const projectThreeBook = document.querySelector('.project-three-book');
const projectFourBook = document.querySelector('.project-four-book');
const projectFiveBook = document.querySelector('.project-five-book');

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

const projectOne = document.querySelector('.project1');
const projectTwo = document.querySelector('.project2');
const projectThree = document.querySelector('.project3');
const projectFour = document.querySelector('.project4');
const projectFive = document.querySelector('.project5');
  
// .project-front-cover-open-animation
// .project-one-book-open-animation 

 
  openBtn.addEventListener('click', () => {
    console.log('Explore!');
    if (openBtn.textContent === 'Open') {
      openBtn.textContent = 'Explore';
      // closeBtn.style.display = 'inline-flex';
      projectFrontCover.classList.add('project-front-cover-open-animation');
      projectOneBook.classList.add('project-one-book-open-animation');
      projectTwoBook.classList.add('project-two-book-open-animation');
      projectThreeBook.classList.add('project-three-book-open-animation');
      projectFourBook.classList.add('project-four-book-open-animation');
      projectFiveBook.classList.add('project-five-book-open-animation');
    }
    else {
      openBtn.style.display = 'none';
      // closeBtn.style.display = 'none';
      projectFiveBook.classList.add('projectFiveExploreAnimation');
      projectFourBook.classList.add('projectFourExploreAnimation');
      projectThreeBook.classList.add('projectThreeExploreAnimation');
      projectTwoBook.classList.add('projectTwoExploreAnimation');
      projectOneBook.classList.add('projectOneExploreAnimation');
      projectFrontCover.classList.add('project-front-cover-close-animation');

      projectOne.classList.add('projectOpacity');
      projectTwo.classList.add('projectOpacity');
      projectThree.classList.add('projectOpacity');
      projectFour.classList.add('projectOpacity');
      projectFive.classList.add('projectOpacity');
    }
  });


// closeBtn.addEventListener('click', () => {
//     openBtn.textContent = 'Open';
//     closeBtn.style.display = 'none';
//     projectFrontCover.classList.add('project-front-cover-close-animation');
//     projectOneBook.classList.add('project-one-book-close-animation');
//     projectTwoBook.classList.add('project-two-book-close-animation');
//     projectThreeBook.classList.add('project-three-book-close-animation');

// });

// ////SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        entry.target.classList.add('show-scroll-animation');
      } 
      else {
        entry.target.classList.remove('show-scroll-animation')
      }
    });
});

const scrollAnimation  = document.querySelectorAll('.scroll-animation');
scrollAnimation.forEach((element) => observer.observe(element));