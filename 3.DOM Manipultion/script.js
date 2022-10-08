//MANIPULASI ELEMENT

/*
const judul = document.getElementById("judul");
judul.innerHTML = "Pradipta Ramadhan";
*/

/*
const judul = document.querySelector("#judul");
judul.style.color = "yellow";
judul.style.backgroundColor = "blue";
*/

/*
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute
*/

//const p2 = document.querySelector(".p2");

//----------------------------------------------------------

//MANIPULASI NODE



//METHOD : (CREATE ELEMENT,CREATE TEXT NODE,APPEND CHILD)

//Buat Element Baru & Isi Element Baru (Text)
const pBaru = document.createElement("p");
const textBaru = document.createTextNode("Paragraf 4 Baru");

//Simpan Text Baru Kedalam Elemen("p") / Paragraf Baru
pBaru.appendChild(textBaru);

//Simpan pBaru di Akhir Section A / Kedalam Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);


pBaru.style.backgroundColor = "lightblue";



//----------



//METHOD : (CREATE ELEMENT,CREATE TEXT NODE,APPEND CHILD,INSERT BEFORE)

//Buat Element Baru & Isi Element Baru(Text)
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("item 4 Baru");

//Simpan Text Baru Kedalam Elemen("li") / item Baru
liBaru.appendChild(textLiBaru);

//Cari li yang item Ke-2
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

//Masukan item Baru Sebeleum item Ke-2
ul.insertBefore(liBaru, li2);


liBaru.style.backgroundColor = "lightblue";



//----------



//METHOD : (REMOVE CHILD)

//Cari "child" nya(a) dari "parent" nya sectionA
const link = document.getElementsByTagName("a")[0];

//Hapus a (link-nya) & Pendefinisian "sectionA" Sudah Ada Diatas
sectionA.removeChild(link);



//----------



//METHOD : (CREATE ELEMENT, CREATE TEXT NODE,APPEND CHILD,REPLACE CHILD)

//Pendefinisian "sectionB" dan "p"
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

//Buat Element Baru & Isi Element Baru(Text)
const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Judul Baru");

//Simpan Text Baru Kedalam Element(h2)
h2Baru.appendChild(textH2Baru);

//Ganti Isi "p4"(paragraf 4) Dengan "h2"(Judul Baru)
sectionB.replaceChild(h2Baru, p4);


h2Baru.style.backgroundColor = "lightblue";