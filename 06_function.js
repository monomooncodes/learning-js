// function: functions are blocks of code that can be define and exectued to perform a specific task. 

let  num = function(){
    console.log("i am a coder"):
}
num()

//type 1 function: parameterized function

let color = function(red){ // red is a parameter
    console.log(red);
}
color("green") // passing the arguments

//type 2 function: return function

let sum = function (a,b){
    return (a+b) // output :5
    
    }
    sum(1,4)
    
// type 3: Defult parameter

function susie(m,a,d=100){
    return (m+a+d) //output: 108

}
susie(1,7)

//type 4: rest function- it allowas a function to accept any number of arguments as in array.

function star(a,...b){
    console.log (a);//output:1
    console.log (b);// outbut;[2,3,4,5]
    
    }
    star(1,2,3,4,5)

    //type 5:Arrow function: it is a function that dose not implicitly include  return
// in arrow function we dont need to write classic function keyword while making a function. if  there nothing to print or we only have one line of code  then we dont need to write curly brackets and return.

let adds = (x,y)=> x+y
adds(2,5)




