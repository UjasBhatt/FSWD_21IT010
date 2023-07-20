import path from 'path';

const fileext = path.extname('/Users/21IT010/demo_path.js');
const fileext2 = path.extname('/Users/21IT010/demo_path.html');

console.log(fileext);
console.log(fileext2);

if(fileext.toString() === fileext2.toString()){
    console.log("Same File Extension");
}else{
    console.log("File Extension Not Same");
}