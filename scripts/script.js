$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky')
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            $('.whatsapp').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
            $('.whatsapp').removeClass("show")
        }
    })
});

// slide-up script

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0})
});
// toggle menu /navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
    
});
//typing animation script 
var typed = new Typed(".typing",{
    strings: ["Youtuber","Developer","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed = new Typed(".typing-2",{
    strings: ["Youtuber","Developer","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

// Carousel script

$(".carousel").owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});

let section = document.querySelector('.skills')
let spans = document.querySelectorAll('.skills .skills-content .right .line span')
let nums = document.querySelectorAll('.num')
let started = false;
window.onscroll = ()=> {
    if(window.scrollY >= section.offsetTop - 250){
        
        if(!started){
            console.log('Hello world')
            spans.forEach(span => {
                // span.setAttribute('style','')
                console.log(span.dataset.width)
                span.style.width = span.dataset.width;
            })
            nums.forEach(num => setCount(num))
        }
        started = true;
    }  

}

function setCount(el){
    let goal = el.dataset.goal
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
            el.append('%')
        }
        
    }
    ,1500 /goal)
}
// const dateToday = new Date().getTime()
// console.log(dateToday)

