
// Fix jump section bavior to make it land exactly at the begining of each section when clicked on nav menu

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let navbarHeight = document.querySelector('.navbar').offsetHeight;
        let target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});




AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});





// Fancybox
Fancybox.bind('[data-fancybox]', {
    // Custom options for all galleries
  });  

  Fancybox.bind('[data-fancybox="gallery-a"]', {
    // Custom options for the first gallery
  });    

  Fancybox.bind('[data-fancybox="gallery-b"]', {
    // Custom options for the second gallery
    Carousel : {
      infinite: false
    }
}); 