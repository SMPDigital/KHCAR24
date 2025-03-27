


(function ($) {
	'use strict';

	// ========================================
	// Detect browser and add class to </body>
	// ========================================

	// Detect Firefox
	let firefoxAgent = navigator.userAgent.indexOf("Firefox") > -1;

	// Add class "is-firefox" to </body>
	if(firefoxAgent) {
		$("body").addClass("is-firefox");
	}



	// ==============================================
	// Detect mobile device and add class to </body>
	// ==============================================

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	

	
	

	
	
	

	// =================
	// Page transitions
	// =================

	if ($("body").hasClass("tt-transition")) {
		
		// Wait until the whole page is loaded.
		$(window).on("load", function () {
			setTimeout(function(){
				HideLoad(); // call out animations.
			}, 0);
		});


		// Transitions In (when "ptr-overlay" slides in).
		// =================
		function RevealLoad() {
			var tl_transitIn = gsap.timeline({ defaults: { duration: 1.5, ease: Expo.easeInOut }});

				if ($("#page-transition").length) {
					 tl_transitIn.set("#page-transition", { autoAlpha: 1 });
					 tl_transitIn.to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0);
					 tl_transitIn.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
				}
				tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 0 }, 0);
				tl_transitIn.to("#tt-header", { y: -20, autoAlpha: 0 }, 0);
		}


		// Transitions Out (when "ptr-overlay" slides out)
		// ================
		function HideLoad() {
			var tl_transitOut = gsap.timeline();

				 if ($("#page-transition").length) {
					tl_transitOut.to(".ptr-preloader", { duration: 1.5, autoAlpha: 0, ease: Expo.easeInOut });
					tl_transitOut.to(".ptr-overlay", { duration: 1.5, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);
				 }

				 // tt-Header appear
				 tl_transitOut.from("#tt-header", { duration: 1.5, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps:"all" }, 0.6);

				 // tt-Footer appear
				 tl_transitOut.from("#tt-footer", { duration: 1.5, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps:"all" }, 0.2);

				 // Page header image appear
				 if ($(".ph-image").length) {
				 	if ($("#page-header").hasClass("ph-bg-image")) {
				 		tl_transitOut.from(".ph-image img, .ph-video", { duration: 2, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 0.8);
				 	} else {
				 		tl_transitOut.from(".ph-image", { duration: 2, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.2);
				 	}
				 }
				 
				 // Page header elements appear (elements with class "ph-appear")
				 var $phAppear = $(".ph-appear");
				 if ($phAppear.length) {
				 	tl_transitOut.from($phAppear, { duration: 2, y: 40, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.5);
				 }

				 // Portfolio interactive elements appear
				 var $pi = $(".portfolio-interactive");
				 var $piItem = $(".portfolio-interactive-item");
				 var $piGhost = $(".portfolio-interactive-ghost");
				 var $piPagination = $(".portfolio-interactive .tt-pagination");

				 if ($pi.length) {
				 	if ($pi.hasClass("pi-full")) {

				 		if ($pi.hasClass("pi-inline")) {
					 		tl_transitOut.from($piItem, { duration: 2, y: 60, autoAlpha: 0, stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 1.3);
					 	} else {
					 		tl_transitOut.from($piItem, { duration: 2, y: 100, autoAlpha: 0, stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 1.3);
					 	}

					 	if ($piGhost.length) {
					 		$piGhost.wrapInner('<div class="pi-ghost-appear"></div>')
					 		tl_transitOut.from(".pi-ghost-appear", { duration: 2, y: 80, autoAlpha: 0, ease: Expo.easeOut, clearProps:"all" }, 1.5);
					 	}

					 	if ($piPagination.length) {
					 		$piPagination.wrap('<div class="pi-pagination-appear"></div>')
					 		tl_transitOut.from(".pi-pagination-appear", { duration: 2, y: 60, autoAlpha: 0, ease: Expo.easeOut, clearProps:"all" }, 3);
					 	}
				 	}
				 }

				 // Portfolio slider elements appear (full heigth slider)
				 var $pciElem = $(".tt-psc-elem");
				 if ($pciElem.length) {
				 	$pciElem.wrap('<div class="tt-ps-appear"></div>');
				 	tl_transitOut.fromTo((".tt-ps-appear"), { autoAlpha: 0, x: 40, scaleX: 1.1, transformOrigin: "left" }, { duration: 1.5, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 1.4);
				 }

				 // Portfolio carousel elements appear
				 var $pciTitle = $(".tt-pci-title");
				 var $pciCategory = $(".tt-pci-category");
				 if ($pciTitle.length) {
				 	tl_transitOut.fromTo($pciTitle, { autoAlpha: 0, x: 100, scaleX: 1.3, transformOrigin: "left" }, { duration: 1.5, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, 1.4);
				 }
				 if ($pciCategory.length) {
				 	tl_transitOut.fromTo($pciCategory, { autoAlpha: 0, x: 60, scaleX: 1.3, transformOrigin: "left" }, { duration: 1.5, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, 1.6);
				 }

				 // Sliding sidebar trigger appear
				 var $ssWrap = $(".tt-sliding-sidebar-wrap");
				 var $ssTrigger = $(".tt-sliding-sidebar-trigger");
				 if ($ssWrap.length) {
					 if(!isMobile) {
						 if ($ssWrap.hasClass("tt-ss-right")) {
						 	tl_transitOut.from($ssTrigger, { duration: 1.5, autoAlpha: 0, x: 50, ease: Expo.easeOut }, 2);
						 } else {
						 	tl_transitOut.from($ssTrigger, { duration: 1.5, autoAlpha: 0, x: -50, ease: Expo.easeOut }, 2);
						 }
					 } else {
					 	tl_transitOut.from($ssTrigger, { duration: 1.5, autoAlpha: 0, y: 20, ease: Expo.easeOut }, 2);
					 }
				 }
				 
				 // Page other elements appear
				 if ($("#page-content").length) {
				 	tl_transitOut.from("#page-content", { duration: 2, autoAlpha: 0, y: 80, ease: Expo.easeOut, clearProps:"all" }, 0.8);
				 }

				 if ($("#page-transition").length) {
				 	tl_transitOut.set("#page-transition", { duration: 1.5, autoAlpha: 0, ease: Expo.easeInOut });
				 }

		}


		// Force page a reload when browser "Back" button click.
		// =====================================================
		window.onpageshow = function (event) {
			if (event.persisted) {
				window.location.reload();
			}
		}




	}



	// =======================================================================================
	// Smooth Scrollbar
	// Source: https://github.com/idiotWu/smooth-scrollbar/
	// =======================================================================================

	if ($("body").hasClass("tt-smooth-scroll")) {

		// Not for mobile devices!
		if(!isMobile) {
			
			var Scrollbar = window.Scrollbar;

			// AnchorPlugin (URL with hash links load in the right position)
			// https://github.com/idiotWu/smooth-scrollbar/issues/440
			// ==================================
			class AnchorPlugin extends Scrollbar.ScrollbarPlugin {
				static pluginName = 'anchor';

				onHashChange = () => {
					this.jumpToHash(window.location.hash);
				};

				onClick = (event) => {
					const { target } = event;
					if (target.tagName !== 'A') {
						return;
					}
					const hash = target.getAttribute('href');
					if (!hash || hash.charAt(0) !== '#') {
						return;
					}
					this.jumpToHash(hash);
				};

				jumpToHash = (hash) => {
					if (!hash) {
						return;
					}
					const { scrollbar } = this;
					scrollbar.containerEl.scrollTop = 0;
					const target = document.querySelector(hash);
					if (target) {
						scrollbar.scrollIntoView(target, {
							offsetTop: parseFloat(target.getAttribute('data-offset')) || 0 // Change to set default offset
				   	});
					}
				};

				onInit() {
					this.jumpToHash(window.location.hash);
					window.addEventListener('hashchange', this.onHashChange);
					this.scrollbar.contentEl.addEventListener('click', this.onClick);
				};

				onDestory() {
					window.removeEventListener('hashchange', this.onHashChange);
					this.scrollbar.contentEl.removeEventListener('click', this.onClick);
				};
			};

			// usage
			Scrollbar.use(AnchorPlugin);


			// Init Smooth Scrollbar
			// ======================
			Scrollbar.init(document.querySelector("#scroll-container"), {
				damping: 0.05,
				renderByPixel: true,
				continuousScrolling: true,
				alwaysShowTracks: true
			});


			// 3rd party library setup
			// More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
			// ========================
			let scrollPositionX = 0,
				scrollPositionY = 0,
				bodyScrollBar = Scrollbar.init(document.getElementById("scroll-container"));

			bodyScrollBar.addListener(({ offset }) => {  
				scrollPositionX = offset.x;
				scrollPositionY = offset.y;
			});

			bodyScrollBar.setPosition(0, 0);
			bodyScrollBar.track.xAxis.element.remove();

			// tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
			ScrollTrigger.scrollerProxy("body", {
				scrollTop(value) {
					if (arguments.length) {
						bodyScrollBar.scrollTop = value;
					}
					return bodyScrollBar.scrollTop;
				}
			});

			// when smooth scroller updates, tell ScrollTrigger to update() too. 
			bodyScrollBar.addListener(ScrollTrigger.update);


			// Move "tt-header" out of "scroll-container"
			// Expl: Since Smooth Scrollbar doesn't support element fixed position inside "scroll-container" move the "tt-header" out of it.
			// ==========================================
			if ($("#tt-header").hasClass("tt-header-fixed")) {
				$("#scroll-container").before( $("#tt-header"));
			}

		}

	}






	// ==================================================
	// Image lazy loading
	// ==================================================

	// ScrollTrigger.config({ limitCallbacks: true });

	gsap.utils.toArray(".tt-lazy").forEach(image => {
		
		let newSRC = image.dataset.src,
			 newImage = document.createElement("img"),

		loadImage = () => {
			newImage.onload = () => {
				newImage.onload = null; // avoid recursion
				newImage.src = image.src; // swap the src
				image.src = newSRC;
				// place the low-res version on TOP and then fade it out.
				gsap.set(newImage, {
					position: "absolute", 
					top: image.offsetTop, 
					left: image.offsetLeft, 
					width: image.offsetWidth, 
					height: image.offsetHeight
				});
				image.parentNode.appendChild(newImage);
				gsap.to(newImage, {
					opacity: 0, 
					onComplete: () => {
						newImage.parentNode.removeChild(newImage);
						image.removeAttribute("data-src"); // remove "data-src" attribute if image is loaded
					}
				});
				st && st.kill();
			}
			newImage.src = newSRC;

			ScrollTrigger.refresh(true);
		}, 

		st = ScrollTrigger.create({
			trigger: image,
			start: "-50% bottom",
			onEnter: loadImage,
			onEnterBack: loadImage // make sure it works in either direction
		});
	});



	// ==================================================
	// Main menu (classic)
	// ==================================================

	// Keeping sub-menus inside screen (useful if multi level sub-menus are used). Effect on large screens only!
	// More info: http://stackoverflow.com/questions/17985334/jquery-solution-for-keeping-dropdown-dropdown-inside-screen
	if ($(window).width() > 1024) {
		$(".tt-submenu-trigger").parent().on("mouseenter", function() {
			var menu = $("> .tt-submenu", this);
			var menupos = $(menu).offset();

			if (menupos.left + menu.width() > $(window).width()) {
				var newpos = -$(menu).width();

				menu.css({ left: newpos });    
			}
		});
	}

	// Main menu hover
	$(".tt-main-menu-list").on("mouseenter", function() {
		$(this).addClass("tt-mm-hover");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-mm-hover");
	});

	// Submenu wrap hover
	$(".tt-submenu-wrap").on("mouseenter", function() {
		$(this).addClass("tt-submenu-open");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-submenu-open");
	});


	// Mobile menu (for classic menu)
	// ===============================

	// Open/close mobile menu on toggle button click
	$("#tt-m-menu-toggle-btn-wrap").on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-m-menu-open").addClass("tt-m-menu-active");
		if ($("body").hasClass("tt-m-menu-open")) {

			// Menu step in animations
			$("body").addClass("tt-m-menu-toggle-no-click"); // Disable toggle button click until the animations last.

			// Menu in animations
			var tl_MenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				 tl_MenuIn.to(".tt-main-menu", { duration: 0.1, autoAlpha: 1 });
				 tl_MenuIn.from(".tt-main-menu-content > ul > li", { duration: 0.1, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" });

			// On menu link click
			$(".tt-main-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.on('click', function() {
				gsap.set("#content-wrap", { autoAlpha: 0 });
				gsap.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
			});

		} else {	

			// Menu step out animations
			$("body").addClass("tt-m-menu-toggle-no-click"); // Disable toggle button click until the animations last.

			// Menu out animations
			var tl_MenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				 tl_MenuOut.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 tl_MenuOut.to(".tt-main-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_MenuOut.to(".tt-main-menu-content > ul > li", { clearProps:"all" }); // clearProps only

			// Close open submenus
			setTimeout(function () {
				$(".tt-submenu").slideUp(50);
				$(".tt-submenu-trigger").removeClass("tt-m-submenu-open");
				$("body").removeClass("tt-m-menu-active");
			}, 200);
		}

		return false;
	});

	// Append element if link href contains #
 	$('.tt-submenu-trigger > a[href^="#"]').parent(".tt-submenu-trigger").append('<span class="tt-submenu-trigger-m"></span>');

	// Open submenu if link href contains #
	if ($(".tt-submenu-trigger > a").is('[href^="#"]')) {
		$(".tt-submenu-trigger-m").on("click", function() {
			var $this = $(this).parent();
			if ($this.hasClass("tt-m-submenu-open")) {
				$this.removeClass("tt-m-submenu-open");
				$this.next().slideUp(350);
			} else {
				$this.parent().parent().find(".tt-submenu").prev().removeClass("tt-m-submenu-open");
				$this.parent().parent().find(".tt-submenu").slideUp(350);
				$this.toggleClass("tt-m-submenu-open");
				$this.next().slideToggle(350);
			}
		});
	}

	// Open submenu on caret click
	$(".tt-submenu-trigger").append('<span class="tt-m-caret"></span>');
	$(".tt-m-caret").on("click", function() {
		var $this = $(this).parent();
		if ($this.hasClass("tt-m-submenu-open")) {
			$this.removeClass("tt-m-submenu-open");
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find(".tt-submenu").prev().removeClass("tt-m-submenu-open");
			$this.parent().parent().find(".tt-submenu").slideUp(350);
			$this.toggleClass("tt-m-submenu-open");
			$this.next().slideToggle(350);
		}
	});
















	// ==================================================
	// Overlay menu 
	// ==================================================

	// Add class "tt-header-fixed-on" to <body> if "tt-header-fixed" enabled.
	if ($("#tt-header").hasClass("tt-header-fixed")) {
		$("body").addClass("tt-header-fixed-on");
	}

	// On menu toggle button click
	// ============================
	var $olMenuToggleBtn = $(".tt-ol-menu-toggle-btn-text, .tt-ol-menu-toggle-btn");
	
	$olMenuToggleBtn.on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-ol-menu-open").addClass("tt-ol-menu-active");
		if ($("body").hasClass("tt-ol-menu-open")) {

			// Menu step in animations
			$("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

			var tl_olMenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("olm-toggle-no-click"); 
				}
			});

				 tl_olMenuIn.to(".tt-overlay-menu", { duration: 0.2, autoAlpha: 1 });
				 tl_olMenuIn.from(".tt-ol-menu-list > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" });
				 if ($(".tt-ol-menu-social").length) {
				 	tl_olMenuIn.to(".tt-ol-menu-social", { duration: 0.4, autoAlpha: 1 }, "-=0.4");
				 	tl_olMenuIn.from(".tt-ol-menu-social > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" }, "-=0.4");
				 }
				 if ($(".tt-ol-menu-ghost").length) {
				 	tl_olMenuIn.from(".tt-ol-menu-ghost", { duration: 0.4, y: 80, autoAlpha: 0, ease: Power2.easeOut, clearProps:"all" }, "-=0.4");
				 }

			// On menu link click
			$(".tt-overlay-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.on('click', function() {
				gsap.set("#content-wrap, .ttgr-cat-nav", { autoAlpha: 0 }); // Hide before timeline
				var tl_olMenuClick = gsap.timeline();
					 tl_olMenuClick.to(".tt-ol-menu-list > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
					 if ($(".tt-ol-menu-social").length) {
					 	tl_olMenuClick.to(".tt-ol-menu-social > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn }, "-=0.4");
					 	tl_olMenuClick.to(".tt-ol-menu-social", { duration: 0.4, autoAlpha: 0 }, "-=0.4");
					 }
					 if ($(".tt-ol-menu-ghost").length) {
					 	tl_olMenuClick.to(".tt-ol-menu-ghost", { duration: 0.4, y: -40, autoAlpha: 0, ease:Power2.easeIn }, "-=0.4");
					 }
			});

			// Hide sliding sidebar
			if ($(".tt-sliding-sidebar-wrap").length) {
				gsap.to(".tt-sliding-sidebar-trigger", { duration: 1, autoAlpha: 0, ease: Expo.easeOut });
			}


			// Move "tt-header" out of "scroll-container" (if Smooth Scroll is enabled and "tt-header-fixed" is NOT enabled)
			// Expl: Since Smooth Scrollbar doesn't support element fixed position inside "scroll-container" move the "tt-header" out of it
			if ($("body").hasClass("tt-smooth-scroll")) {
				if (!$("#tt-header").hasClass("tt-header-fixed")) {
					$("#scroll-container").before($("#tt-header"));
				}
			}

			// Move "tt-ol-menu-social" out of "tt-header"
			// Expl: Due to the conflict with fixed position and ancestor transitions
			if ($(".tt-ol-menu-social").length) {
				function ttOlMenuSocialResize() {
					if (window.matchMedia("(min-width: 768px)").matches) {
						$("#tt-header").before($(".tt-ol-menu-social"));
					} else {
						$(".tt-ol-menu-list").after($(".tt-ol-menu-social"));
					}
				};
				ttOlMenuSocialResize();

				$(window).resize(function() {
					ttOlMenuSocialResize();
				});
			}

		} else {	

			// Menu step out animations
			$("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

			var tl_olMenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("olm-toggle-no-click"); 
				}
			});
				 tl_olMenuOut.to(".tt-ol-menu-list > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 if ($(".tt-ol-menu-social").length) {
				 	tl_olMenuOut.to(".tt-ol-menu-social > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn }, "-=0.4");
				 	tl_olMenuOut.to(".tt-ol-menu-social", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "-=0.4");
				 }
				 if ($(".tt-ol-menu-ghost").length) {
				 	tl_olMenuOut.to(".tt-ol-menu-ghost", { duration: 0.4, y: -60, autoAlpha: 0, ease:Power2.easeIn }, "-=0.4");
				 }
				 tl_olMenuOut.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_olMenuOut.set(".tt-ol-menu-list > li, .tt-ol-menu-social > li, .tt-ol-menu-ghost", { clearProps:"all" }); // clearProps only

			// Show sliding sidebar
			if ($(".tt-sliding-sidebar-wrap").length) {
				gsap.to(".tt-sliding-sidebar-trigger", { duration: 1, autoAlpha: 1, ease: Expo.easeOut, clearProps:"all" }, "-=0.3");
			}

			// Close open submenus
			setTimeout(function () {
				$(".tt-ol-submenu").slideUp(350);
				$(".tt-ol-submenu-trigger").removeClass("tt-ol-submenu-open");
				$("body").removeClass("tt-ol-menu-active");

				// Move "tt-header" back to the "scroll-container" (if Smooth Scroll is enabled and "tt-header-fixed" is NOT enabled)
				if ($("body").hasClass("tt-smooth-scroll")) {
					if (!$("#tt-header").hasClass("tt-header-fixed")) {
						$("#content-wrap").before($("#tt-header"));
					}
				}

				// Move "tt-ol-menu-social" back to the "tt-overlay-menu"
				if ($(".tt-ol-menu-social").length) {
					$(".tt-ol-menu-list").after($(".tt-ol-menu-social"));
				}

			}, 900);
		}
		
		return false;
	});

	// Menu list hover
	$(".tt-ol-menu-list").on("mouseenter", function() {
		$(this).addClass("tt-ol-menu-hover");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-ol-menu-hover");
	});

	// Open submenu if link href contains #
	$(".tt-ol-submenu-trigger > a").on("click", function() {
		if ($(this).is('[href^="#"]')) {
			var $this = $(this).parent();
			if ($this.hasClass("tt-ol-submenu-open")) {
				$this.removeClass("tt-ol-submenu-open");
				$this.next().slideUp(350);
			} else {
				$this.parent().parent().find(".tt-ol-submenu").prev().removeClass("tt-ol-submenu-open");
				$this.parent().parent().find(".tt-ol-submenu").slideUp(350);
				$this.toggleClass("tt-ol-submenu-open");
				$this.next().slideToggle(350);
			}
		}
		return false;
	});

	// Open submenu on caret click
	$(".tt-ol-submenu-caret-wrap").on("click", function() {
		var $this = $(this).parent();
		if ($this.hasClass("tt-ol-submenu-open")) {
			$this.removeClass("tt-ol-submenu-open");
			$this.next().slideUp(350);
		} else {
			$this.parent().parent().find(".tt-ol-submenu").prev().removeClass("tt-ol-submenu-open");
			$this.parent().parent().find(".tt-ol-submenu").slideUp(350);
			$this.toggleClass("tt-ol-submenu-open");
			$this.next().slideToggle(350);
		}
	});
















	// =======================================================================================
	// Portfolio slider (full screen slider)
	// Source: https://swiperjs.com/
	// =======================================================================================

	if ($(".tt-portfolio-slider").length) {
		$("body").addClass("tt-portfolio-slider-on");

		$(".tt-portfolio-slider").each(function() {
			var $ttPortfolioSlider = $(this);

			// Data attributes
			// ================
			var $dataMousewheel = $ttPortfolioSlider.data("mousewheel");
			var $dataKeyboard = $ttPortfolioSlider.data("keyboard");
			var $dataSimulateTouch = $ttPortfolioSlider.data("simulate-touch");
			var $dataGrabCursor = $ttPortfolioSlider.data("grab-cursor");
			var $dataAutoplay = $ttPortfolioSlider.data("autoplay") ? { delay: $ttPortfolioSlider.data("autoplay"),} : $ttPortfolioSlider.data("autoplay");
			var $dataLoop = $ttPortfolioSlider.data("loop") ? { loopedSlides: 100, } : $ttPortfolioSlider.data("loop"); // Not recommended!

			if ($ttPortfolioSlider.is("[data-speed]")) {
				var $dataSpeed = $ttPortfolioSlider.data("speed");
			} else {
				var $dataSpeed = 900; // by default
			}

			if ($ttPortfolioSlider.is("[data-pagination-type]")) {
				var $dataPaginationType = $ttPortfolioSlider.data("pagination-type");
			} else {
				var $dataPaginationType = "fraction"; // by default (bullets/fraction/progressbar)
			}

			// Init Swiper
			// =============
			var $ttPortfolioSliderSwiper = new Swiper ($ttPortfolioSlider.find(".swiper")[0], {
				// Parameters
				direction: "horizontal",
				effect: "slide",
				speed: 600, // slider speed for smaller screens (when window width is 1024px or smaller)
				parallax: true,
				resistanceRatio: 0,
				longSwipesRatio: 0.02,
				preloadImages: false, // Needed for lazy loading
				preventInteractionOnTransition: true, // No actions during transition
				autoplay: $dataAutoplay,
				mousewheel: $dataMousewheel,
				keyboard: $dataKeyboard,
				simulateTouch: $dataSimulateTouch,
				grabCursor: $dataGrabCursor,
				loop: $dataLoop, // Not recommended!

				lazy: {
					loadPrevNext: true,
					loadOnTransitionStart: true,
				},

				breakpoints: {
					// when window width is 1025px or larger
					1025: {
						speed: $dataSpeed,
					}
				},

				// Navigation arrows
				navigation: {
					nextEl: $ttPortfolioSlider.find(".tt-ps-nav-arrow-next")[0],
					prevEl: $ttPortfolioSlider.find(".tt-ps-nav-arrow-prev")[0],
					disabledClass: "tt-ps-nav-arrow-disabled",
				},

				// Pagination
				pagination: {
					el: $ttPortfolioSlider.find(".tt-ps-nav-pagination")[0],
					type: $dataPaginationType,
					modifierClass: "tt-ps-nav-pagination-",
					dynamicBullets: true,
					dynamicMainBullets: 1,
					clickable: true,
				},

				// Events
				on: {
					init: function () {

						var $this = this;
						var $slideActive = $($this.slides[$this.activeIndex]);

						// Play video on load
						$slideActive.find("video").each(function() {
							$(this).get(0).play();
						}); 

						// Portfolio slider caption on load
						// ---------------------------------
						// Portfolio slider caption title (contains link or not)
						if ($ttPortfolioSlider.find(".tt-ps-caption-title").find("a").length) {
							$ttPortfolioSlider.find(".tt-ps-caption-title a").html($slideActive.attr("data-title"));
							$ttPortfolioSlider.find(".tt-ps-caption-title a").attr("href", $slideActive.attr("data-url"));
						} else {
							$ttPortfolioSlider.find(".tt-ps-caption-title").html($slideActive.attr("data-title"));
						}

						// Portfolio slider caption category on load
						$ttPortfolioSlider.find(".tt-ps-caption-category").text($slideActive.attr("data-category"));
					},

					transitionStart: function () {

						var $this = this;
						var $slideActive = $($this.slides[$this.activeIndex]);

						// If slider image is light
						setTimeout(function(){
							if ($slideActive.hasClass("psi-image-is-light")) {
								$("body").addClass("tt-light-bg-on psi-light-bg-on");
							} else {
								$("body").removeClass("tt-light-bg-on psi-light-bg-on");
							}
						}, 400);

						// Play video
						$slideActive.find("video").each(function() {
							$(this).get(0).play();
						}); 
					},

					transitionEnd: function () {

						var $this = this;
						var $slideActive = $($this.slides[$this.activeIndex]);

						// Pause video
						$slideActive.prevAll().find("video").each(function() {
							$(this).get(0).pause();
						});
						$slideActive.nextAll().find("video").each(function() {
							$(this).get(0).pause();
						});

						// Portfolio slider caption
						// -------------------------
						// Portfolio slider caption title (if contains link or not)
						if ($ttPortfolioSlider.find(".tt-ps-caption-title").find("a").length) {
							$ttPortfolioSlider.find(".tt-ps-caption-title a").html($slideActive.attr("data-title"));
							$ttPortfolioSlider.find(".tt-ps-caption-title a").attr("href", $slideActive.attr("data-url"));
						} else {
							$ttPortfolioSlider.find(".tt-ps-caption-title").html($slideActive.attr("data-title"));
						}

						// Portfolio slider caption category
						$ttPortfolioSlider.find(".tt-ps-caption-category").text($slideActive.attr("data-category"));
					},


					slideNextTransitionStart: function () {
						// Animate portfolio slider caption
						gsap.fromTo($ttPortfolioSlider.find(".tt-psc-elem"), { autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "right" }, { duration: 0.25, autoAlpha: 0, x: -40, scaleX: 1.1, transformOrigin: "right", stagger: 0.15, ease: Power1.easeIn });
					},

					slideNextTransitionEnd: function () {
						// Animate portfolio slider caption
						gsap.fromTo($ttPortfolioSlider.find(".tt-psc-elem"), { autoAlpha: 0, x: 40, scaleX: 1.1, transformOrigin: "left" }, { duration: 0.25, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", stagger: 0.15, ease: Power1.easeOut, clearProps: "all" });
					},


					slidePrevTransitionStart: function () {
						// Animate portfolio slider caption
						gsap.fromTo($ttPortfolioSlider.find(".tt-psc-elem"), { autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left" }, { duration: 0.25, autoAlpha: 0, x: 40, scaleX: 1.1, transformOrigin: "left", stagger: 0.15, ease: Power1.easeIn });
					},

					slidePrevTransitionEnd: function () {
						// Animate portfolio slider caption
						gsap.fromTo($ttPortfolioSlider.find(".tt-psc-elem"), { autoAlpha: 0, x: -40, scaleX: 1.1, transformOrigin: "right" }, { duration: 0.25, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "right", stagger: 0.15, ease: Power1.easeOut, clearProps: "all" });
					}
				}
			});


			// Parallax effect on mouse move (no effect on mobile devices!)
			// ------------------------------
			if(!isMobile) {
				if ($ttPortfolioSlider.data("parallax-mouse-move")) {
					gsap.set($ttPortfolioSlider.find(".tt-psi-image"), { scale: 1.05 });

					$ttPortfolioSlider.mousemove(function(e) {
						parallaxIt(e, $ttPortfolioSlider.find(".tt-psi-image"), -25); // Parallax element
						parallaxIt(e, $ttPortfolioSlider.find(".tt-ps-caption-inner"), -35); // Parallax element
					});

					function parallaxIt(e, target, movement) {
						var $this = $ttPortfolioSlider
						var relX = e.pageX - $this.offset().left;
						var relY = e.pageY - $this.offset().top;

						gsap.to(target, {
							duration: 1,
							x: (relX - $this.width() / 2) / $this.width() * movement,
							y: (relY - $this.height() / 2) / $this.height() * movement
						});
					}
				}
			}

		});
	}











	// =======================================================================================
	// Portfolio carousel (full screen carousel)
	// Source: https://swiperjs.com/
	// =======================================================================================

	if ($(".tt-portfolio-carousel").length) {
		$(".tt-portfolio-carousel").each(function() {
			var $ttPortfolioCarousel = $(this);

			// Data attributes
			// ================
			var $dataMousewheel = $ttPortfolioCarousel.data("mousewheel");
			var $dataKeyboard = $ttPortfolioCarousel.data("keyboard");
			var $dataSimulateTouch = $ttPortfolioCarousel.data("simulate-touch");
			var $dataGrabCursor = $ttPortfolioCarousel.data("grab-cursor");
			var $dataAutoplay = $ttPortfolioCarousel.data("autoplay") ? { delay: $ttPortfolioCarousel.data("autoplay"),} : $ttPortfolioCarousel.data("autoplay");
			var $dataLoop = $ttPortfolioCarousel.data("loop") ? { loopedSlides: 100, } : $ttPortfolioCarousel.data("loop"); // Not recommended!

			if ($ttPortfolioCarousel.is("[data-speed]")) {
				var $dataSpeed = $ttPortfolioCarousel.data("speed"); // speed for larger screens
			} else {
				var $dataSpeed = 1200; // speed for larger screens (by default) 
			}

			if ($ttPortfolioCarousel.is("[data-pagination-type]")) {
				var $dataPaginationType = $ttPortfolioCarousel.data("pagination-type");
			} else {
				var $dataPaginationType = "fraction"; // by default (bullets/fraction/progressbar)
			}

			// Init Swiper
			// =============
			var $ttPortfolioCarouselSwiper = new Swiper ($ttPortfolioCarousel.find(".swiper")[0], {
				// Parameters
				direction: "horizontal",
				slidesPerView: "auto",
				spaceBetween: 0,
				resistanceRatio: 0.85,
				longSwipesRatio: 0.3,
				shortSwipes: true,
				centeredSlides: true,
				preloadImages: false, // Needed for lazy loading
				watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
				preventInteractionOnTransition: false, // No actions during transition
				speed: 900, // Slider speed for smaller screens (when window width is 1024px or smaller)
				keyboard: $dataKeyboard,
				mousewheel: $dataMousewheel,
				autoplay: $dataAutoplay,
				simulateTouch: $dataSimulateTouch,
				grabCursor: $dataGrabCursor,
				loop: $dataLoop, // Not recommended!

				lazy: {
					loadPrevNext: true,
					loadOnTransitionStart: true,
				},

				breakpoints: {
					// When window width is 1025px or larger
					1025: {
						speed: $dataSpeed,
					}
				},

				// Navigation arrows
				navigation: {
					nextEl: $ttPortfolioCarousel.find(".tt-pc-arrow-next")[0],
					prevEl: $ttPortfolioCarousel.find(".tt-pc-arrow-prev")[0],
					disabledClass: "tt-pc-arrow-disabled",
				},

				// Pagination
				pagination: {
					el: $ttPortfolioCarousel.find(".tt-pc-pagination")[0],
					type: $dataPaginationType,
					modifierClass: "tt-pc-pagination-",
					dynamicBullets: true,
					dynamicMainBullets: 1,
					clickable: true,
				},

				// Events
				on: {
					lazyImageReady: (swiper) => { // Lazy load + slidesPerView:"auto" fix.
						$ttPortfolioCarouselSwiper.update()
					},

					init: function () {

						var $this = this;
						var $slideActive = $($this.slides[$this.activeIndex]);

						// Active slide class (custom) on load
						$slideActive.addClass("tt-slide-active"); // Add class to active slide.

						// Carousel slide disabled (prev/next slide) on load
						$slideActive.prevAll().addClass("tt-pcs-disabled");
						$slideActive.nextAll().addClass("tt-pcs-disabled");

					},

					transitionStart: function () {

						var $this = this;
						var $slideActive = $($this.slides[$this.activeIndex]);

						// Active slide classes (custom).
						$slideActive.addClass("tt-slide-active"); // Add class to active slide.
						$slideActive.prev().addClass("tt-slide-active-start"); // Add class if active slide transition starts.
						$slideActive.next().addClass("tt-slide-active-start"); // Add class if active slide transition starts.

						// Carousel slide disabled (prev/next slide)
						$slideActive.prevAll().addClass("tt-pcs-disabled");
						$slideActive.removeClass("tt-pcs-disabled");
						$slideActive.nextAll().addClass("tt-pcs-disabled");

						// Play video
						$(".swiper-slide-active").find("video").each(function() {
							$(this).get(0).play();
						}); 

						// Disable nav arrow action.
						$(".tt-pc-arrow").addClass("tt-pc-arrow-disabled");

					},

					transitionEnd: function () {

						var $this = this;
						var $slideActive = $($this.slides[$this.activeIndex]);

						// Active slide classes (custom)
						$slideActive.prevAll().removeClass("tt-slide-active"); // Remove class if active slide transition ends.
						$slideActive.nextAll().removeClass("tt-slide-active"); // Remove class if active slide transition ends.
						$slideActive.prev().removeClass("tt-slide-active-start"); // Remove class if active slide transition ends.
						$slideActive.next().removeClass("tt-slide-active-start"); // Remove class if active slide transition ends.

						// Pause video
						$(".swiper-slide-prev").find("video").each(function() {
							$(this).get(0).pause();
						});
						
						$(".swiper-slide-next").find("video").each(function() {
							$(this).get(0).pause();
						});

						// Disable nav arrow action.
						$(".tt-pc-arrow").removeClass("tt-pc-arrow-disabled");

					}
				}
			});

			// Scale down animation on carousel click
			if ($ttPortfolioCarousel.attr("data-simulate-touch") == "true") {
				if ($ttPortfolioCarousel.hasClass("pc-scale-down")) {
					$ttPortfolioCarousel.find(".swiper").on("mousedown touchstart pointerdown", function(e) {
						if (e.which === 1) { // Affects the left mouse button only!
							gsap.to($ttPortfolioCarousel.find(".tt-pci-inner"), { duration: 0.7, scale: 0.9 });
						}
					});
					$("body").on("mouseup touchend pointerup mouseleave", function() {	
						gsap.to($ttPortfolioCarousel.find(".tt-pci-inner"), { duration: 0.7, scale: 1, clearProps: "scale" });
					});
				}
			}

			// Update slider when windows resize or orientation change 
			$(window).on("resize orientationchange", function() {
				setTimeout(function(){
					$ttPortfolioCarouselSwiper.update();
					$ttPortfolioCarousel.find(".swiper-wrapper").addClass("swtr-smooth");
				}, $dataSpeed);

				setTimeout(function(){
					$ttPortfolioCarousel.find(".swiper-wrapper").removeClass("swtr-smooth");
				}, $dataSpeed + $dataSpeed);
			});
		});
	}



	// =======================================================================================
	// Blog carousel
	// Source: https://swiperjs.com/
	// =======================================================================================

	if ($(".tt-blog-carousel").length) {
		$(".tt-blog-carousel").each(function() {
			var $ttBlogCarousel = $(this);

			// Data attributes
			// ================
			var $dataSimulateTouch = $ttBlogCarousel.data("simulate-touch");
			var $autoplay = $ttBlogCarousel.data("autoplay") ? { delay: $ttBlogCarousel.data("autoplay"), } : $ttBlogCarousel.data("autoplay");
			var $dataLoop = $ttBlogCarousel.data("loop") ? { loopedSlides: 3, } : $ttBlogCarousel.data("loop");

			if ($ttBlogCarousel.is("[data-speed]")) {
				var $dataSpeed = $ttBlogCarousel.data("speed");
			} else {
				var $dataSpeed = 900; // by default
			}

			if ($ttBlogCarousel.is("[data-pagination-type]")) {
				var $dataPaginationType = $ttBlogCarousel.data("pagination-type");
			} else {
				var $dataPaginationType = "bullets"; // by default (bullets/fraction/progressbar)
			}

			// Init Swiper
			// =============
			var $ttBlogCarouselSwiper = new Swiper($ttBlogCarousel.find(".swiper")[0], {
				// Parameters
				direction: "horizontal",
				slidesPerView: 1,
				spaceBetween: 30,
				longSwipesRatio: 0.3,
				mousewheel: false,
				keyboard: false,
				preloadImages: false, // Needed for lazy loading
				watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
				preventInteractionOnTransition: false, // No actions during transition
				grabCursor: true,
				simulateTouch: $dataSimulateTouch,
				speed: $dataSpeed,
				autoplay: $autoplay,
				loop: $dataLoop,

				lazy: {
					loadPrevNext: false,
					loadOnTransitionStart: true,
				},

				breakpoints: {
					// when window width is 1025px or larger
					1025: {
						slidesPerView: 3,
						spaceBetween: 0,
					},

					// when window width is 769px or larger
					769: {
						slidesPerView: 2,
						spaceBetween: 0,
					}
				},

				// Navigation (arrows)
				navigation: {
					nextEl: $ttBlogCarousel.find(".tt-blc-nav-next")[0],
					prevEl: $ttBlogCarousel.find(".tt-blc-nav-prev")[0],
					disabledClass: "tt-blc-nav-arrow-disabled",
				},

				// Pagination
				pagination: {
					el: $ttBlogCarousel.find(".tt-blc-pagination")[0],
					type: $dataPaginationType,
					modifierClass: "tt-blc-pagination-",
					dynamicBullets: true,
					dynamicMainBullets: 1,
					clickable: true,
				},

				// Events
				on: {
					lazyImageReady: (swiper) => { // Lazy load + slidesPerView:"auto" fix.
						$ttBlogCarouselSwiper.update()
					}
				}

			});

		});

	}



	// =======================================================================================
	// Content carousel
	// Source: https://swiperjs.com/
	// =======================================================================================

	if ($(".tt-content-carousel").length) {
		$(".tt-content-carousel").each(function() {
			var $ttContentCarousel = $(this);

			// Data attributes
			// ================
			var $dataSimulateTouch = $ttContentCarousel.data("simulate-touch");
			var $autoplay = $ttContentCarousel.data("autoplay") ? { delay: $ttContentCarousel.data("autoplay"), } : $ttContentCarousel.data("autoplay");
			var $dataLoop = $ttContentCarousel.data("loop") ? { loopedSlides: 100, } : $ttContentCarousel.data("loop");

			if ($ttContentCarousel.is("[data-speed]")) {
				var $dataSpeed = $ttContentCarousel.data("speed");
			} else {
				var $dataSpeed = 900; // by default
			}

			if ($ttContentCarousel.is("[data-pagination-type]")) {
				var $dataPaginationType = $ttContentCarousel.data("pagination-type");
			} else {
				var $dataPaginationType = "bullets"; // by default (bullets/fraction/progressbar)
			}

			// Init Swiper
			// =============
			var $ttContentCarouselSwiper = new Swiper($ttContentCarousel.find(".swiper")[0], {
				// Parameters
				direction: "horizontal",
				slidesPerView: "auto",
				spaceBetween: 0,
				centeredSlides: true,
				longSwipesRatio: 0.3,
				mousewheel: false,
				keyboard: false,
				preloadImages: false, // Needed for lazy loading
				watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
				preventInteractionOnTransition: false, // No actions during transition
				simulateTouch: $dataSimulateTouch,
				grabCursor: $dataSimulateTouch,
				speed: $dataSpeed,
				autoplay: $autoplay,
				loop: $dataLoop,
				lazy: true,

				// Navigation (arrows)
				navigation: {
					nextEl: $ttContentCarousel.find(".tt-cc-nav-next")[0],
					prevEl: $ttContentCarousel.find(".tt-cc-nav-prev")[0],
					disabledClass: "tt-cc-nav-arrow-disabled",
				},

				// Pagination
				pagination: {
					el: $ttContentCarousel.find(".tt-cc-pagination")[0],
					type: $dataPaginationType,
					modifierClass: "tt-cc-pagination-",
					dynamicBullets: true,
					dynamicMainBullets: 1,
					clickable: true,
				},

				// Events
				on: {
					lazyImageReady: (swiper) => { // Lazy load + slidesPerView:"auto" fix.
						$ttContentCarouselSwiper.update()
					},

					transitionStart: function () {

						// Play video
						$(".swiper-slide-active").find("video").each(function() {
							$(this).get(0).play();
						}); 

					},

					transitionEnd: function () {

						// Pause video
						$(".swiper-slide-prev").find("video").each(function() {
							$(this).get(0).pause();
						});
						
						$(".swiper-slide-next").find("video").each(function() {
							$(this).get(0).pause();
						});

					}
				}
			});

			// Scale down animation on carousel click
			// =======================================
			if ($ttContentCarousel.attr("data-simulate-touch") == "true") {
				if ($ttContentCarousel.hasClass("cc-scale-down")) {
					$ttContentCarousel.find(".swiper-wrapper").on("mousedown touchstart pointerdown", function(e) {
						if (e.which === 1) { // Affects the left mouse button only!
							gsap.to($ttContentCarousel.find(".tt-content-carousel-item"), { duration: 0.7, scale: 0.9 });
						}
					});
					$("body").on("mouseup touchend pointerup mouseleave", function() {	
						gsap.to($ttContentCarousel.find(".tt-content-carousel-item"), { duration: 0.7, scale: 1, clearProps: "scale" });
					});
				}
			}

		});

	}



	// =======================================================================================
	// Testimonials slider
	// Source: https://swiperjs.com/
	// =======================================================================================

	if ($(".tt-testimonials-slider").length) {
		$(".tt-testimonials-slider").each(function() {
			var $ttTestimonialsSlider = $(this);

			// Data attributes
			// ================
			var $dataSimulateTouch = $ttTestimonialsSlider.data("simulate-touch");
			var $autoplay = $ttTestimonialsSlider.data("autoplay") ? { delay: $ttTestimonialsSlider.data("autoplay"), } : $ttTestimonialsSlider.data("autoplay");
			var $dataLoop = $ttTestimonialsSlider.data("loop") ? { loopedSlides: 100, } : $ttTestimonialsSlider.data("loop");

			if ($ttTestimonialsSlider.is("[data-speed]")) {
				var $dataSpeed = $ttTestimonialsSlider.data("speed");
			} else {
				var $dataSpeed = 900; // by default
			}

			// Init Swiper
			// =============
			var $ttTestimonialsSliderSwiper = new Swiper ($ttTestimonialsSlider.find(".swiper")[0], {
				// Parameters
				direction: "horizontal",
				slidesPerView: "auto",
				spaceBetween: 0,
				mousewheel: false,
				longSwipesRatio: 0.3,
				grabCursor: true,
				autoHeight: true,
				centeredSlides: true,
				preventInteractionOnTransition: false, // No actions during transition
				speed: $dataSpeed,
				simulateTouch: $dataSimulateTouch,
				autoplay: $autoplay,
				loop: $dataLoop,

				// Navigation (arrows)
				navigation: {
					nextEl: $ttTestimonialsSlider.find(".tt-ts-nav-next")[0],
					prevEl: $ttTestimonialsSlider.find(".tt-ts-nav-prev")[0],
					disabledClass: "tt-ts-nav-arrow-disabled",
				},

				// Pagination
				pagination: {
					el: $ttTestimonialsSlider.find(".tt-ts-pagination")[0],
					type: "bullets",
					modifierClass: "tt-ts-pagination-",
					dynamicBullets: true,
					dynamicMainBullets: 1,
					clickable: true,
				}
			});

			// Auto height fix
			setTimeout(function() {
				$ttTestimonialsSliderSwiper.updateAutoHeight();
			}, 100);

			// Scale down animation on slider click
			if ($ttTestimonialsSlider.hasClass("ts-scale-down")) {
				$ttTestimonialsSlider.find(".swiper-wrapper").on("mousedown touchstart pointerdown", function(e) {
					if (e.which === 1) { // Affects the left mouse button only!
						gsap.to($ttTestimonialsSlider.find(".tt-ts-item-inner"), { duration: 0.7, scale: 0.9 });
					}
				});
				$("body").on("mouseup touchend pointerup", function() {	
					gsap.to($ttTestimonialsSlider.find(".tt-ts-item-inner"), { duration: 0.7, scale: 1, clearProps: "scale" });
				});
			}
		});
	}











	// ================================================================
	// Page header
	// ================================================================

	// If page header exist
	// =====================
	if ($("#page-header").length) {
		$("body").addClass("page-header-on");

		// If full height enabled
		if ($("#page-header").hasClass("ph-full")) {
			$("body").addClass("ph-full-on");
		}

		// If position center enabled
		if ($("#page-header").hasClass("ph-center")) {
			$("body").addClass("ph-center-on");
		}

		// If page header image exist
		if ($(".ph-image").length) {
			$("body").addClass("ph-image-on");

			// If page header image is background image
			if ($("#page-header").hasClass("ph-bg-image")) {
				$("body").addClass("ph-bg-image-on");
			}
		}
	}


	// If page header background image is light
	// =========================================
	if ($("#page-header").is(".ph-bg-image.ph-bg-image-is-light")) {

		$(".ph-bg-image-is-light").on("mouseenter mouseover", function() {
			$("body").addClass("tt-light-bg-hover");
		}).on("mouseleave", function() {
			$("body").removeClass("tt-light-bg-hover");
		});

	}



	// ================================================================
	// Next project
	// ================================================================

	if ($(".tt-np-image").length) {
		$("body").addClass("tt-np-image-on");
	}



	// ================================================================
	// GSAP ScrollTrigger plugin
	// More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/
	// ================================================================

	// Page header elements scrolling effects
	// =======================================
	if ($("#page-header").hasClass("ph-content-parallax")) {
		let tlPhParallax = gsap.timeline({ 
			scrollTrigger: {
				trigger: "#page-header", 
				start: 'top top', 
				end: 'bottom top', 
				scrub: true,
				markers: false
			}
		});

		// Page header caption elements
		if ($("#page-header").hasClass("ph-bg-image")) {
			if ($(".ph-caption").length) {
				if ($("#page-header").hasClass("ph-center")) {
					tlPhParallax.to(".ph-caption", { y: 180, opacity: 0, scale: 0.95, transformOrigin: "center" }, 0);
				} else {
					tlPhParallax.to(".ph-caption", { y: 180, opacity: 0, scale: 0.95, transformOrigin: "left" }, 0);
				}
			}
			if ($(".ph-image").length) {
				tlPhParallax.to(".ph-image-inner", { yPercent: 30 }, 0);
			}

		} else {

			if ($(".ph-categories").length) {
				tlPhParallax.to(".ph-categories", { y: -220 }, 0);
			}
			if ($(".ph-caption-subtitle").length) {
				tlPhParallax.to(".ph-caption-subtitle", { y: -230 }, 0);
			}
			if ($(".ph-caption-title").length) {
				tlPhParallax.to(".ph-caption-title", { y: -180 }, 0);
			}
			if ($(".ph-caption-description").length) {
				tlPhParallax.to(".ph-caption-description", { y: -120 }, 0);
			}
			if ($(".ph-meta").length) {
				tlPhParallax.to(".ph-meta", { y: -220 }, 0);
			}
			if ($(".ph-image").length) {
				tlPhParallax.to(".ph-image-inner", { y: -100 }, 0);
			}

			// Page header ghost
			var $phGhost = $(".ph-caption-title-ghost");
			if ($phGhost.length) {
				if (!$("#page-header").hasClass("ph-center")) {
					$phGhost.appendTo("#page-header");
					if ($("#page-header").hasClass("ph-ghost-scroll")) {
						$phGhost.find(".ph-appear").wrapInner('<span class="phgh-text"></span>');
						var $phghText = $phGhost.find(".phgh-text");
						for (var i = 0; i < 3; i++) {
							$phghText.clone().insertAfter($phghText);
						}
						tlPhParallax.to($phGhost, { y: -60, xPercent: -8 }, 0);
					} else {
						tlPhParallax.to($phGhost, { y: -30 }, 0);
					}
				} else {
					tlPhParallax.to($phGhost, { y: -60 }, 0);
				}
			}

		}

		// Page header scroll down circle
		if ($(".tt-scroll-down").length) {
			gsap.to(".tt-scroll-down", { 
				// y: 100,
				autoAlpha: 0,
				ease: "none",
				scrollTrigger: {
					trigger: "#page-header",
					start: "top top",
					end: "30% top",
					scrub: true,
					markers: false
				}, 
			});
		}

		// Page header projekt share
		if ($(".ph-share").length) {
			gsap.to(".ph-share-inner", { 
				// y: 100,
				autoAlpha: 0,
				ease: "none",
				scrollTrigger: {
					trigger: "#page-header",
					start: "top top",
					end: "30% top",
					scrub: true,
					markers: false
				}, 
			});
		}
	}

	// If page header is visible
	if ($("#page-header").length) {
		ScrollTrigger.create({
			trigger: "#page-header",
			start: "top bottom",
			end: "bottom 60px",
			scrub: true,
			markers: false,

			onLeave: () => phVisibleLeaveClass(),
			onEnter: () => phVisibleEnterClass(),
			onLeaveBack: () => phVisibleLeaveClass(),
			onEnterBack: () => phVisibleEnterClass(),
		});

		function phVisibleLeaveClass() {
			$("body").removeClass("tt-ph-visible");
		};
		function phVisibleEnterClass() {
			$("body").addClass("tt-ph-visible");
		};
	}

	// If page header background image is light
	if ($("#page-header").is(".ph-bg-image.ph-bg-image-is-light")) {
		ScrollTrigger.create({
			trigger: "#page-header",
			start: "top bottom",
			end: "bottom 30px",
			scrub: true,
			markers: false,

			onLeave: () => phLightLeaveClass(),
			onEnter: () => phLightEnterClass(),
			onLeaveBack: () => phLightLeaveClass(),
			onEnterBack: () => phLightEnterClass(),
		});

		function phLightLeaveClass() {
			$("body").removeClass("tt-light-bg-on");
		};
		function phLightEnterClass() {
			$("body").addClass("tt-light-bg-on");
		};
	}





	

	// Image parallax
	// ===============
	$(".anim-image-parallax").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>');

		// Add overflow hidden.
		$(".anim-image-parallax-wrap").css({ "overflow": "hidden" });

		var $animImageParallax = $(this);
		var $aipWrap = $animImageParallax.parents(".anim-image-parallax-wrap");
		var $aipInner = $aipWrap.find(".anim-image-parallax-inner");

		let tl_ImageParallax = gsap.timeline({
			scrollTrigger: {
				trigger: $aipWrap,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				markers: false,
				onEnter: () => animImgParallaxRefresh(),
			},
		});
		tl_ImageParallax.to($animImageParallax, { yPercent: 30, ease: "none" });

		function animImgParallaxRefresh() {
			tl_ImageParallax.scrollTrigger.refresh();
		}

		// Zoom in
		let tl_aipZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $aipWrap,
				start: "top 90%",
				markers: false,
			}
		});
		tl_aipZoomIn.from($aipInner, { duration: 1.5, autoAlpha: 0, scale: 1.2, ease: Power2.easeOut, clearProps:"all" });
		
	});


	// tt-Grid "layout-creative" parallax
	// ===================================
	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function() {
			$(".tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+2) .ttgr-item-inner, .tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+4) .ttgr-item-inner, .tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+2) .ttgr-item-inner, .tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+3) .ttgr-item-inner").each(function() {
				var $this = $(this);

				gsap.to($this, {
					yPercent: -50,
					ease: "none",
					scrollTrigger: {
						trigger: $this,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
						markers: false,
						onEnter: () => ttgrItemParalRefresh(),
					}, 
				});

				// Refresh start/end positions on enter.
				function ttgrItemParalRefresh() {
					ScrollTrigger.refresh(true);
				};

			});
		}
	});


	// Next project parallax
	// ======================
	if ($(".tt-np-image").length) {
		gsap.from(".tt-np-image", {
			yPercent: -30,
			opacity: 0,
			ease: "none",
			scrollTrigger: {
				trigger: ".tt-next-project",
				start: "5% bottom",
				end: "bottom bottom",
				scrub: true,
				markers: false,
			}, 
		});

		if ($(".tt-np-caption").length) {
			gsap.from(".tt-np-caption", {
				yPercent: -70,
				opacity: 0,
				scale: 0.96,
				transformOrigin: "left",
				ease: "none",
				scrollTrigger: {
					trigger: $(".tt-next-project"),
					start: "15% bottom",
					end: "bottom bottom",
					scrub: true,
					markers: false,
				}, 
			});
		}

	} else {

		if ($(".tt-np-caption").length) {
			gsap.from(".tt-np-caption", {
				yPercent: -10,
				opacity: 0,
				scale: 0.96,
				ease: "none",
				scrollTrigger: {
					trigger: $(".tt-next-project"),
					start: "40% bottom",
					end: "bottom bottom",
					scrub: true,
					markers: false,
				}, 
			});
		}
	}

	// If next project is touches the top of the page
	if ($(".tt-next-project").length) {
		ScrollTrigger.create({
			trigger: ".tt-next-project",
			start: "top 90px",
			end: "bottom top",
			scrub: true,
			markers: false,

			onLeave: () => ttNpTopLeaveClass(),
			onEnter: () => ttNpTopEnterClass(),
			onLeaveBack: () => ttNpTopLeaveClass(),
			onEnterBack: () => ttNpTopEnterClass(),
		});

		function ttNpTopLeaveClass() {
			$("body").removeClass("tt-next-project-top");
		};
		function ttNpTopEnterClass() {
			$("body").addClass("tt-next-project-top");
		};
	}

	// If next project background image is light
	if ($(".tt-next-project").hasClass("tt-np-image-is-light")) {
		ScrollTrigger.create({
			trigger: ".tt-next-project",
			start: "top 90px",
			end: "bottom top",
			scrub: true,
			markers: false,

			onLeave: () => ttNpLightLeaveClass(),
			onEnter: () => ttNpLightEnterClass(),
			onLeaveBack: () => ttNpLightLeaveClass(),
			onEnterBack: () => ttNpLightEnterClass(),
		});

		function ttNpLightLeaveClass() {
			$("body").removeClass("tt-light-bg-on");
		};
		function ttNpLightEnterClass() {
			$("body").addClass("tt-light-bg-on");
		};

		// Hover
		$(".tt-next-project").on("mouseenter mouseover", function() {
			$("body").addClass("tt-light-bg-hover");
		}).on("mouseleave", function() {
			$("body").removeClass("tt-light-bg-hover");
		});

	}





	// Scrolling button
	// =================
	if ($(".tt-scrolling-btn").length) {
		$(".tt-scrolling-btn").each(function() {
			var $this = $(this);
			var $scrBtnSvg = $this.find(".scr-btn-spinner");
			gsap.from($scrBtnSvg, {
				rotate: 240,
				ease: "none",
				scrollTrigger: {
					trigger: $scrBtnSvg,
					start: "-40% bottom",
					end: "120% top",
					scrub: true,
					markers: false,
				}, 
			});
		});
	}


	// Appear on scroll
	// =================

	// zoom in
	$(".anim-zoomin").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-zoomin-wrap"></div>');

		// Add overflow hidden.
		$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

		var $this = $(this);
		var $asiWrap = $this.parents(".anim-zoomin-wrap");

		let tl_ZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $asiWrap,
				start: "top bottom",
				markers: false,
				onEnter: () => animZoomInRefresh(),
			}
		});
		tl_ZoomIn.from($this, { duration: 1.5, autoAlpha: 0, scale: 1.2, ease: Power2.easeOut, clearProps:"all" });

		// Refresh start/end positions on enter.
		function animZoomInRefresh() {
			ScrollTrigger.refresh();
		};
	});


	// fade in-up
	$(".anim-fadeinup").each(function() {
		let tl_FadeInUp = gsap.timeline({
			scrollTrigger: {
				trigger: this,
				start: "top bottom",
				markers: false
			}
		});

		tl_FadeInUp.from(this, { duration: 2.5, autoAlpha: 0, y: 100, ease: Expo.easeOut, clearProps:"all" }, "+=0.3");
	});









	// On close click function
	function ttCatNavClose() {
		$(".ttgr-cat-nav").on("click", function() {
			$("body").removeClass("ttgr-cat-nav-open");

			// Catecories step out animations
			var tl_ttgrClose = gsap.timeline();
				 tl_ttgrClose.to(".ttgr-cat-list > li", { duration: 0.1, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 tl_ttgrClose.to(".ttgr-cat-nav", { duration: 0.1, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_ttgrClose.to(".portfolio-grid-item", { duration: 0.1, scale: 1, clearProps:"all" }, "-=0.4");
				 tl_ttgrClose.to(".pgi-caption, #page-header, .ttgr-cat-trigger", { duration: 0.1, autoAlpha: 1, clearProps:"all" }, "-=0.4");
				 tl_ttgrClose.to(".ttgr-cat-list > li", { clearProps:"all" }); // clearProps only
		});
	}









	// ==================================
	// Sidebar (classic)
	// ==================================

	// If tt-sidebar exist.
	if ($(".tt-sidebar").length) {

		$("body").addClass("tt-sidebar-on");

		// If tt-sidebar has class "sidebar-left" add class "sidebar-left-on" to <pody>.
		if ($(".tt-sidebar").hasClass("sidebar-left")) {
			$("body").addClass("tt-sidebar-left-on");
		}

		// If tt-sidebar has class "sidebar-right" add class "sidebar-right-on" to <pody>.
		if ($(".tt-sidebar").hasClass("sidebar-right")) {
			$("body").addClass("tt-sidebar-right-on");
		}
	}



	// ==================================
	// Sliding sidebar
	// ==================================

	// If sliding sidebar exist.
	if ($(".tt-sliding-sidebar-wrap").length) {

		$("body").addClass("tt-sliding-sidebar-on tt-sliding-sidebar-left-on");  // left position is by default.

		// Append sliding sidebar.
		$(".tt-sliding-sidebar-wrap").appendTo("#body-inner");

		// Open/close sliding sidebar.
		$(".tt-sliding-sidebar-trigger").on("click", function() {
			$("body").toggleClass("tt-sliding-sidebar-open");
		}); 
		$(".tt-sliding-sidebar-close").on("click", function() {
			$("body").removeClass("tt-sliding-sidebar-open");
		}); 

		// If sliding sidebar has class "tt-ss-right" add class "tt-ss-right-on" to <pody>.
		if ($(".tt-sliding-sidebar-wrap").hasClass("tt-ss-right")) {
			$("body").removeClass("tt-sliding-sidebar-left-on");
			$("body").addClass("tt-sliding-sidebar-right-on");
		}
	}



	// ==================================
	// Scrolling text
	// ==================================

	// Hover scrolling speed.
	$(".tt-scrolling-text").each(function() {
		var $tt_stSpeed = $(this).data("scroll-speed");
		$(this).find(".tt-scrolling-text-inner").css({ 
			"animation-duration": $tt_stSpeed + "s",
		});
	});



	// ================================================================
	// Scroll between anchors 
	// Requires "Smooth Scrollbar" (https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md#scrollbarscrollintoview)
	// ================================================================

	$('a[href^="#"]')
		.not('[href$="#"]') // omit from selection
		.not('[href$="#0"]') // omit from selection
		.on("click", function() {

		var target = this.hash;

		// If fixed header position enabled.
		if ($("#tt-header").hasClass("tt-header-fixed")) {
			var $offset = $("#tt-header").height();
		} else {
			var $offset = 0;
		}

		// You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed. 
		if ($(this).data("offset") != undefined) $offset = $(this).data("offset");
		
		if(!isMobile) { // Not for mobile devices!
			if ($("body").hasClass("tt-smooth-scroll")) {
				var topY = $(target).offset().top - $("#scroll-container > .scroll-content").offset().top - $offset;
				var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
				gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: topY, autoKill: true }, ease: Expo.easeInOut });

			} else {
				var topY = $(target).offset().top - $("body").offset().top - $offset;
				$("html,body").animate({scrollTop: topY}, 800);
			}
		} else {
			var topY = $(target).offset().top - $("body").offset().top - $offset;
			$("html,body").animate({scrollTop: topY}, 800);
		}
		return false;
	});



	// ================================================================
	// Scroll to top 
	// Requires "GSAP ScrollToPlugin" (https://greensock.com/docs/v2/Plugins/ScrollToPlugin)
	// ================================================================

	$(".scroll-to-top").on("click", function() {
		if(!isMobile) { // Not for mobile devices!
			if ($("body").hasClass("tt-smooth-scroll")) {
				var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
				gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
			} else {
				$("html,body").animate({scrollTop: 0}, 800);
			}
		} else {
			$("html,body").animate({scrollTop: 0}, 800);
		}
		return false;
	}); 









// Accordion Toggle
$('.sub-menu-title').on('click', function(e){
	e.preventDefault()
	$(this).parent().find('.sub-menu-content').slideToggle();
	$(this).toggleClass('active');
	$(this).parent().find('.fa-angle-down').toggleClass('close');
  })

gsap.registerPlugin(ScrollTrigger)

Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

let counters = document.querySelectorAll('.counter')

for(let counter of counters){
	let value = Number(counter.innerHTML).countDecimals()
	let decimals = 1

//	if(value != 0){
//		decimals = `0.${value}`
//	}

    gsap.from(counter, {
        textContent: 0,
        duration: 2.5,
        ease: "power1.inOut",
        snap: { textContent: decimals },
        scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
        }
    })
}


	// ================================================================
	// Miscellaneous
	// ================================================================

	// tt-Button disabled (prevent click)
	// ===================
	$(".tt-btn-disabled").on("click", function() {
		return false;
	});
	

	// Force page scroll position to top on refresh (do not remove!)
	// =============================================
	$(window).on("pagehide", function(){
		$(window).scrollTop(0);
	});


	// Hover fix for iOS
	// ==================
	$("*").on("touchstart",function() {
		$(this).trigger("hover");
	}).on("touchend",function() {
		$(this).trigger("hover");
	});



})(jQuery); 

$('.bod-member .member-info').on('click', function(){
    $(this).parent().siblings().find('.content').slideUp(500)
    $(this).parent().siblings().find('h2 i').removeClass('active')

    $(this).parent().find('.content').slideToggle(500)
    $(this).find('i').toggleClass('active')
})















// Table header fix

$(document).ready(function(){
	
    $('table').wrap('<div class="table-responsive" ></div>');
    
    gsap.registerPlugin(ScrollTrigger)
    
    let headerHeight = 70
    let topHeight = 'top'
    let bottomHeight = 'bottom'
      
    let tables = gsap.utils.toArray('table.fixed-header');
  
    tables.forEach((table) => {
  
      ScrollTrigger.create({
          trigger: table,
          start: `${topHeight} ${headerHeight}px`,
          end: `${bottomHeight} ${headerHeight}px`, 
          onToggle: (e) => { fixHeader(e) }
      })
  
    })
    
    let headerFixed = false
    
    function fixHeader(element){
  
        if(!headerFixed) {
    
            let oldHead = $(element.trigger).find('thead tr')
            let oldTds = $(element.trigger).find('thead td')
    
            $(element.trigger).find('thead').css('opacity', '0')
            $(element.trigger).find('thead').clone().css('opacity', '1').addClass("thead-sticky").prependTo(element.trigger)
    
            $('.thead-sticky').width($('.table-responsive').width())
            $('.thead-sticky').css('position', 'fixed')
            $('.thead-sticky').css('top', `${headerHeight}px`)
            $('.thead-sticky').css('overflow', 'hidden')
    
            $('.thead-sticky tr').width($(oldHead).width())
            $('.thead-sticky tr').css('display', 'flex')
    
            headPositionAdjust($(element.trigger).parent())
    
            let newTds = $('.thead-sticky td')
    
            for(let i=0; i<oldTds.length; i++){
                $(newTds[i]).width($(oldTds[i]).width())
            }
    
            headerFixed = true
        }else {
            $(element.trigger).find('.thead-sticky').remove()
            $(element.trigger).find('thead').css('opacity', '1')
            headerFixed = false
          }
    }
    
    $('.table-responsive').on('scroll', function(e){
        headPositionAdjust(e.currentTarget)
    })
    
    function headPositionAdjust(element){
        let tableScrollLeft = $(element).scrollLeft()
        $(element).find('.thead-sticky tr').css('transform', `translateX(-${tableScrollLeft}px)`)
    }
    
});

// Download table as Excel
$(function() {
    let excelDownloadButton = $("<div class='download-table'><a class='exportToExcel' href='#'><i class='fa-regular fa-file-excel'></i> Download Excel</a></div>");
    excelDownloadButton.insertBefore($("table.table2excel").parent());

    $(".exportToExcel").click(function(e){
        e.preventDefault();
        let table = $(this).parent().next().find('.table2excel')
        let tableName = "AccountsTable"

        if(table.attr('table-name') != null){
            tableName = table.attr('table-name')
        }
        
        if(table && table.length){
            $(table).table2excel({
                name: "Excel Document Name",
                filename: tableName + ".xls",
                fileext: ".xls",
                exclude_img: true,
                exclude_links: true,
                exclude_inputs: true,
                preserveColors: false
            });
        }
    });
});

$("#page-header .page-header-inner").has(".ph-image").parent().addClass("has-image");

if($(window).width() > 768){

	// Page Header Animation
	let headerAnim = gsap.timeline()

	headerAnim.to('.header-page .header-img', {
		width: '50vw',
		duration: 1
	})
	headerAnim.to('.header-page .header-img img', {
		scale: 1
	}, "-=75%")


	let pageTitle = new SplitText('.header-page .page-title', {type: "words"})

	headerAnim.to(pageTitle.words, {
		y: -40,
		duration: 0.5,
		stagger: 0.1
	})
	
	
	headerAnim.to('.header-page .section-title', {
		y: -30,
		duration: 0.5
	}, "-=75%")	
	

	headerAnim.from('.header-page .hidden-text', {
		y: 15,
		opacity: 0,
		duration: 0.5
	}, "-=90%")

	
	headerAnim.from('.header-page .hidden-heading', {
		y: 15,
		opacity: 0,
		duration: 0.5
	}, "-=90%")
	
	
	
	
	
	
	headerAnim.to('.header-page', {
		duration: 1
	})

	ScrollTrigger.create({
		animation: headerAnim,
		trigger: ".header-page",
		start: 'top top',
		end: "+=2000px",
		pin: true,
		scrub: 2
	})

	// Pin Toolbar
	ScrollTrigger.create({
		trigger: '#toolbar',
		start: 'center center',
		 end: '10000px',
		pin: true,
		scrub: true
	})

}

// Home Zoom Section Animation
let zoomPanelAnim1 = gsap.timeline()

zoomPanelAnim1.from('.zoompanel .text-panel img', {
	x: 50,
	opacity: 0,
	duration: 0.5
})

let zoomPanelText = new SplitText('.zoompanel .text-panel p', {type: "lines"})

zoomPanelAnim1.from(zoomPanelText.lines, {
	y: 30,
	opacity: 0,
	duration: 1,
	stagger: 0.1,
	ease: 'back',
})

ScrollTrigger.create({
	animation: zoomPanelAnim1,
	trigger: '.text-panel',
	start: 'top 95%',
	end: 'top 70px',
	toggleActions: "restart none none reverse"
})

if($(window).width() > 991){	
	let zoomPanelAnim2 = gsap.timeline()
	
	zoomPanelAnim2.to('.image-panel .zoomimage1 img', {
		scale: 1,
		duration: 5
	})
	zoomPanelAnim2.to('.image-panel .zoomimage2 img', {
		scale: 1,
		duration: 5
	}, "-=95%")
	
	ScrollTrigger.create({
		animation: zoomPanelAnim2,
		trigger: '.zoompanel',
		start: 'top 70px',
		end: '=+1000px',
		scrub: 1,
		pin: true
	})
}



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










