  gsap.registerPlugin(ScrollTrigger);

        var tl = gsap.timeline({defaults: {duration: 3.75}});
        var s0 = document.getElementById("s0");
        var s1 = document.getElementById("s1");
        var svg1 = document.getElementById("Layer_1");

        // Initial animation
        tl.to(s0, {morphSVG: s1, delay: 2, onComplete: initScrollMorph});

        function initScrollMorph() {
            // Create a new timeline for the scroll-triggered morph animation
            var morphTimeline = gsap.timeline();

            // Add the morph animation to the timeline
            morphTimeline.to(s1, {morphSVG: "#s0", duration: 1});

            // Define a ScrollTrigger to trigger the morph animation on scroll
            ScrollTrigger.create({
                trigger: svg1, // Use s0 as the trigger element
                start: "top 0%", // Adjust the scroll trigger start point as needed
                end: "bottom 0%", // Adjust the scroll trigger end point as needed
                animation: morphTimeline,
                scrub: true, // Add a scrub effect to the animation
                markers: false // Optional: Display scroll trigger markers for debugging
            });
        }
