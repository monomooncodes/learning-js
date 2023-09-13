// hoisting is the default behaviour of javascript. It basicially is something which helps us change the sequence of code. There are two types of Hoisting :  variable hoisting and function hoisting 
console.log(name) 
var name = "Some_name"

//this is variable hoisting 
// if we see output of this , we will see it is undefined because the variable name output : name , has been printed first then the variable name has been declared 

some();
function some(){
  console.log("Haha I can be hoisted ")
}

// here this code will be run as it is functional hoisting 
