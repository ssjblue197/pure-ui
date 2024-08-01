import PQrCode from "./qr-code.component.js";

export * from "./qr-code.component.js";
export default PQrCode;

PQrCode.define("p-qr-code");

declare global {
  interface HTMLElementTagNameMap {
    "p-qr-code": PQrCode;
  }
}
