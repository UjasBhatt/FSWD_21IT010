import * as url from 'url';
import * as readline from 'node:readline';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }); 

  r1.question('Enter a URL: ', (inputUrl) => {
    const parsedUrl = url.parse(inputUrl, true);

    console.log('Parsed URL details:');
    console.log(`Protocol: ${parsedUrl.protocol}`);
    console.log(`Host: ${parsedUrl.host}`);
    console.log(`Path: ${parsedUrl.pathname}`);

    if (parsedUrl.query) {
        console.log('Query Parameters:');
        for (const [key, value] of Object.entries(parsedUrl.query)) {
          console.log(`${key}: ${value}`);
        }
      } else {
        console.log('No query parameters found.');
      }
    r1.close();
});