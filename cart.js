let show_list=document.getElementById("hovers")
let nav_title=document.getElementById("nav_title")


function showlist(){
show_list.style.display="   ";

}
function hidelist(){
show_list.style.display="none";
}
let cart_Data = JSON.parse(localStorage.getItem("cartData"))
let cartData =document.getElementById("load_image")

function received(cart_Data){
    cart_Data.forEach((element) => {
       
        
        let div=document.createElement("div")
        div.setAttribute("class","newdivinto")

        let proimage=document.createElement("img")
        proimage.setAttribute("src",element.prodimage)



        //  div.append(proimage)
        cartData.append(div)

    });
}
received(cart_Data)







