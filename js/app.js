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
 * Start Global Variables
 * 
*/

const sections = [{
    id: "section1",
    heading: "Section 1",
    contents: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    ]
}, {
    id: "section2",
    heading: "Section 2",
    contents: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    ]
}, {
    id: "section3",
    heading: "Section 3",
    contents: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    ]
}, {
    id: "section4",
    heading: "Section 4",
    contents: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    ]
}, {
    id: "section5",
    heading: "Section 5",
    contents: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
    ]
}]

const utils = {};
const eventHandlers = {};
let timerId;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Uses fragment to append elements to node efficiently
 * @param HTMLElement parentNode
 * @param [HTMLElement] childNodes
 */
utils.addChildrenUsingFragment = (parentNode, childNodes) => {
    const fragment = document.createDocumentFragment();

    for(let node of childNodes) {
        fragment.appendChild(node);
    }

    parentNode.appendChild(fragment);
}

/**
 * Creates and returns the array of list item nodes
 * @param [obj] sectionsArr Array of objects containing section data 
 * @returns [HTMLElement] Array of list items having links to navigate to sections
 */
utils.getNavBarItems = (sectionsArr = sections) => {
    return sectionsArr.map((section) => {
        const liNode = document.createElement("li");
        const anchorNode = document.createElement("a");
        
        anchorNode.classList.add("menu__link");
        anchorNode.textContent = section.heading;
        anchorNode.setAttribute("data-section-id", section.id);
        liNode.appendChild(anchorNode);

        return liNode;
    });
};

/**
 * Creates and returns the array of section nodes
 * @param [obj] sectionsArr Array of objects containing section data 
 * @returns [HTMLElement] Array of html elements representing sections
 */
utils.getSectionNodes = (sectionsArr = sections) => {
    return sectionsArr.map((section, index) => {
        // Create nodes
        const sectionNode = document.createElement("section");
        const landingContainerNode = document.createElement("div");
        const sectionHeadNode = document.createElement("h2");

        // Set attributes
        if(index === 0) {
            sectionNode.classList.add("your-active-class");
        }

        sectionNode.id = section.id;
        sectionNode.setAttribute("data-nav", section.heading);
        landingContainerNode.classList.add("landing__container");
        sectionHeadNode.textContent = section.heading;

        // Append children
        landingContainerNode.appendChild(sectionHeadNode);
        section.contents.forEach((content)=>{
            const node = document.createElement("p");

            node.textContent = content;
            landingContainerNode.appendChild(node);
        });
        sectionNode.appendChild(landingContainerNode);

        return sectionNode;
    });
};

/**
 * Adds active class to the itemToActivate and remove class from other items
 */
utils.updateActiveNode = (container, allItems, itemToActivate, activeClass) => {
    container.style.display = "none";   // Hide the container to prevent repaints in loop
    for(let eachItem of allItems) {
        eachItem.classList.remove(activeClass);
    }
    itemToActivate.classList.add(activeClass);
    container.style.display = "block";  // Show the hidden container again
};

/**
 * Adds the active class both to active section and its link and remove from other section
 */
utils.updateActiveSection = (activeSectionLink, activeSection) => {
    if(!activeSection && !activeSectionLink) {
        throw new Error("One of the two parameters must be defined");
    }

    if(!activeSection) {
        activeSection = document.getElementById(activeSectionLink.getAttribute("data-section-id"));
    }

    if(activeSection === document.querySelector("section.active")) {
        return; // Section is already active
    }

    const allLinks = document.querySelectorAll(".navbar__menu a.menu__link");

    if(!activeSectionLink) {
        activeSectionLink = [...allLinks].find(
            sectionLink => sectionLink.getAttribute('data-section-id') === activeSection.id
        );
    }

    const navbar = document.querySelector(".navbar__menu");    
    const allSections = document.querySelectorAll("main section");
    const mainContainer = document.querySelector("main");

    utils.updateActiveNode(navbar, allLinks, activeSectionLink, "active");
    utils.updateActiveNode(mainContainer, allSections, activeSection, "active");
}

/**
 * Checks if element's top is in viewport
 */
utils.isInViewPort = (node) => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const navbar = document.querySelector(".navbar__menu");
    const viewportTop = scrollPosition + navbar.clientHeight;
    const viewportBottom = scrollPosition + window.innerHeight;
    const nodeTop = node.getBoundingClientRect().top + scrollPosition;

    return (nodeTop >= viewportTop && nodeTop <= viewportBottom);

};

/**
 * Prevents repeated execution of function provided
 */
utils.debounce = (fn, delay) => {
    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timerId);
        timerId = setTimeout(() => fn.apply(context, args), delay);
    };
};

/**
 * End Helper Functions
 * Begin Event Handlers
 */

/**
 * Handles click on navigation menu
 */
eventHandlers.navigationClick = (event) => {
    if(event.target.tagName !== "A" || !event.target.classList.contains("menu__link")) {
        return;
    }

    event.preventDefault();

    const link = event.target;
    const sectionId = link.getAttribute("data-section-id");
    const section = document.getElementById(sectionId);

    section.scrollIntoView({behavior: "smooth"});
};

/**
 * Handles scrolling of window. Updates the active navigation menu item
 */
eventHandlers.onWindowScroll = (event) => {
    const allSections = document.querySelectorAll('section');
    const header = document.querySelector("header");
    // Select the section whose first paragraph is in viewport
    const visibleSection = [...allSections].find(section => utils.isInViewPort(section.querySelector("p")));

    if(!visibleSection) {
        return; // Don't change active section
    }

    utils.updateActiveSection(null, visibleSection);
    header.style.opacity = 1;

    // Hide the header on scroll end
    setTimeout(() => {
        utils.debounce(() => {
            header.style.opacity = 0;
            console.log(Date.now());
        }, 600)();
    }, 3000);
};

/**
 * End Event Handlers
 * Begin Main Functions
 * 
*/

document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector("main");
    const navbarListElement = document.querySelector("ul#navbar__list");
    const header = document.querySelector("header");

    // Add sections' content to DOM
    utils.addChildrenUsingFragment(mainElement, utils.getSectionNodes());
    utils.addChildrenUsingFragment(navbarListElement, utils.getNavBarItems());
    
    // Add event handlers
    navbarListElement.addEventListener("click", eventHandlers.navigationClick);
    window.addEventListener("scroll", eventHandlers.onWindowScroll);
    header.addEventListener("mouseover", () => header.style.opacity=1);
});

/**
 * End Main Functions
 */