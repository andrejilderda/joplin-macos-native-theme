import Plugin from '../Plugin';
import { ButtonSpec, ViewHandle, DialogResult, Toast } from './types';
/**
 * Allows creating and managing dialogs. A dialog is modal window that
 * contains a webview and a row of buttons. You can update the
 * webview using the `setHtml` method. Dialogs are hidden by default and
 * you need to call `open()` to open them. Once the user clicks on a
 * button, the `open` call will return an object indicating what button was
 * clicked on.
 *
 * ## Retrieving form values
 *
 * If your HTML content included one or more forms, a `formData` object
 * will also be included with the key/value for each form.
 *
 * ## Special button IDs
 *
 * The following buttons IDs have a special meaning:
 *
 * - `ok`, `yes`, `submit`, `confirm`: They are considered "submit" buttons
 * - `cancel`, `no`, `reject`: They are considered "dismiss" buttons
 *
 * This information is used by the application to determine what action
 * should be done when the user presses "Enter" or "Escape" within the
 * dialog. If they press "Enter", the first "submit" button will be
 * automatically clicked. If they press "Escape" the first "dismiss" button
 * will be automatically clicked.
 *
 * [View the demo
 * plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/dialog)
 */
export default class JoplinViewsDialogs {
    private store;
    private plugin;
    private implementation_;
    constructor(implementation: any, plugin: Plugin, store: any);
    private controller;
    /**
     * Creates a new dialog
     */
    create(id: string): Promise<ViewHandle>;
    /**
     * Displays a message box with OK/Cancel buttons. Returns the button index that was clicked - "0" for OK and "1" for "Cancel"
     */
    showMessageBox(message: string): Promise<number>;
    /**
     * Displays a Toast notification in the corner of the application screen.
     */
    showToast(toast: Toast): Promise<void>;
    /**
     * Displays a dialog to select a file or a directory. Same options and
     * output as
     * https://www.electronjs.org/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options
     *
     * <span class="platform-desktop">desktop</span>
     */
    showOpenDialog(options: any): Promise<any>;
    /**
     * Sets the dialog HTML content
     */
    setHtml(handle: ViewHandle, html: string): Promise<string>;
    /**
     * Adds and loads a new JS or CSS files into the dialog.
     */
    addScript(handle: ViewHandle, scriptPath: string): Promise<void>;
    /**
     * Sets the dialog buttons.
     */
    setButtons(handle: ViewHandle, buttons: ButtonSpec[]): Promise<ButtonSpec[]>;
    /**
     * Opens the dialog.
     *
     * On desktop, this closes any copies of the dialog open in different windows.
     */
    open(handle: ViewHandle): Promise<DialogResult>;
    /**
     * Toggle on whether to fit the dialog size to the content or not.
     * When set to false, the dialog is set to 90vw and 80vh
     * @default true
     */
    setFitToContent(handle: ViewHandle, status: boolean): Promise<boolean>;
}
