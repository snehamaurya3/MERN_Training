console.log("good morning")
setTimeout(()=>{
// console.log("good night")
// })
console.log("good night")
},3000)

// setInterval(()=>{
//     console.log("Tea time")        //the program will crash and will not stop we ue timer to slow it down
// })

const x=setInterval(()=>{
    console.log("Tea time")
},2000)

setTimeout(()=>{
    console.log("No more Tea")
    clearInterval(x)
},10000)

console.log("good afternoon")




