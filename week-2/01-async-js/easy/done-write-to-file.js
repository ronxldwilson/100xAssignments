const fs = require('fs');

fs.readFile('./a.txt',"utf-8",(err, data)=>{
    if(err)
        console.log("Error");
    else 
        console.log(data);
})

setTimeout(()=>{
    fs.writeFileSync('./a.txt',"Hello Works")
    },1000);


fs.readFile('./a.txt',"utf-8",(err, data)=>{
    if(err)
        console.log("Error");
    else 
        console.log(data);
})
