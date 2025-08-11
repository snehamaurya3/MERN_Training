const fruits=["🍎","🥭","🍇","🍎","🥭","🍇","🍎","🥭","🍇"]
console.log(fruits)
//let myf=document.querySelector('div')


for(i=0;i<fruits.length;i++){
    if(fruits[i]=="🍎"){
       // myf.textContent+=fruits[i]
       document.getElementById('a').textContent+="🍎"
    }
    else if(fruits[i]=="🥭"){
       document.getElementById('b').textContent+="🥭"
    }
    else{
       document.getElementById('c').textContent+="🍇"
    }
}


