
let CardDetails = [{id:1, img:"./images/samsung-galaxy.jpg", name:"Samsung", Price: 200, quantity: 1, like : false}, 
    {id:2, img:"./images/realme.jpg", name:"Realme", Price:100, quantity: 1, like : false},
    {id:3, img:"./images/redme.jpg", name:"Redmi", Price:150, quantity: 1, like : false}, 
    {id:4, img:"./images/iqoo.jpg", name:"IQOO", Price:200, quantity: 1, like : false},
];

let categoryDetails = [
    {img:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"},
    {img:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"},
    {img:"https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"},
   
    
]



function displayCard(){
    let cards = document.getElementById("duplicating").innerHTML = CardDetails.map((value, index) =>{
        let {id, img, name, Price} = value;
        
         return`<div class="col-md-6 col-xl-3 mt-5" id="btnn">
                    <div class="card ">
                        <div class="card-head ms-auto me-auto">
                            <img src="${img}" alt="Mobiles-1" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                            <div class="d-flex justify-content-around align-items-center"> 
                                <h5 class="card-title">${name}</h5>
                                <i class="${value.like ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}" id="bg_color${index}" onClick="color(${index})"></i>
                            </div>
                            <p class="card-text">₹${Price}</p>
                            <a href="#btnn" class="btn btn-primary" onClick="addCardData(${index})">Add To Cart</a>
                        </div>
                    </div> 
                </div>`
        
    }).join("");
    
}


function color(bg) {
    let bg_col = document.getElementById(`bg_color${bg}`);

    // if(CardDetails[bg].like == false){
    //     CardDetails[bg].like = true;
    //     bg_col.style.color = "red";
    // }
    // else{
    //     CardDetails[bg].like = false;
    //     bg_col.style.color = "black";
    // }
    
     CardDetails = CardDetails.map((value, index) =>{
        return index === bg ? {...value, like : !value.like} : value;
    })

    console.log(CardDetails);

    displayCard();
    
    
}






let colDuplicate = document.getElementById("categoriesdup").innerHTML = categoryDetails.map((value, index) =>{ 
    let {img} = value;
    
    return `
            <div class="row"id="colDuplicate-${index}" >
                <div class="col-sm-4 col-md-2" >
                    <img src="${img}" class="mx-auto d-block img-fluid" alt="..."">
                </div>
                <div class="col-sm-4 col-md-2" >
                    <img src="${img}" class="mx-auto d-block img-fluid" alt="..."">
                </div>
                <div class="col-sm-4 col-md-2" >
                    <img src="${img}" class="mx-auto d-block img-fluid" alt="..."">
                </div>
                <div class="col-sm-4 col-md-2" >
                    <img src="${img}" class="mx-auto d-block img-fluid" alt="..."">
                </div>
                <div class="col-sm-4 col-md-2" >
                    <img src="${img}" class="mx-auto d-block img-fluid" alt="..."">
                </div>
                <div class="col-sm-4 col-md-2" >
                    <img src="${img}" class="mx-auto d-block img-fluid" alt="..."">
                </div>
                
            </div>
            `
}).join("");



let plusButton = document.getElementById("plusBtn");
let minusButton = document.getElementById("minusBtn");
let num = document.getElementById("nos");





let cardData = [];
function addCardData(ind){
    

    let temp = cardData.some((value , index) => {
         return index === ind;
    })
    let temp1 = cardData.find((value , index) => {
         return index === ind;
    })
        if (temp1) {
            temp1.quantity++;
        }
        else{
            
        cardData.push(CardDetails[ind]);
        }
        
  displayCardDetails();
}

function displayCardDetails() {
    // let g_total =  cardData.map((value, index) =>{
    //     return value.Price * value.quantity;
    // })

    // let sum = 0;

    // for (let i = 0; i < g_total.length; i++) {
    //     sum = sum + g_total[i];
        
    // }
     
    // console.log(g_total.length);
    

    // console.log(sum);

    let final_Total = 0;

    
    

    document.getElementById("addedToCarts").innerHTML = cardData.map((value, index)=>{
        let total = value.Price * value.quantity;
        final_Total += total;
        return ` <div class="container-fluid mt-3">
                    <div class="row align-items-center border " id="addedProducts">
                        <div class="col-2">
                            <img src="${value.img}" class="img-fluid" alt="...">
                        </div>
                        <div class="col-2">
                            <h6>${value.name}</h6>
                            
                        </div>
                        <div class="col-4">
                            <button class="btn" onclick="increaseQuantity(${value.id}, ${1})"  id="plusBtn">+</button>
                            <span id="nos">${value.quantity}</span>
                            <button class="btn"onclick="increaseQuantity(${value.id}, ${-1})"   id="minusBtn">-</button>
                            
                        </div>
                        <div class="col-2">
                            <h6>Price: ${total}</h6>
                        </div>
                        <div class="col-2 ">
                            <button class="btn-close" id="closebtn"></button>
                        </div>
                    </div>
                </div>
                 `
    }).join("");

    document.getElementById("overALL_Total").innerHTML = `Over All = $${final_Total}`;
}

function increaseQuantity(userId , count) {
      console.log(userId,count)

     let temp = cardData.find((value, index)=>{
        return value.id === userId;
      })
      console.log(temp);
      if (temp) {
        temp.quantity = Math.max(1,temp.quantity += count);
      }
      displayCardDetails();



      
}




displayCard();



