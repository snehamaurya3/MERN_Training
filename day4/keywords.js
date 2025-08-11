a=true      //hosting : declare variables on top and then use them
console.log(a)
a=22
console.log(a)
//var is a global scope and it can be redeclared
console.log(b)
var b='college'
console.log(b)

//let is lexical or fuction scoped and we cannot redeclare it with let keyword

//console.log(course)
let course="Full stack"
console.log(course)

//const is constant : no change 

const h="sunday"
console.log(h)

let age=19
if(age<18){
    console.log("cannot vote")
}
else{
    console.log("can vote")
}

let line=document.querySelector('h1')
console.log(line)
function mytext(){
    if(line.textContent=='I am learning keywords'){
        line.textContent='Javascript is interesting'
    }
    else{
        line.textContent='I am learning keywords'

    }
}