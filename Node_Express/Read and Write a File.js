 const fs=require('fs')
 fs.readFile('input.txt','utf8', (err,data)=>{
    if(err){
        console.log(err);
        return 
    }

    fs.writeFile('output.txt',data,(err)=>{
        if(err){
            console.log(err,"kki");
            return
        }
        console.log('written');
     })
 })
