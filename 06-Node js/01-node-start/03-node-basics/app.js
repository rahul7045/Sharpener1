const http = require('http')
const fs = require('fs')


const server = http.createServer((req , res)=>{
  //console.log(req.url , req.headers , req.method)
  res.setHeader('Content-Type' , 'text/html')
  const url = req.url
  const method = req.method
  // if(url==='/home'){
  //   res.write('<html>')
  //   res.write('<head><title>My Home page</title></head>')
  //   res.write('<body>Welcome to  Home Page</body>')
  //   res.write('</html>')
  //  return  res.end()
  // }else if(url==='/about'){
  //   res.write('<html>')
  //   res.write('<head><title>My About page</title></head>')
  //   res.write('<body>Welcome to About Page</body>')
  //   res.write('</html>')
  //  return  res.end()
  // }else if(url==='/node'){
  //   res.write('<html>')
  //   res.write('<head><title>My Node page</title></head>')
  //   res.write('<body>Welcome to my Node js Project</body>')
  //   res.write('</html>')
  //   return res.end()
  // }


  if(url==='/'){
    const data = fs.readFileSync('./message.txt', 'utf8');
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write(`<body><form action="/message" method="POST"><div>${data}</div><input type="text" name="message" /><button type="submit" >Submit</button></form></body>`)
    res.write('</html>')
    return res.end()
  }

  if(url==='/message' && method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk)
    })
    req.on('end',()=>{
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(message)
      fs.writeFileSync('message.txt' , message)
    })
    fs.writeFileSync('hello.txt', "DUMMY")
    res.statusCode= 302;
    res.setHeader('Location', '/')
    return res.end()
  }

  res.write('<html>')
  res.write('<head><title>My first page</title></head>')
  res.write('<body>Welcome to my Node js Project</body>')
  res.write('</html>')
  res.end()

})
server.listen(4000)