gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Flip) 

ScrollSmoother.create({
    smooth: 1,
    effects: true,
});


let headerScrollAnimation = gsap.timeline();
let headerHeight = "30vh";

headerScrollAnimation.to("header", {
    height: headerHeight
});
headerScrollAnimation.to("main", {
    marginTop: headerHeight
}, "<");

headerScrollAnimation.pause();

function flipHeadings() {
    let heading1 = $("header .titles_section h1")[0];
    let heading4 = $("header .titles_section h4")[0];
    let heading4Icon = $("header .titles_section i")[0];

    if (!heading1 || !heading4) return;

    // Capture initial state dynamically when ScrollTrigger is triggered
    const state = Flip.getState([heading1, heading4, heading4Icon], { props: "transform, fontSize" });

    // Move elements to new locations
    $("header .scrolled_title").append(heading1);
    $("header .bottom_bar").append(heading4);

    // Create Flip animation
    return Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
    });
}

ScrollTrigger.create({
    trigger: "header",
    start: "main top", 
    toggleActions: "play none reverse none",
    animation: flipHeadings()
});

// Create a ScrollTrigger instance
ScrollTrigger.create({
    trigger: "body",
    start: "top+=100px top",
    end: "top+=200px top",
    markers: true,
    onEnter: () => {
        flipHeadings()
        headerScrollAnimation.play()
        $("header .titles_section i").hide()
    },
    onLeaveBack: () => {
        flipHeadings()
        headerScrollAnimation.reverse()
        $("header .titles_section i").show()
    }
});