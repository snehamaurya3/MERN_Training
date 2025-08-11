console.log('Good Morning')
const city=['delhi','noida','pune','goa','chandigarh']
console.log(city[3])
let z=city.pop()
console.log(city)
console.log(z)
city.push('amritsar')
console.log(city)
let a=city.shift()
console.log(city)
console.log(a)
city.unshift('mysuru')
console.log(city)
console.log(city.reverse())
city[1]='kokkata'
console.log(city)

let myCity=document.querySelector('h2')
console.log(myCity)
myCity.textContent+=city[4]
