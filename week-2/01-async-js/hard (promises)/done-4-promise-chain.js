/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {    
    return new Promise(function(resolve){
        setTimeout(()=>{resolve();},1000*t);
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{resolve();},1000*t);
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{resolve();},1000*t);
    })
}

function calculateTime(t1, t2, t3) {
    let date = new Date();
    let startTime = date.getTime();

    return wait1(t1)
        .then(()=>{
            return wait2(t2);
        })
        .then(()=>{
            return wait3(t3);
        }).then(()=>{
            const date1 = new Date();
            let endTime = date1.getTime();
            // console.log(endTime - startTime)
            let difference = endTime - startTime
            return difference;
        })
}

module.exports = calculateTime;
