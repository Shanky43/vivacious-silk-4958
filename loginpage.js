let maindivc=document.getElementById("main")
let mobileno=document.getElementById("mobno")
let proceedbtn=document.getElementById("proceed")
let message=document.getElementById("mes")
let mobilenumber;
let tempnumber=0;
let mobno=JSON.parse(localStorage.getItem("mobile_number"))
if(mobno===null&&mobileno!==tempnumber){
     mobilenumber=[];
}
proceedbtn.addEventListener("click",()=>{

    if(mobileno.value==0){
      
       message.innerText="***Mandatory fields cannot be empty***"
       message.style.color="red"
       setTimeout(function(){
        window.location="./loginpage.html"
       },2000)
       

    }
    if(mobileno.value.length>0&&mobileno.value.length<10){
        message.innerText="***Please Enter the valid number***"
        message.style.color="red"
        setTimeout(function(){
            window.location="./loginpage.html"
           },2000)
    }
    // console.log(mobileno.value)
    console.log(mobileno.value.length)
    if(mobileno.value>0&&mobileno.value.length==10&&mobileno.value!==tempnumber){
        tempnumber=mobileno.value
        mobilenumber.push(tempnumber)
        localStorage.setItem("mobile_number",JSON.stringify(mobilenumber))
        window.location="./logining.html"
    }
    console.log(tempnumber==mobileno.value)
})


   window.addEventListener("load",()=>{
    localStorage.clear();
    mobileno.value=null;

   })


