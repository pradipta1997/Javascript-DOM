//MENGUBAH WARNA BACKGROUND PARAGRAF 3
//METHOD :Event Handler (onClick)
/*

function ubahWarnaP3(){
    p3.style.backgroundColor = "gold";

}

const p3 = document.querySelector(".p3");
p3.onclick = ubahWarnaP3;


//MENGUBAH WARNA BACKGROUND PARAGRAF 2
//METHOD : Event Handler (onClick)
function ubahWarnaP2(){
    p2.style.backgroundColor = "blue";

}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;


//------------------------------------------------

//MENAMBAH LIST ITEM PADA SECTION B
//METHOD : addEventListener (click)

//Pendefinisian "section#b p" & Fungsi Event "click"
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function(){
    
    //Pendefinisian ul
    const ul = document.querySelector("section#b ul");
    
    //Membuat Element Baru & Menambahkan Text Baru
    const liBaru = document.createElement("li");
    const textLiBaru = document.createTextNode("item Baru");

    //Simpan "textLiBaru" Kedalam "liBaru"
    liBaru.appendChild(textLiBaru);

    //Simpan "liBaru" Kedalam "ul"
    ul.appendChild(liBaru);
});

*/
//------------------------------------------------

//Perbedaan Event Handler & addEventListener

const p3 = document.querySelector(".p3");

/*
//Event Handler
p3.onclick = function(){
    p3.style.backgroundColor = "yellow";
}

p3.onclick = function(){
    p3.style.color = "red";
}
*/


//addEventListener()
p3.addEventListener("click", function(){
    p3.style.backgroundColor = "green";
});


p3.addEventListener("click", function(){
    p3.style.color = "red";
});