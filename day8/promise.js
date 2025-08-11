console.log("Hii")

//JSON is the superset of object
//parse and STRINIFY

function jsonDemo(){
    const person = {
        name : "Raj",
        age : 25,
        isStudent : false,
        hobbies : ['reading','writing','swimming']
    }
    console.log(typeof(person))
    const jsonString = JSON.stringify(person)
    console.log("Stringified JSON : ",jsonString)
    console.log(typeof(jsonString))
    console.log(jsonString.toLocaleUpperCase())
    console.log(jsonString.charAt(3))
    console.log("the name is :  ",jsonString.substring(9,12))

    //convert string to object
    const parseObj=JSON.parse(jsonString)
    console.log("Parsed object is : ",parseObj)
    console.log("Parsed object is : ",parseObj.age)
    console.log(typeof(parseObj))

}


//json : key value pair both in double quotes
const person1={
    "name" : "Max",
    "age" : 22,
    "hobbies" : ["Read","Cook","sleep"]
}
