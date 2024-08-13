//getter - Getter method are spacial method that makes a property readable.
//setter - setter method are spacial method that makes a property wrighting.

class value{
    constructor(height, width){
        this.height = height;
        this.width = width
    }
    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }
        else{
            console.error("Sorry you have not select positive number");
        }
    }
    set height(newheight){
        if(newheight > 0){
            this._height = newheight; 
        }
        else{
            console.error("Sorry you have not select positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height
    }
}
const property = new value(100, 50);
console.log(property.width);
console.log(property._height);