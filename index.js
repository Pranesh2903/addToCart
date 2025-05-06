
let CardDetails = [{ id: 1, img: "./images/samsung-galaxy.jpg",
                            subimg : ["./images/samsung-galaxy-m06-5g-right-side.jpg",
                                        "/images/samsung-varients.jpg",
                                        "./images/sansung-side.jpg"], name: "Samsung", Price: 200, quantity: 1, like: false, maxQty: 2 },

{ id: 2, img: "./images/realme.jpg",
             subimg:  ["./images/realme-spec.jpg",
                        "/images/realme-narzo-n61-vareints.jpg",
                        "./images/realme-back.jpg"] , name: "Realme", Price: 100, quantity: 1, like: false, maxQty: 3 },

{ id: 3, img: "./images/redme.jpg", subimg: ["./images/redmi-spec.jpg",
                                             "/images/redmi-varients.jpg",
                                            "./images/Xiaomi-Redmi-A4-back.jpg"], name: "Redmi", Price: 150, quantity: 1, like: false, maxQty: 2 },


{ id: 4, img: "./images/iqoo.jpg", subimg: ["./images/iqoo-spec.jpg",
                                            "/images/iQOO-Z10-varients.jpg",
                                            "./images/iqoo-back.jpg"], name: "IQOO", Price: 200, quantity: 1, like: false, maxQty: 3 }
];


localStorage.setItem("viewCard",JSON.stringify(CardDetails));



let categoryDetails = [
    { img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg" },
    { img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg" },
    { img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg" },


]

let usdetails = JSON.parse(localStorage.getItem("details"));

console.log(usdetails[0]);

document.getElementById("username").innerHTML = usdetails[0];

function displayCard() {
    let cards = document.getElementById("duplicating").innerHTML = CardDetails.map((value, index) => {
        let { id, img, name, Price} = value;

        return `<div class="col-md-6 col-xl-3 mt-5" id="btnn">
                    <div class="card ">
                        <div class="card-head ms-auto me-auto">
                            <img src="${img}" id="main-img-${index}"alt="Mobiles-1" class="img-fluid">
                        </div>
                        <div class="card-body text-center">
                        <div class="row mt-3 d-flex justify-content-between">
                            
                            ${value.subimg.map((v,i)=>{
                                console.log(v);
                                
                                
                                return `<div  onclick="changeImg(${index}, ${i})"> 
                                <img src="${v}" class="img-fluid  subimg" id="subimages-${i}">
                                    </div>`
                            }).join("")
                        }
                        </div>
                            <div class="d-flex justify-content-around align-items-center mt-4"> 
                                <h5 class="card-title">${name}</h5>
                                <i class="${value.like ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}" id="bg_color${index}" onClick="color(${index})"></i>
                            </div>
                            <p class="card-text">₹${Price}</p>
                            <a href="#btnn" class="btn btn-primary" onClick="addCardData(${index})">Add To Cart</a>
                            <button class="btn btn-primary" onClick="viewCardDetails(${value.id})">View Item</button>
                        </div>
                    </div> 
                </div>`

    }).join("");

}


function changeImg(parIndex, childIndex) {
    // console.log(parIndex, childIndex);
    let mainimg = document.getElementById(`main-img-${parIndex}`);
    let subimages = document.getElementById(`subimages-${childIndex}`).src;
    // .src=document.getElementById(`subimages-${childIndex}`).src;
    console.log(subimages);
    
    
}

function viewCardDetails(productId){


    let reDirectPage = JSON.parse(localStorage.getItem("viewCard"));
    
    let Products = reDirectPage.find((value) => value.id == productId);
    
    localStorage.setItem("productId",productId);

    if (Products) {
        // alert(`directed to next page ${Products.id}`)
        window.location.href = "./CardDetails.html";
    }
    else{
        alert("not found");
    }
    




    // window.location.href = "./CardDetails.html"

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

    CardDetails = CardDetails.map((value, index) => {
        return index === bg ? { ...value, like: !value.like } : value;
    })

    console.log(CardDetails);

    displayCard();


}






let colDuplicate = document.getElementById("categoriesdup").innerHTML = categoryDetails.map((value, index) => {
    let { img } = value;

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





// let card = ;

// console.log(card);


let cardData = JSON.parse(localStorage.getItem("cardData")) || [];


function count() {
    let totCount = cardData.reduce((acc, curr) => {
        return acc += curr.quantity;
    }, 0)
    document.getElementById("count").innerHTML = totCount;
}



function addCardData(ind) {

    let addedItem = CardDetails[ind];

    let alreadyAdded = cardData.find((value, index) => {
        return value.id === addedItem.id;
    })
    //     let temp1 = cardData.find((value , index) => {
    //         return index === ind;
    //    })






    if (alreadyAdded) {
        if (alreadyAdded.quantity < addedItem.maxQty) {
            alreadyAdded.quantity++;
        } else {
            alert("reached limit");
            return;
        }

    }
    else {

        let mewItem = { ...addedItem, quantity: 1 };
        cardData.push(mewItem);
        // cardData.push(CardDetails[ind]);
    }

    localStorage.setItem("cardData", JSON.stringify(cardData));

    displayCardDetails();
    count()

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




    document.getElementById("addedToCarts").innerHTML = cardData.map((value, index) => {
        console.log(value);

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
                            <button class="btn"onclick="decreaseQuantity(${value.id}, ${-1})"   id="minusBtn">-</button>
                            
                        </div>
                        <div class="col-2">
                            <h6>Price: ${total}</h6>
                        </div>
                        <div class="col-2 ">
                            <button class="btn-close" id="closebtn" onClick = "removeItem(${value.id})"></button>
                        </div>
                    </div>
                </div>
                 `
    }).join("");

    document.getElementById("overALL_Total").innerHTML = `Over All = $${final_Total}`;
}





function removeItem(valueId) {
    cardData = cardData.filter(value => {
        return value.id !== valueId;
    });

    document.getElementById("count").innerHTML = 0;

    localStorage.setItem("cardData", JSON.stringify(cardData));
    displayCardDetails();
    count()
}

function increaseQuantity(userId, count1) {
    //   console.log(userId,count1)

    let temp = cardData.find((value, index) => {
        return value.id === userId;
    })

    //   if (temp.quantity + count1 > temp.maxQty) {
    //        alert("Reached Limit")    
    //   }
    if (temp.quantity < temp.maxQty) {
        // console.log("reached limit");
        temp.quantity += count1;
    }
    else {
        alert("reached limit");
        return;
    }

    //   if (temp) {

    //   }


    localStorage.setItem("cardData", JSON.stringify(cardData));
    displayCardDetails();


    count()

}
function decreaseQuantity(userId, count1) {
    //   console.log(userId,count1)

    let temp = cardData.find((value, index) => {
        return value.id === userId;
    })



    if (temp) {
        temp.quantity = Math.max(1, temp.quantity += count1);
    } else {
        alert("Minimum limit is 1");
        return;
    }

    localStorage.setItem("cardData", JSON.stringify(cardData));

    displayCardDetails();


    count()

}


displayCardDetails();
count();
displayCard();



