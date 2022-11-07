     // Initialise Carousel
     const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        infinite: false,
        Navigation: false,
      });
      
      // Initialise Fancybox
      Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
          on: {
            change: (carousel, to) => {
              // Sync Carousel slide
              // ===
              const $el = Fancybox.getInstance()
                .getSlide()
                .$trigger.closest(".carousel__slide");
      
              const slide = mainCarousel.slides.find((slide) => {
                return slide.$el === $el;
              });
      
              mainCarousel.slideTo(slide.index, {
                friction: 0,
              });
            },
          },
        },
      }); 
      <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div class="content">
							<h1>FULL COUNT WASH</h1>
							<p class="major">PROFESSIONAL COMMERCIAL AND RESIDENTIAL PRESSURE WASHING SERVICES IN PHOENIX<a href="https://html5up.net"></a> <a href="https://html5up.net/license"></a></p>
							<ul class="actions stacked">
								<li><a href="#first" class="button big wide smooth-scroll-middle">Get Started</a></li>
							</ul>
						</div>
						<div class="image">
							<img src="images/SOFTGIF.gif" alt="" />
						</div>
					</section>