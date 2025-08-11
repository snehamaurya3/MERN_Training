console.log(typeof(console))


//object ==key value pairs
//curly brackets
//values in '' / " " except for number, null and boolean

const person=[{
    name:'Sneha',
    age:21,
    isStudent:true,
    hobbies: ["reading","coding","cooking"],
    nationality:"Indian",
    gender:"Female"
}, {
    name:"Raj",
    hobbies:["sleeping","cycling"],
    nationality:"Indian",
    gender:"male"

}]
console.log(person)
console.log(typeof(person))

// document.querySelector('h2').textContent+=person.name
// document.querySelectorAll('h2')[1].textContent+=person.hobbies[1]
// document.querySelectorAll('h2')[2].textContent+=person.nationality


document.querySelector('h2').textContent+=person[1].name
document.querySelectorAll('h2')[1].textContent+=person[1].hobbies[0]
document.querySelectorAll('h2')[2].textContent+=person[1].nationality




