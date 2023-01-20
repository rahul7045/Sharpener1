const http = require('http')



const server = http.createServer((req , res)=>{
  //console.log(req.url , req.headers , req.method)
  res.setHeader('Content-Type' , 'text/html')
  const url = req.url
  if(url==='/home'){
    res.write('<html>')
    res.write('<head><title>My Home page</title></head>')
    res.write('<body>Welcome to  Home Page</body>')
    res.write('</html>')
   return  res.end()
  }else if(url==='/about'){
    res.write('<html>')
    res.write('<head><title>My About page</title></head>')
    res.write('<body>Welcome to About Page</body>')
    res.write('</html>')
   return  res.end()
  }else if(url==='/node'){
    res.write('<html>')
    res.write('<head><title>My Node page</title></head>')
    res.write('<body>Welcome to my Node js Project</body>')
    res.write('</html>')
    return res.end()
  }
  res.write('<html>')
  res.write('<head><title>My first page</title></head>')
  res.write('<body>Welcome to my Node js Project</body>')
  res.write('</html>')
  res.end()

})
server.listen(4000)