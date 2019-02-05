import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export class TableRowProperties extends XmlComponent {
    constructor() {
        super("w:trPr");
    }

    public setCantSplit(value: boolean): TableRowProperties {
        this.root.push(new CantSplit(value));

        return this;
    }
}

class CantSplitAttributes extends XmlAttributeComponent<{ readonly val: boolean }> {
    protected readonly xmlKeys = { val: "w:val" };
}

export class CantSplit extends XmlComponent {
    constructor(value: boolean) {
        super("w:cantSplit");
        this.root.push(new CantSplitAttributes({ val: value }));
    }
}
