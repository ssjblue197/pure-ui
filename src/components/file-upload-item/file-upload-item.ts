import PFileUploadItem from './file-upload-item.component.js';

export * from './file-upload-item.component.js';
export default PFileUploadItem;

PFileUploadItem.define('p-file-upload-item');

declare global {
  interface HTMLElementTagNameMap {
    'p-file-upload-item': PFileUploadItem;
  }
}
