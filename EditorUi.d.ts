import { Editor } from "./Editor";
import { Graph } from "./Graph";
import { Menus } from "./Menus";

export class EditorUi {
  constructor(editor: Editor, container?: any, lightbox?: any);


  /**
   * Global config that specifies if the compact UI elements should be used.
   */
  compactUi: boolean;

  /**Specifies the size of the split bar.
   */
  splitSize: number;

  /**
  * Specifies the height of the menubar
  * @default true
  */
  menubarHeight: number;

  /**
   * Specifies the width of the format panel should be enabled
   * @default true
   */
  formatEnabled: boolean;

  /**
   * Specifies the width of the format panel
   * @default 240
   */
  formatWidth: number;

  /**
   * Specifies the height of the toolbar
   * @default 38
   */
  toolbarHeight: number;

  /**
   * Specifies the height of the footer
   * @default 28
   */
  footerHeight: number;

  /**
   * Specifies the height of the optional sidebarFooterContainer
   * @default 34
   */
  sidebarFooterContainer: number;

  /**
   * Specifies the position of the horizontal split bar
   */
  hsplitPosition: number;

  /**
   * Specifies if animation are allowed in <executeLayout>
   * @default true
   */
  allowAnimation: boolean;

  /**
   * @default 2
   */
  lightBoxMaxFitScale: number;

  /**
   * Specifies if single click on horizontal split should collapse sidebar.
   * @default false
   */
  hsplitClickEnabled: boolean;

  /**
   * Installs the listeners to update the action states.
   */
  init(): void;
  /**
   * Returns true if the given event should start editing
   */
  onKeyDown(evt: Event): boolean;
  /**
   * Returns true if the given event should start editing. This implementation returns true.
   */
  onKeyPress(evt: Event): boolean;
  /**
   * Returns true if the given event should start editing. This implementation returns true.
   */
  isImmediateEditingEvent(evt: Event): boolean;
  /**
   * Private helper method.
   */
  getCssClassForMarker(prefix: string, shape: string, marker: string, fill: string): string;
  /**
   * Overridden in Menus.js
   */
  createMenus(): Menus;
  /**
   * Hook for allowing selection and context menu for certain events.
   */
  updatePasteActionStates(): void;
  /**
   * Hook for allowing selection and context menu for certain events.
   */
  initClipboard(): void;
  /**
   * Delay between zoom steps when not using preview.
   */
  lazyZoomDelay: number;
  /**
   * Delay before update of DOM when using preview.
   */
  wheelZoomDelay: number;
  /**
   * Delay before update of DOM when using preview.
   */
  buttonZoomDelay: number;
  /**
   * Initializes the infinite canvas.
   */
  initCanvas(): void;
  /**
   * Creates a temporary graph instance for rendering off-screen content.
   */
  addChromelessToolbarItems(addButton: any): void;

  /**
   * Creates a temporary graph instance for rendering off-screen content.
   */
  createTemporaryGraph(stylesheet: string): Graph;
  /**
   *
   */
  addChromelessClickHandler(): void;
  /**
   * Toggle Right side panel
   */
  toggleFormatPanel(forceHide: number);
  /**
   * Adds support for placeholders in labels.
   */
  lightboxFit(maxHeight: number): void;
  /**
   * Translates this point by the given vector.
   * look for return type 
   * @param {number} dx X-coordinate of the translation.
   * @param {number} dy Y-coordinate of the translation.
   */
  isDiagramEmpty(): any;
  /**
   * Hook for allowing selection and context menu for certain events.
   */
  isSelectionAllowed(evt: Event): any;
  /**
   * Installs dialog if browser window is closed without saving
   * This must be disabled during save and image export.
   */
  addBeforeUnloadListener(): any;
  /**
   * Sets the onbeforeunload for the application
   */
  onBeforeUnload(): any;
  /**
   * Opens the current diagram via the window.opener if one exists.
   */
  open(dashboardData: any): void;
  /**
   * Sets the current menu and element.
   * menu:MENU,elt:element?
   */
  setCurrentMenu(menu: any, elt: any): void;

  /**
   * Resets the current menu and element.
   */
  resetCurrentMenu(): void;
  /**
   * Hides and destroys the current menu.
   */
  hideCurrentMenu(): void;
  /**
   * Updates the document title.
   */
  updateDocumentTitle(): void;
  /**
   * creates hover icons.
   * HoverIcons
   */
  createHoverIcons(): any;
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  redo(): void;
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  undo(): void;
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  canRedo(): any;
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  canUndo(): any;
  /**
   * 
   */
  getEditBlankXml(): any;
  /**
   * Returns the URL for a copy of this editor with no state.
   */
  getUrl(pathname: string): string;
  /**
    * Specifies if the graph has scrollbars.
    */
  setScrollbars(value: any): void;
  /**
   * Returns true if the graph has scrollbars.
   */
  hasScrollbars(): any;
  /**
   * Resets the state of the scrollbars.
   */
  resetScrollbars(): void;
  /**
   * Loads the stylesheet for this graph.
   */
  setPageVisible(value: any): void;


  /**ChangePageSetup function on 2380 think about it. */

  /**
   * Loads the stylesheet for this graph.
   */
  setBackgroundColor(value: any): void;
  /**
    * Loads the stylesheet for this graph.
    */
  setFoldingEnabled(value: any): void;
  /**
   * Loads the stylesheet for this graph.
   */
  setPageFormat(value: any): void;
  /**
   * Loads the stylesheet for this graph.
   */
  setPageScale(value: any): void;
  /**
   * Loads the stylesheet for this graph.
   */
  setGridColor(value: any): void
  /**
   * Updates the states of the given undo/redo items.
   */
  addUndoListener(): void;
  /**
   * Updates the states of the given toolbar items based on the selection.
   */
  updateActionStates(): void;

  zeroOffset: any;

  getDiagramContainerOffset(): any;
  /**
   * Refreshes the viewport.
   */
  refresh(sizeDidChange: boolean): void;
  /**
   * Creates the required containers.
   */
  createTabContainer(): null;
  /**
   * Creates the required containers.
   */
  createDivs(): void;
  /**
   * Hook for sidebar footer container. This implementation returns null.
   */
  createSidebarFooterContainer(): null;
  /**
   * Creates the required containers.
   */
  createUi(): void;
  /**
   * Creates a new toolbar for the given container.
   */
  createStatusContainer(): any;
  /**
   * Creates a new toolbar for the given container.
   */
  setStatusText(value: string): void;
  /**
   * Creates a new toolbar for the given container.
   */
  createToolbar(container: any): any;

  /**
* Creates a new sidebar for the given container.
*/
  createSidebar(container: any): any;

  /**
   * Creates a new sidebar for the given container.
   */
  createFormat(container: any): any;

  /**
   * Creates and returns a new footer.
   */
  createFooter(): any;

  /**
   * Creates the actual toolbar for the toolbar container.
   */
  createDiv(classname: string): any;

  /**
   * Updates the states of the given undo/redo items.
   */
  addSplitHandler(elt: any, horizontal: any, dx: any, onChange: any): void;
  /**
   * Translates this point by the given vector.
   *
   * @param {number} dx X-coordinate of the translation.
   * @param {number} dy Y-coordinate of the translation.
   */
  handleError(resp: any, title: any, fn: any, invokeFnOnClose: any, notFoundMessage: any): void;
  /**
   * Translates this point by the given vector.
   *
   * @param {number} dx X-coordinate of the translation.
   * @param {number} dy Y-coordinate of the translation.
   */
  showError(title: string, msg: string, btn: any, fn: any, retry: any, btn2: any, fn2: any, btn3: any, fn3: any, w: number, h: number, hide: any, onClose: any): void;
  /**
   * Displays a print dialog.
   */
  showDialog(elt: any, w: number, h: number, modal: any, closable: any, onClose: any, noScroll: any, transparent: any, onResize: any, ignoreBgClick: any): void;
  /**
   * Displays a print dialog.
   */
  hideDialog(cancel: any, isEsc: any): void;
  /**
   * Display a color dialog.
   */
  pickColor(color: string, apply: any): void;
  /**
   * Adds the label menu items to the given menu and parent.
   */
  openFile(): void;
  /**
   * Extracs the graph model from the given HTML data from a data transfer event.
   */
  extractGraphModelFromHtml(data: string): string;
  /**
   * Opens the given files in the editor.
   */
  extractGraphModelFromEvent(evt: Event): any;
  /**
   * Hook for subclassers to return true if event data is a supported format.
   * This implementation always returns false.
   */
  isCompatibleString(data): boolean;
  /**
   * Adds the label menu items to the given menu and parent.
   */
  saveFile(forceDialog: any): boolean;
  /**
   * Saves the current graph under the given filename.
   */
  save(name: string): any;
  /**
   * Executes the given layout.
   */
  executeLayout(exec: any, animate: any, post: any): void;
  /**
   * Hides the current menu.
   */
  showImageDialog(title: string, value: any, fn: any, ignoreExisting: any): void;
  /**
   * Hides the current menu.
   */
  showLinkDialog(value: any, btnLabel: string, fn: any): void;
  /**
  * Hides the current menu.
  */
  showDataDialog(cell: any): void;
  /**
   * Hides the current menu.
   */
  showBackgroundImageDialog(apply: any): void;
  /**
   * Loads the stylesheet for this graph.
   */
  setBackgroundImage(image: any): void;
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  confirm(msg: string, okFn: any, cancelFn: any): void;
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  createOutline(wnd: any): any;
  // Alt+Shift+Keycode mapping to action
  altShiftActions: object;
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  createKeyHandler(editor: any): any;
  /**
   * Creates the keyboard event handler for the current graph and history.
   */
  destroy(): void;


  renderGraph():void
}