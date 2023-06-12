class SVG {
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    setText(text, color){
        if (text.length > 3){
            throw new Error ('Text cannot be greater than 3 characters!')
        }
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    
}