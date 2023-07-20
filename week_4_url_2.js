import * as url from 'url';

function fun1(baseURL,relativePath){
  const url1 = url.parse(baseURL,relativePath);
  console.log(url1);
}

fun1("https://www.google.com","admin/files/website")