import { XmlComponent } from "../../file/xml-components";
import { TableCell, WidthType } from "./table-cell";
import { TableColumn } from "./table-column";
import { ITableFloatOptions, TableProperties } from "./table-properties";
import { TableRow } from "./table-row";
export declare class Table extends XmlComponent {
    private readonly properties;
    private readonly rows;
    private readonly grid;
    constructor(rows: number, cols: number, colSizes?: number[]);
    getRow(index: number): TableRow;
    getColumn(index: number): TableColumn;
    getCell(row: number, col: number): TableCell;
    setWidth(width: number, type?: WidthType): Table;
    setFixedWidthLayout(): Table;
    float(tableFloatOptions: ITableFloatOptions): Table;
    readonly Properties: TableProperties;
}
