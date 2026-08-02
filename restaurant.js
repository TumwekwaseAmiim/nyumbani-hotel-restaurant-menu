// =========================================
// NYUMBANI RESTAURANT DIGITAL MENU JS
// OPTIMIZED VERSION
// =========================================


// =========================================
// SMOOTH SCROLLING FOR CATEGORY BUTTONS
// =========================================

document.querySelectorAll('.category-nav a').forEach(link => {

    link.addEventListener('click', function(e){

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});




// =========================================
// ACTIVE CATEGORY HIGHLIGHT
// =========================================

const sections = document.querySelectorAll('.menu-section');

const navLinks = document.querySelectorAll('.category-nav a');


window.addEventListener('scroll', ()=>{

    let current = "";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.id;

        }


    });



    navLinks.forEach(link=>{


        link.classList.toggle(

            "active",

            link.getAttribute('href') === "#" + current

        );


    });


});







// =========================================
// BACK TO TOP BUTTON
// =========================================


const topButton = document.createElement("button");


topButton.innerHTML="↑";


topButton.className="top-button";


document.body.appendChild(topButton);



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