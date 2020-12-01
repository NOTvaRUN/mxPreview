
import { Graph } from "./Graph";

export class Editor extends mxEventSource {
    constructor(chromeless: any, themes?: Object, model?: any, graph?: any, editable?: any);
    /**
     * Counts open editor tabs (must be global for cross-window access)
     */
    pageCounter: number;
    /**
     * Specifies if local storage should be used (eg. on the iPad which has no filesystem)
     */
    graph:any;
    useLocalStorage: any;
    moveImage: string;
    helpImage: string;
    checkmarkImage: string;
    maximizeImage: string;
    zoomOutImage: string;
    zoomInImage: string;
    zoomFitImage: string;
    layersImage: string;
    previousImage: string;
    nextImage: string;
    editImage: string;
    zoomOutLargeImage: string;
    zoomInLargeImage: string;
    actualSizeLargeImage: string;
    printLargeImage: string;
    layersLargeImage: string;
    closeLargeImage: string;
    editLargeImage: string;
    previousLargeImage: string;
    nextLargeImage: string;
    refreshLargeImage: string;
    backLargeImage: string;
    fullscreenLargeImage: string;
    ctrlKey: string;
    hintOffset: number;
    popupsAllowed: boolean;

    /**
     * Stores initial state of mxClient.NO_FO.
     */
    originalNoForeignObject: any;
    /**
     * Specifies the image URL to be used for the transparent background.
     */
    transparentImage: string;
    /**
     * Specifies if the canvas should be extended in all directions. Default is true.
     */
    extendCanvas: boolean;
    /**
     * Specifies if the app should run in chromeless mode. Default is false.
     * This default is only used if the contructor argument is null.
     */
    chromeless: boolean;
    /**
     * Specifies the order of OK/Cancel buttons in dialogs. Default is true.
     * Cancel first is used on Macs, Windows/Confluence uses cancel last.
     */
    cancelFirst: boolean;
    /**
     * Specifies if the editor is enabled. Default is true.
     */
    enabled: boolean;
    /**
     * Contains the name which was used for the last save. Default value is null.
     * @default null
     */
    filename: any;
    /**
     * Contains the current modified state of the diagram. This is false for
     * new diagrams and after the diagram was saved.
     */
    modified: boolean;
    /**
     * Specifies if the diagram should be saved automatically if possible.
     * @default true
     */
    autosave: boolean;
    /**
     * Specifies the top spacing for the initial page view. Default is 0.
     * @default 0
     */
    initialTopSpacing: number;
    /**
     * Specifies the app name. Default is document.title.
     * @default document.title
     */
    appName: any;
    editBlankUrl: string;
    /**
     * Default value for the graph container overflow style.
     */
    defaultGraphOverflow: string;
    /**
     * Initializes the environment.
     */
    init(): void;
    /**
     * Sets the XML node for the current diagram.
     */
    isChromelessView(): any;
    /**
     * Sets the XML node for the current diagram.
     */
    setAutosave(value): void;
    getEditBlankUrl(params: any);
    editAsNew(xml: any, title: any): void;
    /**
     * Sets the XML node for the current diagram.
     */
    createGraph(themes: any, model?: Graph): Graph;
    /**
     * Sets the XML node for the current diagram.
     */
    resetGraph(): void;
    /**
     * Sets the XML node for the current diagram.
     */
    readGraphState(node: Node): void;
    /**
     * Sets the XML node for the current diagram.
     */
    setGraphXml(node: Node): void;

    /**
     * Returns the XML node that represents the current diagram.
     */
    getGraphXml(ignoreSelection: string): Node;
    /**
     * Keeps the graph container in sync with the persistent graph state
     */
    updateGraphComponents(): void;
    /**
     * Sets the modified flag.
     */
    setModified(value: boolean): void;
    /**
     * Sets the filename.
     */
    setFilename(value: boolean): void;
    /**
     * Creates and returns a new undo manager.
     */
    createUndoManager(): any;
    /**
     * Adds basic stencil set (no namespace).
     */
    initStencilRegistry(): void;


    renderGraph():void;
}