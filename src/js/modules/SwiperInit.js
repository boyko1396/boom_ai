import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

class ResponsiveSliders {
  constructor() {
    this.whomSliderInstance = null;
    this.peculiaritiesSliderInstance = null;

    this.initializeAllSliders();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  createSwiperInstance(sliderSelector, params) {
    const sliderElement = document.querySelector(sliderSelector);

    if (!sliderElement) return null;

    return new Swiper(sliderElement, {
      loop: params.loop,
      slidesPerView: params.slidesPerView || 1,
      spaceBetween: params.spaceBetween || 0,
      autoHeight: true,
      navigation: {
        nextEl: params.nextEl,
        prevEl: params.prevEl,
      },
      pagination: {
        el: params.paginationEl,
        clickable: true,
      },
      ...params.settings,
    });
  }

  initializeAllSliders() {
    this.createSwiperInstance('.js-reviews-slider-init', {
      loop: true,
      paginationEl: '.js-swiper-pagination-reviews',
      nextEl: '.js-swiper-button-next-1',
      prevEl: '.js-swiper-button-prev-1',
      settings: {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
      },
    });

    this.handleResponsiveSliders();
  }

  handleResponsiveSliders() {
    const isMobile = window.innerWidth < 767;

    if (isMobile) {
      if (!this.whomSliderInstance) {
        this.whomSliderInstance = this.createSwiperInstance('.js-whom-slider-init', {
          loop: false,
          paginationEl: '.js-swiper-pagination-whom',
          settings: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
        });
      }

      if (!this.peculiaritiesSliderInstance) {
        this.peculiaritiesSliderInstance = this.createSwiperInstance('.js-peculiarities-slider-init', {
          loop: false,
          paginationEl: '.js-swiper-pagination-peculiarities',
          settings: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
        });
      }
    } else {
      if (this.whomSliderInstance) {
        this.whomSliderInstance.destroy(true, true);
        this.whomSliderInstance = null;
      }

      if (this.peculiaritiesSliderInstance) {
        this.peculiaritiesSliderInstance.destroy(true, true);
        this.peculiaritiesSliderInstance = null;
      }
    }
  }

  handleResize() {
    this.handleResponsiveSliders();
  }
}

export default ResponsiveSliders;