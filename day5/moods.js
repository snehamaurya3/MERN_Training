let pic=document.querySelector('img')
console.log(pic)
let b1=document.querySelector('button')
console.log(b1)
let b2=document.getElementsByTagName('button')[1]
console.log(b2)
b1.addEventListener('click',function(){
    pic.src='happyEmoji.webp'
})
b2.addEventListener('click',()=>{
    pic.src='sadEmoji.png'
})




//string literal /backtics

const college='NIET'
console.log(`I am studying in ${college}`)

function add(a,b){
    console.log(a+b)
}
const add1=(x,y)=> console.log(x+y)
add(12,5)
add1(7,7)