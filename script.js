document.addEventListener('click', e => {
    const isDropdownButton=e.target.matches("[data-dropdown-button]");

    if(!isDropdownButton && e.target.closest('[data-dropdown]')!=null)return;

    let currentDropdown;
    if(isDropdownButton)
    {
        currentDropdown=e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown == currentDropdown)return;
        dropdown.classList.remove('active');
    });
}
)

window.addEventListener('scroll',function(){
    const parallax=this.document.querySelector('.parallax');
    let scrollPosition=window.pageYOffset;
    parallax.style.transform='translateY(' + scrollPosition * 0.5 + 'px)';
})

const carouselSlide=document.querySelector('.carousel-slide');
const carouselImages=document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');

//counter
let counter=1;
const size=carouselImages[0].clientWidth;
carouselSlide.style.transform='translateX(' + (-(size*counter)) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= (carouselImages.length - 1))return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform='translateX(' + (-(size*counter)) + 'px)';
})

prevBtn.addEventListener('click',()=>{
    if(counter <= 0)return;
    carouselSlide.style.transition="transform 0.4s ease-out";
    counter--;
    carouselSlide.style.transform='translateX(' + (-(size*counter)) + 'px)';
})

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id == 'lastClone')
    {
        carouselSlide.style.transition="none";
        counter=carouselImages.length - 2;
        carouselSlide.style.transform='translateX(' + (-(size*counter)) + 'px)';
    }

    if(carouselImages[counter].id == 'firstClone')
    {
        carouselSlide.style.transition="none";
        counter=carouselImages.length - counter;
        carouselSlide.style.transform='translateX(' + (-(size*counter)) + 'px)';
    }
})

const carouselSlide1=document.querySelector('.carousel-slide1');
const carouselImages1=document.querySelectorAll('.carousel-slide1 img');

//Buttons
const prevBtn1=document.querySelector('#prevBtn1');
const nextBtn1=document.querySelector('#nextBtn1');

//counter
let counter1=1;
const size1=carouselImages1[0].clientWidth;
carouselSlide1.style.transform='translateX(' + (-(size1*counter1)) + 'px)';

//Button Listeners
nextBtn1.addEventListener('click',()=>{
    if(counter1 >= (carouselImages1.length - 1))return;
    carouselSlide1.style.transition="transform 0.4s ease-in-out";
    counter1++;
    carouselSlide1.style.transform='translateX(' + (-(size1*counter1)) + 'px)';
})

prevBtn1.addEventListener('click',()=>{
    if(counter1 <= 0)return;
    carouselSlide1.style.transition="transform 0.4s ease-out";
    counter1--;
    carouselSlide1.style.transform='translateX(' + (-(size1*counter1)) + 'px)';
})

carouselSlide1.addEventListener('transitionend',()=>{
    if(carouselImages1[counter1].id == 'lastClone')
    {
        carouselSlide1.style.transition="none";
        counter1=carouselImages1.length - 2;
        carouselSlide1.style.transform='translateX(' + (-(size1*counter1)) + 'px)';
    }

    if(carouselImages1[counter1].id == 'firstClone')
    {
        carouselSlide1.style.transition="none";
        counter1=carouselImages1.length - counter1;
        carouselSlide1.style.transform='translateX(' + (-(size1*counter1)) + 'px)';
    }
})

const carouselSlide2=document.querySelector('.carousel-slide2');
const carouselImages2=document.querySelectorAll('.carousel-slide2 img');

//Buttons
const prevBtn2=document.querySelector('#prevBtn2');
const nextBtn2=document.querySelector('#nextBtn2');

//counter
let counter2=1;
const size2=carouselImages2[0].clientWidth;
carouselSlide2.style.transform='translateX(' + (-(size2*counter2)) + 'px)';

//Button Listeners
nextBtn2.addEventListener('click',()=>{
    if(counter2 >= (carouselImages2.length - 1))return;
    carouselSlide2.style.transition="transform 0.4s ease-in-out";
    counter2++;
    carouselSlide2.style.transform='translateX(' + (-(size2*counter2)) + 'px)';
})

prevBtn2.addEventListener('click',()=>{
    if(counter2 <= 0)return;
    carouselSlide2.style.transition="transform 0.4s ease-out";
    counter2--;
    carouselSlide2.style.transform='translateX(' + (-(size2*counter2)) + 'px)';
})

carouselSlide2.addEventListener('transitionend',()=>{
    if(carouselImages2[counter2].id == 'lastClone')
    {
        carouselSlide2.style.transition="none";
        counter2=carouselImages2.length - 2;
        carouselSlide2.style.transform='translateX(' + (-(size2*counter2)) + 'px)';
    }

    if(carouselImages2[counter2].id == 'firstClone')
    {
        carouselSlide2.style.transition="none";
        counter2=carouselImages2.length - counter2;
        carouselSlide2.style.transform='translateX(' + (-(size2*counter2)) + 'px)';
    }
})

const carouselSlide3=document.querySelector('.carousel-slide3');
const carouselImages3=document.querySelectorAll('.carousel-slide3 img');

//Buttons
const prevBtn3=document.querySelector('#prevBtn3');
const nextBtn3=document.querySelector('#nextBtn3');

//counter
let counter3=1;
const size3=carouselImages3[0].clientWidth;
carouselSlide3.style.transform='translateX(' + (-(size3*counter3)) + 'px)';

//Button Listeners
nextBtn3.addEventListener('click',()=>{
    if(counter3 >= (carouselImages3.length - 1))return;
    carouselSlide3.style.transition="transform 0.4s ease-in-out";
    counter3++;
    carouselSlide3.style.transform='translateX(' + (-(size3*counter3)) + 'px)';
})

prevBtn3.addEventListener('click',()=>{
    if(counter3 <= 0)return;
    carouselSlide3.style.transition="transform 0.4s ease-out";
    counter3--;
    carouselSlide3.style.transform='translateX(' + (-(size3*counter3)) + 'px)';
})

carouselSlide3.addEventListener('transitionend',()=>{
    if(carouselImages3[counter3].id == 'lastClone')
    {
        carouselSlide3.style.transition="none";
        counter3=carouselImages3.length - 2;
        carouselSlide3.style.transform='translateX(' + (-(size3*counter3)) + 'px)';
    }

    if(carouselImages3[counter3].id == 'firstClone')
    {
        carouselSlide3.style.transition="none";
        counter3=carouselImages3.length - counter3;
        carouselSlide3.style.transform='translateX(' + (-(size3*counter3)) + 'px)';
    }
})