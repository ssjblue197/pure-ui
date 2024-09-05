import { classMap } from "lit/directives/class-map.js";
import { FormControlController } from "../../internal/form.js";
import { hasValidFileSize, hasValidFileType } from "./library.js";
import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query, state } from "lit/decorators.js";
import componentStyles from "../../styles/component.styles.js";
import PFileUploadItem from "../file-upload-item/file-upload-item.component.js";
import PIcon from "../icon/icon.component.js";
import PIconButton from "../icon-button/icon-button.component.js";
import PProgressBar from "../progress-bar/progress-bar.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./file-upload.styles.js";
import type { CSSResultGroup } from "lit";
import type { FileInfo } from "./library.js";
import type { PureFormControl } from "../../internal/pure-ui-element.js";

/**
 * @since 2.0
 * @status experimental
 *
 * @dependency p-progress-bar
 * @dependency p-icon
 * @dependency p-icon-button
 * @dependency p-file-upload-item
 *
 * @slot label - The dropzone's label. Alternatively, you can use the image slot and label prop.
 * @slot image - The dropzone's image.
 * @slot button - The dropzone's button.
 *
 * @event p-drop - Emitted when dragged files have been dropped on the dropzone area.
 * @event {{ fileList: FileList }} p-change - Emitted when files have been uploaded via the dropzone or file dialog.
 * @event {{ response: unknown }} p-load - Emitted when a file transfer was finished
 * @event {{ event: ProgressEvent }} p-error - Emitted when a file transfer threw an error
 * @event {{ event: ProgressEvent }} p-abort - Emitted when a file transfer was aborted by the user
 * @event {{ file: FileInfo }} p-remove - Emitted when a file was removed
 *
 * @csspart base - The component's internal wrapper.
 * @csspart label - The dropzone container.
 * @csspart image - The dropzone image.
 * @csspart button - The dropzone button.
 *
 * @cssproperty --border-radius - The border radius of the dropzone borders.
 * @cssproperty --border-width - The width of the dropzone borders.
 * @cssproperty --border-style - The style of the dropzone borders.
 *
 */
export default class PFileUpload extends PureElement implements PureFormControl {
  static styles: CSSResultGroup = [componentStyles, styles];

  static dependencies = {
    "p-icon": PIcon,
    "p-icon-button": PIconButton,
    "p-progress-bar": PProgressBar,
    "p-file-upload-item": PFileUploadItem,
  };

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ["p-change", "p-remove"],
  });
  private readonly localize = new LocalizeController(this);

  /** Internal property to show a warning in the dropzone */
  @state() warning?: string;

  /** Indicates whether a file is currently dragged over the dropzone */
  @state() isDragover = false;

  @query("#file-input") fileInput: HTMLInputElement;

  @property({ type: Array }) files: FileInfo[] = [];

  /** The input's name attribute. */
  @property() name: string;

  public get value(): string | File[] {
    if (Array.isArray(this.files)) {
      return this.files.map(file => file.file);
    }
    return "";
  }

  public set value(file: string | File | File[]) {
    if (Array.isArray(file)) {
      this.files = file.map(f => ({ file: f }));
      return;
    }
    if (file instanceof File) {
      this.files = [{ file }];
      return;
    }
    this.files = [];
  }

  /** Disables the dropzone. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** If true, hides button to open the native file selection dialog */
  @property({ type: Boolean, reflect: true, attribute: "no-button" }) noButton = false;

  /** If true, shows only a button as a file input */
  @property({ type: Boolean, reflect: true, attribute: "button-only" }) buttonOnly = false;

  /** If true, no file list will be shown */
  @property({ type: Boolean, reflect: true, attribute: "no-file-list" }) noFileList = false;

  /** An optional overwrite for the upload label */
  @property() label?: string;

  /** An optional overwrite for the preview button label */
  @property({ attribute: "button-label" }) buttonLabel?: string;

  /** The locale to render the component in. */
  @property() lang: string;

  /** A string that defines the file types the file dropzone should accept. Defaults to '*' */
  @property({ type: String, reflect: true }) accept = "*";

  /** An optional maximum size of a file that will be considered valid. */
  @property({ type: Number, attribute: "max-file-size" }) maxFileSize?: number;

  /** The maximum amount of files that are allowed. */
  @property({ type: Number, attribute: "max-files" }) maxFiles: number;

  /** Indicates if multiple files can be uploaded */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /** Gets the validity state object */
  get validity() {
    return this.fileInput.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.fileInput.validationMessage;
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.fileInput.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.fileInput.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.fileInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  addFile(file: File) {
    if (this.maxFiles && this.files.length >= this.maxFiles) {
      this.warning = this.localize.term("maxFiles");
      return;
    }

    const fileInfo: FileInfo = {
      file,
    };

    if (!hasValidFileType(file, this.accept)) {
      fileInfo.accepted = false;
      fileInfo.warning = this.localize.term("fileTypeNotAccepted");
    } else if (!hasValidFileSize(file, this.maxFileSize)) {
      fileInfo.accepted = false;
      fileInfo.warning = this.localize.term("fileSizeExceeded");
    } else {
      fileInfo.accepted = true;
    }

    this.files = this.multiple ? [...this.files, fileInfo] : [fileInfo];
  }

  handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) {
      return;
    }

    this.warning = undefined;
    if (!this.multiple && fileList.length > 1) {
      this.warning = this.localize.term("noMultipleFiles");
      return;
    }

    Object.values(fileList).forEach(file => this.addFile(file));

    this.emit("p-change", { detail: this.files });
  }

  onDragLeave(): void {
    this.isDragover = false;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();

    if (!event.dataTransfer) {
      // Abort if no files are dragged
      return;
    }

    this.isDragover = true;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragover = false;

    const files = event.dataTransfer?.files;
    if (!files || this.disabled) {
      // Abort if no files were transferred, the entire element or drag and drop is disabled
      return;
    }

    this.handleFiles(files);
  }

  handleBrowseFileClick() {
    this.fileInput.click();
  }

  handleFileInputChange() {
    this.handleFiles(this.fileInput.files);
  }

  handleFileRemove(index: number) {
    const fileInfo = this.files[index];
    this.emit("p-remove", { detail: fileInfo });
    this.files = this.files.filter((_, fileIndex) => fileIndex !== index);
    this.emit("p-change", { detail: this.files });
  }

  get description(): string {
    if (this.warning) {
      return this.warning;
    }
    return this.label ? this.label : this.localize.term("dragDrop");
  }

  render() {
    const browseFilesButton = html`
      <div @click="${this.handleBrowseFileClick}">
        <slot name="button">
          <p-button
            part="button"
            variant=${this.warning ? "warning" : "default"}
            ?disabled=${this.disabled}
            size="small"
          >
            ${this.buttonLabel ?? this.localize.term("browseFiles")}
          </p-button>
        </slot>
      </div>
    `;

    return html`
      <div
        part="base"
        class=${classMap({
          "file-upload": true,
          "file-upload--disabled": this.disabled,
          "file-upload--warning": !!this.warning,
          "file-upload--dragged": this.isDragover,
        })}
      >
        <input
          type="file"
          id="file-input"
          style="display: none"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change="${this.handleFileInputChange}"
          value=${Array.isArray(this.value)
            ? this.value.map((f: File | string) => (f instanceof File ? f.name : f)).join(",")
            : ""}
        />
        ${this.buttonOnly
          ? browseFilesButton
          : html`
              <div id="dropzone" @drop="${this.onDrop}" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}">
                <slot name="label">
                  <div part="label" class="file-upload__label">
                    <div class="file-upload__label__container">
                      <span class="file-upload__icon">
                        <slot name="image">
                          <span style="font-size: 20px; position: relative; top: 5px;">
                            <p-icon name="cloud-upload" size="large"></p-icon>
                          </span>
                        </slot>
                      </span>
                      <div class="file-upload__label__text">
                        ${!this.noButton ? browseFilesButton : ""}
                        <div class="file-upload__label__description">${this.description}</div>
                      </div>
                    </div>
                  </div>
                </slot>
              </div>
            `}
        ${!this.noFileList
          ? html`
              <div class="file-upload__file-items" id="file-items">
                ${this.files.map(
                  (fileInfo, index) => html`
                    <p-file-upload-item
                      size=${fileInfo.accepted ? fileInfo.file.size : nothing}
                      ?warning=${!fileInfo.accepted}
                      ?closable=${fileInfo.accepted}
                      ?loading=${fileInfo.loading}
                      progress=${ifDefined(fileInfo.progress)}
                      @p-hide=${(event: CustomEvent) => {
                        event.stopPropagation();
                        this.handleFileRemove(index);
                      }}
                    >
                      ${fileInfo.accepted ? fileInfo.file.name : fileInfo.warning}
                      <p-icon
                        name=${fileInfo.warning ? "exclamation-triangle" : "file-earmark"}
                        slot="image"
                        library="system"
                      ></p-icon>
                    </p-file-upload-item>
                  `,
                )}
              </div>
            `
          : ""}
      </div>
    `;
  }
}
