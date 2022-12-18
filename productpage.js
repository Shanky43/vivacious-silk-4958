let show_list = document.getElementById("hovers")
let nav_title = document.getElementById("nav_title")


function showlist() {
    show_list.style.display = "block";

}
function hidelist() {
    show_list.style.display = "none";
}

let arr = [
    {
        prodimage:"https://www.reliancedigital.in/medias/Usha-QH-3002-Radiators-490784083-i-1?context=bWFzdGVyfGltYWdlc3w3NDA2ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDhmL2hkOC85NDE2NTAxNzIzMTY2LmpwZ3wzYWE1ZDUxMjc2NjhhZGE0ZDQxZDU0N2RmZWFhNGYwZmY2MDJiNWU3Y2Q3OTY2MWM0YTdmNjE5OGFjMGVhMzQ5",
        prodname: "Usha Quartz QH 3002 Fan-based Heater with Low Power Consumption",
        prodid: "490784083",
        prodprice: "₹1,249.00",
        prodmrp: "₹1890  Inclusive of all taxes",
        yousave: "34%(₹641)",
    }
];

let addtocartbtn = document.getElementById("add_to_cart_main_btn")
let newdata=[]
let cart_Data = JSON.parse(localStorage.getItem("cartData"))
let pincd=document.getElementById("RIL_PDPInputPincode");
let pincode_=document.getElementById("pincode_")
let pinvalue1=[];

pincd.addEventListener("input",()=>{
   let  pinvalue=pincd.value;
    pin_code(pinvalue)
function pin_code(pinvalue){
    
   if(pinvalue>=560002&&pinvalue<=562149&&pinvalue.length==6){
    setTimeout(function(){
     pincode_.innerText="COD available";
     pincheck(pinvalue)
    },2000)
    }else
    if(pinvalue>!560001&&pinvalue>!562150&&pinvalue.length==6){
     setTimeout(function(){
         pincode_.innerText="COD not available";
         pincheck(pinvalue)
        },2000)
    }
    if(pinvalue==null||pinvalue==undefined&&pinvalue.length!=6||pinvalue.length==0){
        pincode_.innerText=" ";
        pincheck(pinvalue)
        pin_code(pinvalue)
    }
}
})
function pincheck(pinvalue){
    if(pinvalue.length==6){
        pinvalue1.push(+pinvalue)
        if(pinvalue1.length>1){
            pinvalue1.splice(0,1)
        }
        console.log(pinvalue1)
    }else if(pinvalue.length==6||pinvalue.length==0||pinvalue==null||pinvalue==" " |pinvalue==undefined){
       
        pinvalue1.length=0;
        console.log(pinvalue1)
        pin_code(pinvalue)
        
     
    }
}
  
addtocartbtn.addEventListener("click", () => {
      
    localStorage.setItem("cartData", JSON.stringify(pinvalue1))
});

function getData(data) {
    let cartdetails;
    data.forEach((element) => {
        cartdetails = element;

        newdata.push({...cartdetails,pincode:pinvalue1})
    });
    
    addtocartbtn.addEventListener("click", () => {
      
        localStorage.setItem("cartData", JSON.stringify(newdata))
    });
    console.log(newdata)
}
getData(arr)












