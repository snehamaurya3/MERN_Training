const bcrypt =require('bcrypt')

const salt =10

//const hash=bcrypt.hashSync('welcome',10)      //here we added 10 as a salt
const hash=bcrypt.hashSync('welcome',salt)  
//console.log("welcome")
console.log(hash)

const status = bcrypt.compareSync('welcome',hash)   //this basically check wheather the password we passed is correct or not
console.log(status)

const str ="AbCd"
const pwd=str.toLocaleLowerCase()
console.log(pwd)