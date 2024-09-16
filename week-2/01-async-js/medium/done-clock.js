let count =0;

setInterval(()=>{
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let half = checkHalf(hour);
    console.log(count++ + " "+hour+ " "+minute+ " "+seconds+" "+half);
},1000);

function checkHalf(hour){
    if(hour > 12)
        return "PM";
    else 
        return "AM";
}