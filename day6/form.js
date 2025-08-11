let myData=document.getElementById('f')
console.log(myData)    //print entire form in console
myData.addEventListener('submit',(e)=>{
    e.preventDefault()
    let pass=document.getElementById('p').value
    console.log(pass)
    if(pass.length<6){
        alert("Too small password")
    }else if(pass.length>15){
        alert("to big password")
    }
    else{
       // window.location.href='welcome.html'
       sessionStorage.setItem('isLoggedIn','true')
       //window.location.href='welcome.html'
       window.open('welcome.html','_blank') //opens in new tab
    }
})
