
let count = 0;

setInterval(()=>{
    const date = new Date();
    console.log(count++ + " "+date.getTime());
},1000);