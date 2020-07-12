// Slide-in inspired by: https://www.youtube.com/watch?v=C_JKlr4WKKs

function scrollShow() {

    // get height of screen
    let screenPosition = window.innerHeight

    // select all elements with class of portfolioDesc and store inside an array
    const portfolioDesc = document.getElementsByClassName('portfolioDesc');
    console.log(portfolioDesc)
    
    // forEach or .map(), go through array and apply transitioning when each image triggers
    for (const div of portfolioDesc) {

        // get the distance from the top of the page to the top of the element being slid in
        let portfolioPosition = div.getBoundingClientRect().top;
        
        // check position of div relative to screen, and trigger CSS change when appropriate
        if (portfolioPosition < screenPosition) {
            div.style.opacity='1';
            div.style.transform='translateX(0)'
        }
    }

    console.log(portfolioDesc);
}

// debounce function to stop scroll event from turning website sluggish
function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
        method();
    }, delay);
}

window.addEventListener('scroll', function () {
    debounce(scrollShow, 10);
});

// dot nav

function clickNav() {

}

document.addEventListener('mouseover', function(e) {
    
    // check if one of the nav dots was clicked, and if so, execute function
    if (event.target.matches('.dotAbout')) {

        const tags = document.getElementsByClassName('hiddenAbout');

        const tag = tags[0];

        console.log(tag)
        tag.className('showAbout')

    } else return;

    console.log(e.target);

})