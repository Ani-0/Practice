//Map fuction;
const country = ["Australia", "Russia", "India", "Canada"];
function dispplaycountry(NameofCountry){
    return(NameofCountry);
}
const x = country.map(dispplaycountry);
console.log(x);

//forEatch function;

const number = [1, 2, 3, 4, 5];
function element(numbers){
    console.log(numbers)
}
number.forEach(element);

//filter Method

const countingNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayNumber(evennumber){
    return evennumber %2 === 0;
}
const Evennumber = countingNumber.filter(displayNumber);
console.log(Evennumber);

//Reduce Method 

const spacialnumber = [1, 2, 3, 4, 5]
function displaynumber(accumulater, elementer){
    return accumulater + elementer;
}
const y = spacialnumber.reduce(displaynumber);
console.log(y);