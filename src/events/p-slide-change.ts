import type PCarouselItem from '../components/carousel-item/carousel-item.js';

export type PSlideChangeEvent = CustomEvent<{ index: number; slide: PCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'p-slide-change': PSlideChangeEvent;
  }
}
