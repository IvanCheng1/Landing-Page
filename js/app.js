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
    if (window.scrollY <= 100) {
        return false;
    }
    return (
        // get the top but a fifth lower
        (bounding.height / 5 + bounding.top) >= 0 &&
        // the the bottom but two fifths higher
        (bounding.bottom - bounding.height * 3 / 5) <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
}

function createBtn() {
    const btn = document.createElement('a');
    btn.className = "bottom__button hide";
    btn.href = "#";
    btn.appendChild(document.createTextNode("To The Top"));
    document.body.appendChild(btn);

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
    return btn;
}

function bottonInView(btn) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // console.log('bottom');
        btn.classList.remove("hide");
    } else {
        btn.classList.add("hide");
    }
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
        const navActive = document.querySelector(`#navbar__list li a[href="#${active}"]`)

        if (sectionInView(section)) {
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
    // Build menu 
    buildNavBar(nav_sections)
    const btn = createBtn();

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
        sectionActive(nav_sections);
        bottonInView(btn);
    })

})