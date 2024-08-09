// arr = ["bangalore","mumbai","kolkata","Rajasthan"];
// function City(cityName){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const silicon = true;
//             if(silicon){
//                 resolve(cityName);
//             }
//             else{
//                 reject("Sorry");
//             }
//         },2000);
//     });
// }
// const citys = async()=>{
//     arr.map(async (item,index)=>{
//         const task = await City(item);
//         console.log(task);
//     });

// }
// citys()

arr = ["bangalore","mumbai","kolkata","Rajasthan"];
function City(cityName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const silicon = true;
            if(silicon){
                resolve(cityName);
            }
            else{
                reject("Sorry");
            }
        },2000);
    });
}
const citys = async()=>{
    arr.map(async (item,index)=>{
        const task = await City(item);
        console.log(task);
    });
}
citys()