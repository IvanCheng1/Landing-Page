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

function scrollToSection(section) {
    window.scrollTo({
        top: section.offsetTop,
        left: section.offsetLeft,
        behavior: 'smooth'
    })
}

// for (const section of nav_sections) {
//     console.log(section.getAttribute('id'));
// }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    buildNavBar(nav_sections)



    // Add class 'active' to section when near top of viewport




    // Scroll to anchor ID using scrollTO event


    /**
     * End Main Functions
     * Begin Events
     * 
     */

    // Build menu 

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

})