const fruits=['apple','banana','mango','grapes']
console.log(fruits)
x=fruits.pop()
console.log(x)
console.log(fruits)
fruits.push('watermelon')
console.log(fruits)
fruits.shift() //remove the first element from the array
console.log(fruits)
fruits.unshift('kiwi') //adds element in starting
console.log(fruits)
z=fruits.reverse()
console.log(z)

console.log(Math.max(4,5,6,8,2,5,9))
console.log(Math.PI)
console.log('Hard coded num : 0.6067870577728914')
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.random()*100)
console.log(Math.ceil(0.6067870577728914 *10))
console.log(Math.floor(0.6067870577728914 *10))

function myOtp(){
    let otp=' '
    for(i=0;i<6;i++){
        otp+=Math.floor(Math.random()*10)
    }
    console.log(otp)
    document.querySelector('span').textContent=otp
}