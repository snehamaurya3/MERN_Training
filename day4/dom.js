z=document.getElementById('a')
console.log(z)

y=document.getElementById('b')
x=document.getElementById('c')
w=document.getElementById('d')
function abc(){
    z.textContent="Javascript is really tricky!!"
    console.log("Good Morning")
}
function changeColor(){
    y.style.color='yellow'
}
function size(){
    x.style.fontSize='30px'
}
function invisible(){
    // w.style.display='None'
    document.querySelector('h4').style.visibility='hidden'
}
