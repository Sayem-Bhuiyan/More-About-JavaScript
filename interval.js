console.log(1)
console.log(2)
let num = 0;
const intervalId = setInterval(() => {
    // num++;
    console.log(++num)
    if(num ===10){
        clearInterval(intervalId)
    }
}, 1000)

const timeOutId = setTimeout(() => {
    console.log('lazy logged');
}, 4000)
console.log(4)
console.log(5)
console.log(6)