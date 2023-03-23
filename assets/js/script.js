// Opening and closing the navigation menu

const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-menu");

ham.addEventListener("click", ()=> {
    ham.classList.toggle("active");
    menu.classList.toggle("active");
});


// Show or hide the Back to Top button

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("active");
    }
    else {
        nav.classList.remove("active");
    }
});


// Adds an "active-link" class to the web page navigation bar navigation link as the user scrolls through each section.

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



  