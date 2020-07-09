// Slide-in inspired by: https://www.youtube.com/watch?v=C_JKlr4WKKs

function scrollShow() {

    // get height of screen, divide by two so that effect happens in middle of screen
    let screenPosition = window.innerHeight / 1.5

    // select all elements with class of portfolioDesc
    // put in array?
    const portfolioDesc = document.getElementsByClassName('portfolioDesc');
    console.log(portfolioDesc)
    
    // forEach or .map(), go through array and apply transitioning when each image triggers
    for (const div of portfolioDesc) {
        console.log(div)
        // get the distance from the top of the page to the top of the element being slid in
        let portfolioPosition = div.getBoundingClientRect().top;
        
        if (portfolioPosition < screenPosition) {
            div.style.opacity='1';
            div.style.transform='translateX(0)';
        }
    }

    console.log(portfolioDesc);
}

window.addEventListener('scroll', scrollShow);