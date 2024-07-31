import PRelativeTime from './relative-time.component.js';

export * from './relative-time.component.js';
export default PRelativeTime;

PRelativeTime.define('p-relative-time');

declare global {
  interface HTMLElementTagNameMap {
    'p-relative-time': PRelativeTime;
  }
}
