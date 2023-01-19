const url="https://dummyjson.com/products";
const req = new XMLHttpRequest();
let div=document.querySelector("div");

req.onload=()=>{
    const datas=req.response;
    for(data of datas.products){
        let {category,brand}=data
        div. innerHTML+=`brand:${brand},<br>카테고리: ${category}<br><hr>`

        console.log(data.brand)
    }
}
req.open("GET",url);
req.responseType="json";
req.send();