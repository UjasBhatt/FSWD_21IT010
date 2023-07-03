function newfun()
{
    console.log("print");
}
async function letsetfunction() {
    await setTimeout(3000);
    newfun();
}
//task 1decaliring variable usinglet var  const

function myfunction(){
let newvar1;
var newvar2;
const newvar3=3;
newvar1 = 1;
newvar2=2;
    //newvar3=4;//ERROR

console.log(newvar1);
console.log(newvar2);
console.log(newvar3);

}

myfunction();


//Write a function that takes two numbers as arguments and returns their sum, difference,
// product, and quotient using arithmetic operators.


function mysum(a,b){
return a+b;

}
function mydiff(a,b){
    return a-b;

}
function mymul(a,b){
return a*b;
}
function mydiv(a,b){
return a/b;
}
                                        
console.log("sum is "+mysum(1,2));
console.log(`sum is ${mysum(1,2)}`);
console.log("diff is "+mydiff(5,1));
console.log("mul is "+mymul(5,1));
console.log("div is "+mydiv(5,2));


//Write a program that prompts the user to enter their age. Based on their age, display
// different messages:
// ○ If the age is less than 18, display "You are a minor."
// ○ If the age is between 18 and 65, display "You are an adult."
// ○ If the age is 65 or older, display "You are a senior citizen."

function agesay(a){
if(a<18)
alert("you are minor");
else if(a>65)
alert("you are citizen");
else
alert("you are adul")
}

let a = prompt("enter number");


agesay(a);





// Write a function that takes an array of salary as an argument and returns the min/max
// salary in the array.

function mynewfunction(arr){
    let min=arr[0];
    let max=arr[0];
    for(i in arr)
    {
        if(arr[i]<min)
        min=arr[i];
        if(arr[i]>max)
        max=arr[i];
        // console.log(arr[i])
    }
    console.log(min + " is min");
    console.log(max + " is max");

}

mynewfunction([1,2,3])

/* function test() {
    var x = 10;
  }
  
  test();
  console.log(x); // Output: 10

function test() {
    let x = 10;
  }
  
  test();
  console.log(x); // ReferenceError: x is not defined

function test() {
    const x = 10;
  }
  
  test();
  console.log(x); // ReferenceError: x is not defined
   */

//Create an array of your favorite books. Write a function that takes the array as an
// argument and displays each book title on a separate line.

let favrobook = ["book 1","book 2","book 3"];
function myfavfunction(arr){
    for(i in arr)
    console.log(arr[i] +"\n");
}
myfavfunction(favrobook);

function print123(){
document.getElementById(1).innerText="hello";
}

document.getElementById(1).addEventListener( "click" , print123)

//Write a function that takes a number as an argument and throws an error if the number
// is negative. Handle the error and display a custom error message.

function newfunction(a){

if(a<0)
throw "negative number"
}
try{
newfunction(-10);
}
catch(err)
{console.log("error is "+err)}


// Write a function that uses setTimeout to simulate an asynchronous operation. Use a
// callback function to handle the result.

function simulateAsyncOperation(callback) {
    // Simulating some async task that takes 2 seconds to complete
    setTimeout(function() {
      // Assuming the async task is successful, we pass the result to the callback
      const result = 'Async operation completed';
      callback(null, result);
    }, 2000);
  }
  
  // Example usage
  console.log('Start');
  
  simulateAsyncOperation(function(error, result) {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Result:', result);
    }
  });
  
  console.log('End');
  

