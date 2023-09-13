// factrioal of user inputed number using arrow function.
let factrioal = (n)=>{
if (n===0||n===1){ // === equratory operator
    return 1;
}
else {
    return n*factrioal(n-1)
    }

}
const userInput = prompt("enter a number")

let num = parseInt(userInput)
if(!isNaN){
    if(num<0)
console.log("neg number is not factorize")
}
else{
    const result = factrioal(num)
    console.log (`the factioal of ${num} is ${result}`)
}





