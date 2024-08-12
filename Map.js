//class = (ES6 feature) provides a more structured and clear eay to work with object to traditionaol constructur function.
// class product{
//     constructor(model, price){
//         this.model = model,
//         this.price = price
//     };
//     this.dispayproduct=function(percentage){
//       return percentage(this.price/percentage*100)
//     }
// }
// const percentage = 10;
// const persion1 = new product("t-shirt", 100);
// console.log(persion1.price);

class Product {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    displayProduct(percentage) {
        return this.price - (this.price * percentage / 100);
    }
}

const percentage = 10;
const person1 = new Product("t-shirt", 100);
console.log(person1.displayProduct(percentage)); // Will display the price after applying the discount percentage
