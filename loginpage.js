let maindivc=document.getElementById("main")
let mobileno=document.getElementById("mobno")
let proceedbtn=document.getElementById("proceed")
let message=document.getElementById("mes")

proceedbtn.addEventListener("click",()=>{

    if(mobileno.value==0){
      
       message.innerText="***Mandatory fields cannot be empty***"
       message.style.color="red"

    }
    if(mobileno.value.length>0&&mobileno.value.length<10){
        message.innerText="***Please Enter the valid number***"
        message.style.color="red"
    }
    console.log(mobileno.value)
    console.log(mobileno.value.length)
    if(mobileno.value>0&&mobileno.value.length==10){
        window.location="./logining.html"
    }
})
