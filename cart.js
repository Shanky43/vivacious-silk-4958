let show_list=document.getElementById("hovers")
let nav_title=document.getElementById("nav_title")


function showlist(){
show_list.style.display="none";

}
function hidelist(){
show_list.style.display="none";
}
let cart_Data = JSON.parse(localStorage.getItem("cartData"))
let cartData =document.getElementById("load_image")
let foroopsimage=document.getElementById("cartpage")
let remvbtn=document.getElementById("btn-cab-remove")


    function re_load(cart_Data){
        if(cart_Data==null||cart_Data.length==0){
            foroopsimage.innerHTML=null;
            oops()
        }
    }

function oops(){
    let oopsimage="https://www.reliancedigital.in/build/client/images/emptycart.png"
    let displayNone=document.createElement("div")
    let noneimage=document.createElement("img")
    noneimage.setAttribute("src",oopsimage)

    let cont=document.createElement("div")
    let contbtn=document.createElement("button")
    contbtn.innerText="CONTINUE SHOPPING"
    contbtn.setAttribute("class","continuebutton")
    foroopsimage.className="oopsstyling"

    function redirect(){
        window.location="./index.html"
    }
    contbtn.addEventListener("click",()=>{
        redirect()
        console.log("button is working") 
    })
   
    cont.append(contbtn)
    displayNone.append(noneimage)
    foroopsimage.append(displayNone,cont)
   }

function received(cart_Data){
    cart_Data.forEach((element,index) => {
        let productid=document.getElementById("TextWeb_Text-2")
        productid.innerText=element.prodid
        let productname=document.getElementById("TextWeb_Text-1")
        productname.innerText=element.prodname
        let productprices=document.getElementById("TextWeb_Text-8s")
        productprices.innerText="₹ "+element.prodprice
        let productmrp=document.getElementById("TextWeb_Text2")
        productmrp.innerText=element.prodmrp
        let productsave=document.getElementById("TextWeb_Text5")
        productsave.innerText=element.yousave
        let productimage=document.getElementById("image_center")
        productimage.setAttribute("src",element.prodimage)
        let pin__code=document.getElementById("pincode")
        pin__code.innerText=element.pincode[0]
        let nofitems= document.getElementById("cartItemsno")
        nofitems.innerText=cart_Data.length+"  (item)"
        let minusbtn = document.getElementById("btn-down-qty")
        let qtn=document.getElementById("qty")
        let i =qtn.value;
        console.log(i)
        minusbtn.addEventListener("click",()=>{
           let ans= i--;
          if(ans>=1){
                document.getElementById("qty").value=ans
                console.log(i)
                let total_price=+element.prodprice*ans
                productprices.innerText="₹  "+total_price.toFixed(2)
        }
        if(ans==0||ans<1){
            document.getElementById("qty").value=0
                console.log("remove button is working")
                cart_Data.splice(index,1)
                localStorage.setItem("cartData",JSON.stringify(cart_Data))
                received(cart_Data)
                re_load(cart_Data)
        }
        })

        let plusbtn=document.getElementById("btn-up-qty")
        
       
        plusbtn.addEventListener("click",()=>{
           let ans= i++;
          if(ans>=1){
                document.getElementById("qty").value=ans
                console.log(i)
                let total_price=+element.prodprice*ans
                productprices.innerText="₹  "+total_price.toFixed(2)
        }
        })


        remvbtn.addEventListener("click",()=>{
            console.log("remove button is working")
            cart_Data.splice(index,1)
            localStorage.setItem("cartData",JSON.stringify(cart_Data))
            received(cart_Data)
            re_load(cart_Data)
        })
    });
   
}

re_load(cart_Data)
received(cart_Data)



let buy_button=document.getElementById("btn-cab")

buy_button.addEventListener("click",()=>{
    setTimeout(function(){
        alert("Your order placed SucessFully")
    },1000)
})


