

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);



    // Smooth scroll effect on the .video-sec-3 element
    gsap.to(".video-sec-3", {
        width: "100%",
        height: "100vh",
        borderRadius: "0px", 
        ease: "power2.inOut", // Smoother ease function for transition
        scrollTrigger: {
            trigger: ".vid-parent", // Element that triggers the scroll animation
            scroller: "body", // Ensure smooth scrolling when using `body` as scroller
            markers: false, // Disable markers in production
            start: "top 55%", // Start when the element is at the middle of the viewport
            end: "+=300px", // End the animation after scrolling 300px
            scrub: 1, // Control the smoothness of the scroll animation
        }
    });

    gsap.to(".container-digital", {
        x:"0%",
        ease: "power2.inOut", // Smoother ease function for transition
        scrollTrigger: {
            trigger: ".video-sec-3", 
            scroller: "body", 
            markers: true, 
            // pin:".vid-parent",
            start: "top 0%", 
            end: "bottom 90%", 
            scrub: 3, 
        }
    });

    
      //   // Horizontal scroll effect for .container-digital
      //   gsap.to(".container-digital", {
      //     scrollTrigger: {
      //         trigger: ".container-digital",
      //         scroller: "body", 
      //         start: "top 50%", 
      //         end: "bottom 30%", 
      //         scrub: 1, 
      //         markers: false,
      //         pin: true,  // Pin the container during the horizontal scroll
      //     }
      // });

});
