export class DestinoViaje {
    private selected: boolean;

    servicios: string[];

    constructor(public nombre:string, public urlImage:string) {
        this.servicios = ['pileta','desayuno'];
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean) {
        this.selected = true;
    }
}