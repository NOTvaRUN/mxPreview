

export class Graph {
  constructor(container: any, model: any, renderHint: any, stylesheet: any, themes: any, standalone?: any)
  /**
   * Specifies if the touch UI should be used (cannot detect touch in FF so always on for Windows/Linux)
   */
  touchStyle: string;
  /**
    * Shortcut for capability check.
    */
  fileSupport: string;
  /**
   * Default size for line jumps.
   */
  lineJumpsEnabled: boolean;
  /**
   * Default size for line jumps.
   */
  defaultJumpSize: number;
  /**
   * Minimum width for table columns.
   */
  minTableColumnWidth: number;
  /**
   * Minimum height for table rows.
   */
  minTableRowHeight: number;
  /**
   * Text for foreign object warning.
   */
  foreignObjectWarningText: string;
  /**
   * Link for foreign object warning.
   */
  foreignObjectWarningLink: string;
  /**
   * Helper function for creating SVG data URI.
   */
  createSvgImage(w: number, h: number, data: string, coordWidth: number, coordHeight: number): any;
  /**
   * Removes all illegal control characters with ASCII code <32 except TAB, LF
   * and CR.
   */
  zapGremlins(text: Array<any>): Array<any>;
  /**
   * Turns the given string into an array.
   */
  stringToBytes(str: string): Array<any>;
  /**
   * Turns the given array into a string.
   */
  bytesToString(arr: Array<any>): string;
  /**
   * Returns a base64 encoded version of the compressed outer XML of the given node.
   */
  compressNode(node: Node, checked: any): Graph;
  /**
   * Returns a base64 encoded version of the compressed string.
   */
  compress(data: any, deflate: any): any;
  /**
   * Returns a decompressed version of the base64 encoded string.
   */
  decompress(data: any, inflate: any, checked: any): any;
  /**
   * Redirects to Graph.zapGremlins.
   */
  zapGremlins(text: any): any;

  /**Hovericons */
  tableResized(table: any): void;

  /**
   * Updates column width and row height.
   */
  setRowHeight(row: any, height: number): void;
  /**
    * Updates column width and row height.
    */
  tableRowResized(row: any, bounds: any, prev: any): void;

  defaultVertexStyle: object;

  /**
   * Contains the default style for edges.
   */
  defaultEdgeStyle: object;
  /**
 * Returns the current edge style as a string.
  */
  createCurrentEdgeStyle(): string;
  /**
   * Hook for subclassers.
   */
  getPagePadding(): mxPoint;
  /**
   * Loads the stylesheet for this graph.
   */
  loadStylesheet(): void;
  /**
   * Creates lookup from object IDs to cell IDs.
   */
  createCellLookup(cells: any, lookup?: Object): Object;
  /**
   * Creates lookup from original to cloned cell IDs where mapping is
   * the mapping used in cloneCells and lookup is a mapping from
   * object IDs to cell IDs.
   */
  createCellMapping(mapping: any, lookup?: Object, cellMapping?: Object): Object;
  importGraphModel(node: Node, dx: number, dy: number, crop?: any): any;

  /**
* Translates this point by the given vector.
* 
* @param {number} dx X-coordinate of the translation.
* @param {number} dy Y-coordinate of the translation.
*/

  encodeCells(cells: any): any;
  /**
   * Overrides cloning cells in moveCells.
   */

  /**
   * @param cells Array of {@link mxCell} to be moved, cloned or added to the target.
   * @param dx Integer that specifies the x-coordinate of the vector. Default is 0.
   * @param dy Integer that specifies the y-coordinate of the vector. Default is 0.
   * @param clone Boolean indicating if the cells should be cloned. Default is false.
   * @param target {@link mxCell} that represents the new parent of the cells.
   * @param evt Mouseevent that triggered the invocation.
   * @param mapping Optional mapping for existing clones.
   */
  moveCells(cells: any, dx: number, dy: number, clone: boolean, target?: any, evt?: Event, mapping?: any): any;
  /**
* Updates cells IDs for custom links in the given cells.
*/
  updateCustomLinks(mapping: any, cells: any): any;

}