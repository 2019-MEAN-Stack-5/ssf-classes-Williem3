export class planet {

    width: number;
    color: string;

    constructor (width: number, color: string) {
        this.width = width;
        this.color = color;
    }
}

export let krypton = new planet(780313, "green");
export let omicronPersei8 = new planet(5803133, "orange");
export let nemesis = new planet(2345334, "blue");