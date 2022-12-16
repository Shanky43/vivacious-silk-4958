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

function getData(data) {
    let cartdetails;
    data.forEach((element) => {
        cartdetails = element;
        newdata.push(cartdetails)
    });
    
    addtocartbtn.addEventListener("click", () => {
        localStorage.setItem("cartData", JSON.stringify(newdata))
    });
    console.log(newdata)
}
getData(arr)











