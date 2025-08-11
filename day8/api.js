// Fetch & promise + api
//promise denotes something that will hapen in future
//pending state
//success / failure
//then / catch

console.log(Promise)
let p=new Promise((resolve,reject)=>{
    resolve("Failure not good")
})
p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
console.log(p)

//simple promise in action

let myCal = new Promise((resolve,reject)=>{
    let num=3+2
    if(num==5){
        resolve("success")
    }else{
        reject("failure")
    }
})

myCal
    .then((message)=>{
        console.log("good news",message)
    }).catch((error)=>{
        console.error("oh no",error)
    });


    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>res.json())
        .then(data =>{
            document.getElementsByTagName('h2')[0].textContent += data[2].name
            document.getElementsByTagName('h2')[1].textContent += data[2].email
})

    
