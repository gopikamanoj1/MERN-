const http=require ('http')
const port=3010
const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type',"text/plain")
    res.end('hello world')
});

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})