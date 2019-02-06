import { Paragraph } from "../../../file/paragraph";
import { IXmlableObject, XmlComponent } from "../../../file/xml-components";
import { Table } from "../table";
import { TableCellBorders, VerticalAlign, WidthType } from "./table-cell-components";
export declare class TableCell extends XmlComponent {
    private readonly properties;
    constructor();
    addParagraph(content: Paragraph): TableCell;
    addTable(content: Table): TableCell;
    prepForXml(): IXmlableObject | undefined;
    createParagraph(text?: string): Paragraph;
    setVerticalAlign(type: VerticalAlign): TableCell;
    addGridSpan(cellSpan: number): TableCell;
    readonly Borders: TableCellBorders;
    setWidth(width: string | number, type?: WidthType): TableCell;
}
