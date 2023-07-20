import url from 'url'
import querystring from 'querystring'

let url1 = 'http://www.UJAS.com/?user=UJAS&year=2023#p2';

let parsed = url.parse(url1);

let queryString = querystring.parse(parsed.query);

console.log("This is parsed URL :",parsed);

console.log("This is parsed Query String :",queryString);
