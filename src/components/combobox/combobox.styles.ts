import { css } from "lit";
import componentStyles from "../../styles/component.styles.js";
import formControlStyles from "../../styles/form-control.styles.js";

export default css`
  ${componentStyles}
  ${formControlStyles}
  :host {
    display: inline-block;
    width: 100%;
  }
  sl-dropdown {
    display: block;
    width: 100%;
  }
  sl-dropdown::part(panel) {
    display: block;
    width: 100%;
  }
`;
