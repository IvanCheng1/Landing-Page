/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const nav_sections = document.getElementsByTagName('section')
const navbar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function sectionInView(section) {
    let bounding = section.getBoundingClientRect();
    // console.log(bounding);
    return (
        // get the top but a fifth lower
        (bounding.height / 5 + bounding.top) >= 0 &&
        // the the bottom but two fifths higher
        (bounding.bottom - bounding.height * 3 / 5) <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNavBar(sections) {
    for (const section of sections) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        const sectionName = section.getAttribute('data-nav');
        const sectionId = section.getAttribute('id');

        a.href = "#" + sectionId;
        a.className = "menu__link";

        a.appendChild(document.createTextNode(sectionName));
        li.appendChild(a);
        navbar.appendChild(li);
    }
}

// Add class 'active' to section when near top of viewport
function sectionActive(sections) {
    for (const section of sections) {
        const active = section.getAttribute('id');
        // console.log(active);
        const navActive = document.querySelector(`#navbar__list li a[href="#${active}"]`)
            // const b = document.querySelector(`a[href="#${active}"]`);
            // console.log(navActive);

        // let b = navbar.getElementsByTagName('menu__link');

        if (sectionInView(section)) {
            console.log(`${section.getAttribute('data-nav')} is in view!`)
            section.classList.add("your-active-class");
            navActive.classList.add("menu__link--active");
        } else {
            section.classList.remove("your-active-class");
            navActive.classList.remove("menu__link--active");
        }
    }

}

// Scroll to anchor ID using scrollTO event
function scrollToSection(section) {
    window.scrollTo({
        top: section.offsetTop,
        left: section.offsetLeft,
        behavior: 'smooth'
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // Build menu 
    buildNavBar(nav_sections)

    // Scroll to section on link click
    navbar.addEventListener('click', function(e) {
        if (e.target.nodeName === "A") {
            e.preventDefault();

            const link = e.target.getAttribute('href');
            const s = document.querySelector(link);

            scrollToSection(s);
        }
    });

    // Set sections as active
    window.addEventListener('scroll', function() {
        sectionActive(nav_sections)
    })
})