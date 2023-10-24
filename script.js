// feact hidden nav menu on wrap 

const menu=document.querySelector("#open-nav-menu");
const Toggle_menu=document.querySelector("#toggle-nav-menu");

Toggle_menu.style.display = "none";

menu.addEventListener("click",function menu_open(){
    if(Toggle_menu.style.display === "none"){
        Toggle_menu.style.display = "flex";
    }
    else{
        Toggle_menu.style.display = "none";
    }

})


var crsr = document.querySelector("#cursor");
var crsr1 = document.querySelector("#cursor_blur");

var cursorX = 0;
var cursorY = 0;

// Smoothing factor (adjust as needed)
var smoothing = 0.2;
document.addEventListener("mousemove", function (event) {
    // Calculate the difference between the current cursor position and the new mouse position
    var dx = event.x - cursorX;
    var dy = event.y - cursorY;

    // Apply smoothing by interpolating the cursor position
    cursorX += dx * smoothing;
    cursorY += dy * smoothing;

    // Update the cursor's position
    crsr.style.left = cursorX + "px";
    crsr.style.top = cursorY + "px";
    crsr1.style.left = cursorX - 250 + "px";
    crsr1.style.top = cursorY - 250 + "px";
});

// to make cursor size big

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.transition = "transform 0.6s ease";
        crsr.style.transform = "scale(4)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.transition = "transform 0.6s ease";
        crsr.style.transform = "scale(1)";
        crsr.style.border = "1px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";

      });
})


// scroling animention nav bar 
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top =11%",
        scrub:1
    }
})

// transistion of colour to black of main page 

gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body", 
        start:"top -25%",
        end:"top -70%",
        scrub:1,
    }
})

// slid show of about us div
gsap.from("#about_us img,#about_us_in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,  akk kar ke ana 
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 38%",
        scrub:1 //loop
    }
})

// Tilting an element in response to the movement of the cursor

const cards_container= document.querySelector("#cards_container");
const cards=document.querySelectorAll(".cards");

cards.forEach(function(card) {
    card.addEventListener("mousemove", function(e) {
    
        const containerBound = cards_container.getBoundingClientRect();
        const xAxis = (e.clientX - containerBound.left - containerBound.width / 2) / (containerBound.width / 2);
        const yAxis = (e.clientY - containerBound.top - containerBound.height / 2) / (containerBound.height / 2);
        card.style.transition="transform 0.6s ease";
        card.style.transform = `rotateX(${20 * yAxis * -1}deg) rotateY(${20 * xAxis}deg)`;
    });
});

// returning of tilted element ot origine

cards_container.addEventListener('mouseleave', function(){
    cards.forEach(function(card){
        card.style.transition="transform 0.6s ease";
        card.style.transform = 'none';
    })
});

// // to make cursor size big
// const overlay=document.querySelectorAll(".overlay");
// overlay.forEach(function(over){
//     over.addEventListener("mouseenter",function(){
//         // crsr.style.transition = "transform 0.6s ease";
//         crsr.style.transform = "scale(4)";
//         crsr.style.border = "0.5px solid #fff";
//         crsr.style.backgroundColor="transparent";
//     })
//     over.addEventListener("mouseleave", function () {
//         // crsr.style.transition = "transform 0.6s ease";
//         crsr.style.transform = "scale(1)";
//         crsr.style.border = "1px solid #95C11E";
//         crsr.style.backgroundColor = "#95C11E";

//       });
// })

// slid show for cards 
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,  akk kar ke ana 
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 55%",
        scrub:2//loop
    }
})







