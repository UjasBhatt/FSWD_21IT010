require('dotenv').config();

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"

//task2 1
console.log('The value of User Id is:',process.env.USER_ID);
console.log('The value of User Key is:',process.env.USER_KEY);
console.log('The value of Mode is:',process.env.NODE_ENV); 

// task2 2
function value(value1){
    console.log(process.env[value1]);
}

const value1 = process.argv[2];

value(value1);

//task2 3
if(process.env.NODE_ENV == 'development1'){
    console.log('The value of User Id is:',process.env.USER_ID);
    console.log('The value of User Key is:',process.env.USER_KEY);
    console.log('The value of Mode is:',process.env.NODE_ENV); 
}else{
    console.log('Can\'t find the value of User');
}