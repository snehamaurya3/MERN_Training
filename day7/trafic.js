let lights=document.querySelectorAll('.light')
console.log(lights)

let currentLight=0           //0:red    1:yellow    2:green

//initialize first light
lights[currentLight].classList.add('active')  //active makes only one light visible at the time and to use active we need to add .active in css as well
setInterval(()=>{
    changeLight()
},3000)

const changeLight = ()=>{
    //turn off the light
    lights[currentLight].classList.remove('active')
    //move to next light
    currentLight++
    //0 1 2 index only
    if(currentLight>2){
        currentLight=0
    }

    //turn on the light
    lights[currentLight].classList.add('active')
}