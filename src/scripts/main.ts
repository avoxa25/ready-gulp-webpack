class DickMan {
    readonly name: string;
    readonly dickLength: number;

    constructor(name: string, dickLength: number) {
        this.name = name;
        this.dickLength = dickLength;
    }
}

function suckDick(sucker: string, dickMan: DickMan): void {
    console.log(`${sucker} sucks ${dickMan.name}'s dick. It is ${dickMan.dickLength} cm.`)
}

const trump = new DickMan('Trump', 42); 

suckDick('Biden', trump);