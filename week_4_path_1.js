import path from 'path';

const filename = path.basename('/Users/21IT010/demo_path.js');
const filename2 = path.basename('/Users/21IT010/demo_path.js');

console.log(filename);
console.log(filename2);

if(filename.toString() === filename2.toString()){
    console.log("Same File Name");
}else{
    console.log("File Name Not Same");
}