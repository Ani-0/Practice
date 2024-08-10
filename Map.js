//For Each Loop function
const aniket = [1, 2, 3, 4, 5];
function double(element){
   console.log(element*3);
}
aniket.forEach(double);

const number = [1, 2, 3, 4, 5];
//.map() function
function numbers(element){
    return Math.pow(element, 2);
}
const total = number.map(numbers);
console.log(total);

const Citys = ["Banglore", "Mumbai", "Delhi", "Gurugu"];
function totalCity(City){
    return City;
}
const NameofCity = Citys.map(totalCity);
console.log(NameofCity);

const country = ["India", "Australia", "USA", "UK"];
function totalCountry(NameofCountry){
    return NameofCountry;
}
const contrys = country.map(totalCountry);
console.log(contrys);