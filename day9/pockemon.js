//https://pokeapi.co/api/v2/


// function myData(){
//     let pImage=document.getElementById('poke').value.toLowerCase()
//     console.log(pImage)


// fetch(`https://pokeapi.co/api/v2/pokemon/${pImage}`)
//     .then(response=>{
//         if(!response.ok){
//             //throw new Error(`Pockemon not found :${pImage}`)
//             alert((`Pockemon not found :${pImage}`))
//         }
//         return(response.json())
//     })
//     //.then(res=>res.json())
//    // .then(data=>console.log(data.name))
//    .then(abc=>{console.log(abc.sprites.front_default)
//    let photo=document.getElementById('p')
//    photo.src=abc.sprites.front_default
//    photo.style.display='block'
//    })
//     .catch(error=>console.log(error))
// }

async function myData(){
let pImage=document.getElementById('poke').value.toLowerCase()
console.log(pImage)


let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pImage}`)
   try{
        if(!response.ok){
            //throw new Error(`Pockemon not found :${pImage}`)
            alert((`Pockemon not found :${pImage}`))
        }
        return(response.json())
    
    //.then(res=>res.json())
   // .then(data=>console.log(data.name))
   .then(abc=>{console.log(abc.sprites.front_default)
   let photo=document.getElementById('p')
   photo.src=abc.sprites.front_default
   photo.style.display='block'
   document.getElementById('poke').value=""
   })
}catch (error){
    console.error("Error is " + error.message)
}finally{
    document.getElementById('poke').value=""          //clear all placeholder text after execution
}
} 