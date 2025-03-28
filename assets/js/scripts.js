document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".ag-gradiantcounter-box", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2, // Each box loads one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".ag-gradiantcounter-section",
            start: "top bottom", // When the section enters the viewport
            end: "bottom top",
            toggleActions: "play none none reverse",
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".ag-igib-counterbox", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        stagger: 0.4, // Animates each box one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".ag-igib-counterbox-row",
            start: "top bottom", // When the section enters the viewport
            end: "bottom top",
            toggleActions: "play none none reverse",
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".green-counter-box", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.4, // Each box loads one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".green-counter-box-row",
            start: "top bottom", // When the section enters the viewport
            end: "bottom top",
            toggleActions: "play none none reverse",
        }
    });
});










