const fruit='apple'

switch(fruit){
    case "banana":
        console.log("yellow fruit")
        break;
    case "apple":
        console.log("red fruit")
        break;
    case "mango":
            console.log("green fruit")
            break;
    default:
        console.log("unknown fruit")
}

let box= document.querySelector('div')
console.log(box)
function colr(){
    const mycolor = box.style.background
    switch (mycolor){
        case 'red':
            box.style.background="pink"
        break;
        case 'pink':
            box.style.background="darkgreen"
        break;
        case 'darkgreen':
            box.style.background="darkblue"
        break;
        case 'darkblue':
            box.style.background="black"
        break;

        default:
            box.style.background="red"
        break;
    }
    
}