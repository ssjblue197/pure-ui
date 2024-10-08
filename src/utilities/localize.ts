import { LocalizeController as DefaultLocalizationController, registerTranslation } from "pure-localize";
import en from "../translations/en.js"; // Register English as the default/fallback language
import type { Translation as DefaultTranslation } from "pure-localize";

// Extend the controller and apply our own translation interface for better typings
export class LocalizeController extends DefaultLocalizationController<Translation> {
  // Technicallly '../translations/en.js' is supposed to work via side-effects. However, by some mystery sometimes the
  // translations don't get bundled as expected resulting in `no translation found` errors.
  // This is basically some extra assurance that our translations get registered prior to our localizer connecting in a component
  // and we don't rely on implicit import ordering.
  static {
    registerTranslation(en);
  }
}

// Export functions from the localize lib so we have one central place to import them from
export { registerTranslation } from "pure-localize";

export interface Translation extends DefaultTranslation {
  $code: string; // e.g. en, en-GB
  $name: string; // e.g. English, Español
  $dir: "ltr" | "rtl";

  browseFiles?: string;
  carousel: string;
  clearEntry: string;
  close: string;
  copied: string;
  copy: string;
  currentValue: string;
  dragDrop?: string;
  fileSizeExceeded?: string;
  fileTypeNotAccepted?: string;
  firstPage?: string;
  error: string;
  goToSlide: (slide: number, count: number) => string;
  hidePassword: string;
  lastPage?: string;
  loading: string;
  maxFiles?: string;
  noMultipleFiles?: string;
  empty?: string;
  nextPage?: string;
  nextMonth?: string; // TODO - add to other language packs and remove optional ? flag
  nextYear?: string; // TODO - add to other language packs and remove optional ? flag
  nextSlide: string;
  numOptionsSelected: (num: number) => string;
  previousPage?: string;
  previousMonth?: string; // TODO - add to other language packs and remove optional ? flag
  previousYear?: string; // TODO - add to other language packs and remove optional ? flag
  previousSlide: string;
  progress: string;
  remove: string;
  resize: string;
  scrollToEnd: string;
  scrollToStart: string;
  selectAColorFromTheScreen: string;
  showPassword: string;
  slideNum: (slide: number) => string;
  toggleColorFormat: string;
  today?: string; // TODO - add to other language packs and remove optional ? flag
}
