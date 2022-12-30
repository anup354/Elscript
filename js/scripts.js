var typed = new Typed(".typing", {
    strings: ["Trive to sucess.", "Reach " + "<br>" + " potential "+ "<br>" +" customers.", "Establish " + "<br>" + "online " + "<br>" + " presence.", ""+ "<br>" +"Attain "+ "<br>" +" more " + "<br>" + " sale."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav-links");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
       nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
       nav.removeAttribute("style");
   }
} 


