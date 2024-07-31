import PProgressBar from './progress-bar.component.js';

export * from './progress-bar.component.js';
export default PProgressBar;

PProgressBar.define('p-progress-bar');

declare global {
  interface HTMLElementTagNameMap {
    'p-progress-bar': PProgressBar;
  }
}
