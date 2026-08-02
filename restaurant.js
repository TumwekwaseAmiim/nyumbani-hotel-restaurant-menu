// =========================================
// NYUMBANI RESTAURANT DIGITAL MENU JS
// =========================================


// Smooth scrolling for category buttons

document.querySelectorAll('.category-nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );


        if(target){

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});






// =========================================
// ACTIVE CATEGORY HIGHLIGHT
// =========================================


const sections = document.querySelectorAll('.menu-section');

const navLinks = document.querySelectorAll('.category-nav a');



window.addEventListener('scroll', () => {


    let current = "";



    sections.forEach(section => {


        const sectionTop = section.offsetTop - 120;


        if(scrollY >= sectionTop){

            current = section.getAttribute('id');

        }


    });



    navLinks.forEach(link => {


        link.classList.remove('active');


        if(link.getAttribute('href') === "#" + current){

            link.classList.add('active');

        }


    });



});







// =========================================
// MENU CARD ANIMATION
// =========================================


const cards = document.querySelectorAll('.menu-item');



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";


entry.target.style.transform = "translateY(0)";


}



});


},


{

threshold:0.15

}

);




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .6s ease";


observer.observe(card);



});







// =========================================
// BACK TO TOP BUTTON
// =========================================


const topButton = document.createElement("button");


topButton.innerHTML = "↑";


topButton.className = "top-button";


document.body.appendChild(topButton);




topButton.style.display="none";



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){

topButton.style.display="block";


}

else{

topButton.style.display="none";

}


});





topButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});






// =========================================
// WELCOME MESSAGE
// =========================================


window.addEventListener("load",()=>{


console.log(

"Welcome to Nyumbani Restaurant Digital Menu"

);


});