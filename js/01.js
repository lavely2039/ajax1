const url="https://dummyjson.com/products"
const req = new XMLHttpRequest();
let div=document.querySelector("div");
req.onload = (e) => {
    const datas = req.response; //not responseText
    for ( data of datas.products){
        let {brand,category}=data
        div.innerHTML+=`brand: ${brand}, <br> category: ${category}<br><hr>`
        console.log(brand,category)
    }
};
req.open("GET",url);
req.responseType = "json";
req.send();