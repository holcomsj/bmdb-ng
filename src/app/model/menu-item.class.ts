export class MenuItem {
    display: string;
    href: string;
    tootip: string;

    constructor(display: string = '', href: string = '',
     tooltip: string= ''){
         this.display = display;
         this.href = href;
         this.tootip = tooltip;
     }
}
