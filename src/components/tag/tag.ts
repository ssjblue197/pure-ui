import PTag from './tag.component.js';

export * from './tag.component.js';
export default PTag;

PTag.define('p-tag');

declare global {
  interface HTMLElementTagNameMap {
    'p-tag': PTag;
  }
}
