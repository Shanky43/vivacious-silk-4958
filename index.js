
let arr=["https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx",
"https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU",
]

let value=0
setInterval(() => {
    let img =document.createElement("img")
    img.setAttribute("src", arr[value] );
    img.setAttribute("width", "100%")
    img.setAttribute("height","100%")

    document.getElementById("imagecenter").innerHTML=null;
    document.getElementById("imagecenter").append(img)
    value++
    if(value==arr.length) value=0;
}, 3000);

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    loop: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });   
// for watches for home page
let container=document.getElementById("prodslideimages")
let fetchedData=[]
if(fetchedData==null){
    fetchedData=[]
}


fetch("./data/watches.json")
.then((responseObject)=>{
    return responseObject.json();
})
.then((acctualData)=>{
fetchedData=acctualData
console.log(fetchedData)
displayProducts(fetchedData);
})
.catch((error) =>{
    console.log(error);
  })

  function displayProducts(data) {
    container.innerHTML = null;
    data.forEach((element) => {
      let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",element.image);
        let title = document.createElement("h4");
        title.innerText = element.title;
        let price = document.createElement("p");
        price.innerText = "Dealprice"+" : "+element.dealprice;
        let yoursave = document.createElement("p");
        yoursave.innerText = "You save"+" : " +element.yousave;
        let mrp = document.createElement("p");
        mrp.innerHTML ="M.R.P"+" : " + element.mrp;
        let offbtn=document.createElement("button")
        offbtn.setAttribute("class","offerbutton")
        offbtn.innerText ="offers availabe"
        card.append(image,title,price,yoursave,mrp,offbtn);
        container.append(card);
      });
    }

    const swiper1 = new Swiper('.swiper1', {
      
        loop: true,
       
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
      
      });   
    










