import PFileUpload from './file-upload.component.js';

export * from './file-upload.component.js';
export default PFileUpload;

PFileUpload.define('p-file-upload');

declare global {
  interface HTMLElementTagNameMap {
    'p-file-upload': PFileUpload;
  }
}
