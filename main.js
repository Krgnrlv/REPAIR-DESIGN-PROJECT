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
