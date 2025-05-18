// (function ($) {
// 	"use strict";

// 	// fixed menu js
// 	$(window).on('scroll', function () {
// 		var scroll = $(window).scrollTop();
// 		if (scroll < 120) {
// 			$("#sticky-header").removeClass("sticky-menu");
// 			$("#header-fixed-height").removeClass("active-height");

// 		} else {
// 			$("#sticky-header").addClass("sticky-menu");
// 			$("#header-fixed-height").addClass("active-height");
// 		}
// 	});


// 	// // Magnific popup js
// 	$(".parent-container").magnificPopup({
// 		delegate: ".gallery-popup",
// 		type: "image",
// 		gallery: {
// 			enabled: true,
// 		},
// 	});
//stick header js from chatgpt
// window.addEventListener('scroll', function () {
//   const header = document.getElementById('sticky-header');
//   if (window.scrollY > 50) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// });







// 	// simpleParallax js
	var image = document.getElementsByClassName('imageParallax');
	new simpleParallax(image, {
		delay: 1,
		transition: 'cubic-bezier(0,0,0,1)',
		scale: 1.3,
	});

// 	// split text animation
	// if ($(".split-text").length > 0) {
	// 	let st = $(".split-text");
	// 	if (st.length == 0) return;
	// 	gsap.registerPlugin(SplitText);
	// 	st.each(function (index, el) {
	// 		el.split = new SplitText(el, {
	// 			type: "lines,words,chars",
	// 			linesClass: "tp-split-line"
	// 		});
	// 		gsap.set(el, {
	// 			perspective: 400
	// 		});
	// 		if ($(el).hasClass('right')) {
	// 			gsap.set(el.split.chars, {
	// 				opacity: 0,
	// 				x: "50",
	// 				ease: "Back.easeOut",
	// 			});
	// 		}
	// 		if ($(el).hasClass('left')) {
	// 			gsap.set(el.split.chars, {
	// 				opacity: 0,
	// 				x: "-50",
	// 				ease: "circ.out",
	// 			});
	// 		}
	// 		if ($(el).hasClass('up')) {
	// 			gsap.set(el.split.chars, {
	// 				opacity: 0,
	// 				y: "80",
	// 				ease: "circ.out",
	// 			});
	// 		}
	// 		if ($(el).hasClass('down')) {
	// 			gsap.set(el.split.chars, {
	// 				opacity: 0,
	// 				y: "-80",
	// 				ease: "circ.out",
	// 			});
	// 		}
	// 		el.anim = gsap.to(el.split.chars, {
	// 			scrollTrigger: {
	// 				trigger: el,
	// 				start: "top 90%",
	// 			},
	// 			x: "0",
	// 			y: "0",
	// 			rotateX: "0",
	// 			scale: 1,
	// 			opacity: 1,
	// 			duration: 0.4,
	// 			stagger: 0.02,
	// 		});
	// 	});
	// }; eita use korte gele pura js file kaj kore na
// spilt-zoom
if ($(".split-zoom").length > 0) {
	let stZoom = $(".split-zoom");
	gsap.registerPlugin(SplitText, ScrollTrigger);

	stZoom.each(function (index, el) {
			el.split = new SplitText(el, {
					type: "words", // চাইলে "chars" বা "lines" করতে পারো
					wordsClass: "tp-split-word"
			});

			gsap.set(el, {
					perspective: 600
			});

			gsap.set(el.split.words, {
					opacity: 0,
					scale: 0.5,
					rotateY: 90,
					transformOrigin: "center center"
			});

			el.anim = gsap.to(el.split.words, {
					scrollTrigger: {
							trigger: el,
							start: "top 85%",
							toggleActions: "play none none reverse"
					},
					opacity: 1,
					scale: 1,
					rotateY: 0,
					duration: 0.6,
					ease: "power4.out",
					stagger: 0.05
			});
	});
}
// spilt-bounce
if ($(".split-bounce").length > 0) {
	let stBounce = $(".split-bounce");
	gsap.registerPlugin(SplitText, ScrollTrigger);

	stBounce.each(function (index, el) {
		el.split = new SplitText(el, {
			type: "words",
			wordsClass: "tp-split-word"
		});

		gsap.set(el, {
			perspective: 800
		});

		gsap.set(el.split.words, {
			opacity: 0,
			y: 100,
			rotateX: 90,
			transformOrigin: "bottom center"
		});

		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play none none reverse"
			},
			y: 0,
			opacity: 1,
			rotateX: 0,
			duration: 0.6,
			ease: "bounce.out",
			stagger: 0.07
		});
	});
}
// spilt-flip
if ($(".split-flip").length > 0) {
	let stFlip = $(".split-flip");
	gsap.registerPlugin(SplitText, ScrollTrigger);

	stFlip.each(function (index, el) {
		el.split = new SplitText(el, {
			type: "words",
			wordsClass: "tp-split-word"
		});

		gsap.set(el, {
			perspective: 1000
		});

		gsap.set(el.split.words, {
			opacity: 0,
			rotateY: -90,
			blur: 10,
			transformOrigin: "left center"
		});

		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
				toggleActions: "play none none reverse"
			},
			opacity: 1,
			rotateY: 0,
			filter: "blur(0px)",
			duration: 0.6,
			ease: "back.out(1.7)",
			stagger: 0.06
		});
	});
}
// image animat
if ($(".img-animate").length > 0) {
  gsap.registerPlugin(ScrollTrigger);

  $(".img-animate").each(function (index, el) {
    gsap.set(el, {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
      y: 50,
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  });
}
// image animate 2
if ($(".img-slide-blur").length > 0) {
  gsap.registerPlugin(ScrollTrigger);

  $(".img-slide-blur").each(function (index, el) {
    gsap.set(el, {
      opacity: 0,
      x: 100, // ডান দিক থেকে আসবে
      filter: "blur(10px)"
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    });
  });
}
//image animate 3
if ($(".img-blur-fade").length > 0) {
  gsap.registerPlugin(ScrollTrigger);

  $(".img-blur-fade").each(function (index, el) {
    gsap.set(el, {
      opacity: 0,
      x: -100,
      filter: "blur(10px)"
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    });
  });
}







// 	// // Service slider js
// 	$(".service-slider").slick({
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		dots: false,
// 		infinite: true,
// 		arrows: true,
// 		speed: 500,
// 		prevArrow: `<i class="fas arrow arrow-prev fa-arrow-left"></i>`,
// 		nextArrow: `<i class="fas arrow arrow-next fa-arrow-right"></i>`,
// 		responsive: [{
// 				breakpoint: 992,
// 				settings: {
// 					slidesToShow: 2,
// 				}
// 			},
// 			{
// 				breakpoint: 576,
// 				settings: {
// 					slidesToShow: 1,
// 				}
// 			}
// 		]
// 	});

// 	// // Service two slider js
// 	$(".service-slider-two").slick({
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		dots: true,
// 		infinite: true,
// 		arrows: false,
// 		speed: 500,
// 		prevArrow: `<i class="fas arrow arrow-prev fa-arrow-left"></i>`,
// 		nextArrow: `<i class="fas arrow arrow-next fa-arrow-right"></i>`,
// 		responsive: [{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 		}]
// 	});

// 	// // Testimonial slider js
// 	$(".testimonial-slider").slick({
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		dots: false,
// 		infinite: true,
// 		arrows: false,
// 		speed: 500,
// 	});

// 	// // Testimonial two slider js
// 	$(".testimonial-two-slider").slick({
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		dots: true,
// 		infinite: true,
// 		arrows: false,
// 		speed: 500,
// 	});

// 	// // Blog slider js
// 	$(".blog-slider").slick({
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		dots: false,
// 		infinite: true,
// 		arrows: true,
// 		speed: 500,
// 		prevArrow: `<i class="fa-solid arrows arrow-prev fa-arrow-left"></i>`,
// 		nextArrow: `<i class="fa-solid arrows arrow-next fa-arrow-right"></i>`,
// 		responsive: [{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 2,
// 				arrows:false,
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 				arrows:false,
// 			}
// 		}]
// 	});

// 	// // Image reveal js
// 	let revealContainers = document.querySelectorAll(".reveal");
// 	revealContainers.forEach((container) => {
// 		let image = container.querySelector("img");
// 		let tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: container,
// 				toggleActions: "play none none none"
// 			}
// 		});

// 		tl.set(container, {
// 			autoAlpha: 1
// 		});

// 		if (container.classList.contains('zoom-out')) {
// 			// Zoom-out effect
// 			tl.from(image, 1.5, {
// 				scale: 1.4,
// 				ease: Power2.out
// 			});
// 		} else if (container.classList.contains('left') || container.classList.contains('right')) {
// 			let xPercent = container.classList.contains('left') ? -100 : 100;
// 			tl.from(container, 1.5, {
// 				xPercent,
// 				ease: Power2.out
// 			});
// 			tl.from(image, 1.5, {
// 				xPercent: -xPercent,
// 				scale: 1,
// 				delay: -1.5,
// 				ease: Power2.out
// 			});
// 		}
// 	});

// 	// /* Odometer Active js */
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

// 	// Team move and active js
	var team_item = gsap.utils.toArray('.feature-item');
	let hover_img = gsap.utils.toArray(".feature-img");

	// Function to move the service image on mouse move
	function ServiceImageMove(event, item) {
		const contentBox = item.getBoundingClientRect();
		const dx = (event.clientX - contentBox.x - contentBox.width / 1) / 3;
		const dy = (event.clientY - contentBox.y - contentBox.height / 1) / 10;

		hover_img.forEach((img) => {
			gsap.to(img, {
				x: dx,
				y: dy,
			});
		});
	}














// 	// back to top js
	// let btn = $(".scroll-to-top");

	// $(window).scroll(function () {
	// 	btn.toggleClass("show", $(window).scrollTop() > 300);
	// });

	// btn.click(function (e) {
	// 	e.preventDefault();
	// 	if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
	// 		$("html").animate({
	// 				scrollTop: 0,
	// 			},
	// 			1000
	// 		);
	// 	} else {
	// 		$("html, body").animate({
	// 				scrollTop: 0,
	// 			},
	// 			0
	// 		);
	// 	}
	// });


	
// 	// Mobile menu js start
	$(".mobile-topbar .bars").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$('.sub-mobile-menu ul').hide();
	$(".sub-mobile-menu a").on("click", function () {
		$('.sub-mobile-menu ul').not($(this).next("ul")).slideUp(300);
		$(".sub-mobile-menu a i").not($(this).find("i")).removeClass("fa-chevron-up").addClass("fa-chevron-down");
		$(this).next("ul").slideToggle(300);
		$(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
	});

// 	// ===================================
// 	// ===================================
// 	// ===================================
// 	// Save scroll position before page unload
// 	window.addEventListener('beforeunload', function () {
// 		localStorage.setItem('scrollPosition', window.scrollY);
// 	});

// 	// Restore scroll position on page load
// 	window.addEventListener('load', function () {
// 		if (localStorage.getItem('scrollPosition') !== null) {
// 			window.scrollTo(0, localStorage.getItem('scrollPosition'));
// 		}
// 	});

// 	// ===================================
// 	// ===================================
// 	// ===================================
// })(jQuery);






// 	/* Data Background js from nahid */
$("[data-background]").each(function () {
  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})


// slide img
// $('.slider-man').slick({
//   dots: true,
//   arrows: false,
//   customPaging: function(slider, i) {
//     let thumb = $(slider.$slides[i]).find('img').attr('src');
//     return '<img src="' + thumb + '" class="dot-thumb"/>';
//   }
// });

// active class
// $(". portfolio-link-ul li a").click(function(e) {
//   e.preventDefault();
//   $(".my-nav li a").removeClass("active");
//   $(this).addClass("active");
// });


// // testimonial slider

// $('.testimonial-slider-main').slick({
//   dots: true,
//   prevArrow: `<button type="button" class="slick-prev custom-arrow">
//     <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 10L12 0L5.33333 10L12 20L0 10Z" fill="white"/>
// </svg>

//   </button>`,
//   nextArrow: `<button type="button" class="slick-next custom-arrow">
//     <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 10L0 0L6.66667 10L0 20L12 10Z" fill="white"/>
//     </svg>
//   </button>`,
	 
// });

// team social switch
// $(".team-card-svg-inner").click(function () {
//   $(".team-social-wrapper").slideToggle();
// });
// $(".team-card-svg-inner-2").click(function () {
//   $(".team-social-wrapper-2").slideToggle();
// });
// $(".team-card-svg-inner-3").click(function () {
//   $(".team-social-wrapper-3").slideToggle();
// });
$(".trucker_search-inner-a").click(function () {
  $(".overlay-main").css({
		background:"red",
		width:"100%",
		height:"100%"
	});
});
// $(".trucker_search-inner-a").click(function () {
//   $(".overlay-main").slideToggle()
// });
