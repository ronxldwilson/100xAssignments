
let count = 0;

for (let i=0; i<100000000; i++){
    setTimeout(()=>{
        console.log(count++);    
    },1000*i);
}


