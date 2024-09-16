const fs = require('fs');

let fileContent,modData;

fs.readFile('./a.txt','utf-8',(err,data)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log(data);
        fileContent = data;
        modData = fileContent.replace(/\s+/g,' ');
        console.log(modData);
        
        fs.writeFile('./a.txt',modData,(err) => {
            if (err) {
                console.log("Error writing file");
            } else {
                console.log("File updated successfully!");
            }
        });
    }
})

