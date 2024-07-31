import PCard from './card.component.js';

export * from './card.component.js';
export default PCard;

PCard.define('p-card');

declare global {
  interface HTMLElementTagNameMap {
    'p-card': PCard;
  }
}
