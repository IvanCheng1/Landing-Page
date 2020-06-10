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

        a.appendChild(document.createTextNode(sectionName));
        li.appendChild(a);
        navbar.appendChild(li);
    }
}

for (const section of nav_sections) {
    console.log(section.getAttribute('data-nav'));
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

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

// Set sections as active