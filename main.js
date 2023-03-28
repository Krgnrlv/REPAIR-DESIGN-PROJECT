const prev=document.getElementById('btn-prev'),
    next=document.getElementById('btn-next'),
    slides=document.querySelectorAll('.slide'),
    dots=document.querySelectorAll('.dot'),
    links=document.querySelectorAll('.link-projects-item');
let index=0;

const activeSlide=n=>{
    for (slide of slides) {
       slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};
const activeDot=n=>{
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};
const activeLink=n=>{
    for (link of links) {
        link.classList.remove('active');
    }
    links[n].classList.add('active');
};
const prepareCurrentSlide=ind=>{
    activeSlide(index);
    activeDot(index);
    activeLink(index);
};
const nextSlide=()=>{
  if (index === slides.length - 1){
    index=0;
  }else{
    index++;
  } prepareCurrentSlide(index);
};
const prevSlide=()=>{
    if (index === 0){
        index=slides.length-1;
    }else{
        index--;
    }prepareCurrentSlide(index);
};
dots.forEach((el,indexDot)=>{
    el.addEventListener('click',()=>{
        index=indexDot;
        prepareCurrentSlide(index);
    })
})
links.forEach((el,indexdLink)=>{
    el.addEventListener('click',()=>{
        index=indexdLink;
        prepareCurrentSlide(index)
    })
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const prevMobileProject=document.getElementById('btn-prev-mobile-project'),
    nextMobileProject=document.getElementById('btn-next-mobile-project'),
    slideMobProjects=document.querySelectorAll('.slide-mobile-project');
let indexMobProject=0;

const activeSlideProjects=n=>{
    for (slideMobProject of slideMobProjects) {
        slideMobProject.classList.remove('active');
    }
    slideMobProjects[n].classList.add('active');
};
const prepareCurrentSlideMobileProject=ind=>{
    activeSlideProjects(indexMobProject);
};
const nextSlideMobileProject=()=>{
    if (indexMobProject === slideMobProjects.length - 1){
        indexMobProject=0;
    }else{
        indexMobProject++;
    } prepareCurrentSlideMobileProject(indexMobProject);
  };
const prevSlideMobileProject=()=>{
    if (indexMobProject === 0){
        indexMobProject=slideMobProjects.length-1;
    }else{
        indexMobProject--;
    }prepareCurrentSlideMobileProject(indexMobProject);
};
nextMobileProject.addEventListener('click',nextSlideMobileProject);
prevMobileProject.addEventListener('click', prevSlideMobileProject);

const prevMobileFantasies=document.getElementById('btn-prev-mobile-fantasies'),
    nextMobileFantasies=document.getElementById('btn-next-mobile-fantasies'),
    slideMobFantasies=document.querySelectorAll('.slide-mobile-fantasies');
let indexMobFantasies=0;

const activeSlideFantasies=n=>{
    for (slideMobFantasy of slideMobFantasies) {
        slideMobFantasy.classList.remove('active');
    }
    slideMobFantasies[n].classList.add('active');
};
const prepareCurrentSlideMobileFantasies=ind=>{
    activeSlideFantasies(indexMobFantasies);
};
const nextSlideMobileFantasies=()=>{
    if (indexMobFantasies === slideMobFantasies.length - 1){
        indexMobFantasies=0;
    }else{
        indexMobFantasies++;
    } prepareCurrentSlideMobileFantasies(indexMobFantasies);
  };
const prevSlideMobileFantasies=()=>{
    if (indexMobFantasies === 0){
        indexMobFantasies=slideMobFantasies.length-1;
    }else{
        indexMobFantasies--;
    }prepareCurrentSlideMobileFantasies(indexMobFantasies);
};
nextMobileFantasies.addEventListener('click',nextSlideMobileFantasies);
prevMobileFantasies.addEventListener('click', prevSlideMobileFantasies);