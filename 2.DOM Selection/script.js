//DOM SELECTION
//Di dalam Dalam Javascript penulisan menggunakan metode "camelCase"


//document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "gold";
judul.style.backgroundColor = "black";
judul.innerHTML = "Javascript DOM";
judul.style.textAlign = "center";

//document.getElementsByTagName() -> HTML Collection
const p = document.getElementsByTagName("p");
for(let i = 0; i < p.length; i++){

    p[i].style.backgroundColor = "#edd30c";
}

//document.getElementsByClassName() -> HTML Collection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Hello this is Pradipta Ramadhan and I first here to use Js DOM syntax program";


//document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "20px";

const li2 = document.querySelector("#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";


//document.querySelectorAll() -> nodeList
const pp = document.querySelectorAll("p");
for(let i = 0; i < pp.length; i++){

    p[i].style.backgroundColor = "#edd30c";
}


const li = document.querySelectorAll("li");
for(let i = 0; i < li.length; i++){

    li[i].style.backgroundColor = "orange";
}
