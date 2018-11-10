const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello Worldccc linda2 ')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();

const puppeteer = require('puppeteer');
function kiusi(){
  (async () => {
  console.log('-----2222 kiusi00000-----------');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  
  const page = await browser.newPage();
  await page.goto('https://vaasvn.github.io/luijun/bbb.html');  
     
  console.log('----222 XONG0-222-------');
  setTimeout(async () => await await page.close(), 190000);
  setTimeout(async () => await browser.close(), 195000);
  console.log('----222 XONG--------');
  
  })();
}

function f() { 
    console.log('-222222 .  111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 200000 ); 
    console.log('--222222 .  tttttttttt--') 
}



f();
