// array method: it provied several build in methods that allows us to perform various operations on array. they are listed below:

//push (): add  one or more elements to the end of an array and return the new length of the array
var p =[1,2,3,4,]
p.push = [5,6]
console.log(p);

//pop() : remove the last element of the array and return the element 
 var po = [1,2,3,4,5]
 var removeArray = po.pop();
 console.log(removeArray);
 console.log(po);
  
 //shift(): remove first element of the array and return the element.
  var shi = [1,2,3,4,5]
  var shiftedEliment = shi.shift();
  console.log(shi);

  //unishift(); add one more elemet to the begining to an array and return new length
  const a = ['1', '2', '3'];
// Adding elements to the beginning of the array
a.unshift('4', '5');
console.log(a); // output:[4,5,1,2,3]

//slice(): This method returns a shallow copy of a portion of an array into a new array. You can specify the start and end indices to slice

let  number = ["apple", "ball", "cat", "dog"];
// Slicing a porting of the array
let snumber =  number.slice(1, 2);
console.log(snumber);


let food = ["pizza", "burger", "pasta"]
let sfood = food.slice(1,2)
console.log(sfood);


//splice(): This method changes the contents of an array by removing, replacing, or adding elements. It can be used for various purposes.

  const colors = ['red', 'green', 'blue'];
// Removing elements (starting at index 1, remove 1 element)
const scolors = colors.splice(1, 2, );
console.log(colors); // Output: ['red', 'blue']

// Adding elements (starting at index 1, add 'yellow' and 'purple')
colors.splice(1, 0, 'yellow', 'purple');
console.log(colors); // Output: ['red', 'yellow', 'purple', 'blue']
// Replacing elements (replace 'purple' with 'violet')
colors.splice(2, 1, 'violet');
console.log(colors); // Output: ['red', 'yellow', 'violet', 'blue']
