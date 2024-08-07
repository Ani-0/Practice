const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("fahrenheit");
const Celsius = document.getElementById("Celsius");
const result =document.getElementById("result");
function convert(){
    let temp = 0 ;
    if(fahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.innerHTML = temp.toFixed(2) + "°F"
    }
    else if(Celsius.checked){
       temp = Number(textbox.value);
       temp = (temp - 32)* 5 / 9;
       result.innerHTML = temp.toFixed(2) + "°C"
    }
    else{
        result.innerHTML=("select the unit");
    }
}