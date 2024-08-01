import PCalendar from "./calendar.component.js";

export * from "./calendar.component.js";
export default PCalendar;

PCalendar.define("p-calendar");

declare global {
  interface HTMLElementTagNameMap {
    "p-calendar": PCalendar;
  }
}
