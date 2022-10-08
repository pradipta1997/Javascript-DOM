//Selector Body
const body = document.getElementsByTagName("body")[0];

//---------------TOMBOL UBAH WARNA----------------
const tombolUbahWarna = document.getElementById("tombolUbahWarna");


tombolUbahWarna.onclick = function(){
    //body.style.backgroundColor = "yellow";
    //body.setAttribute("class", "biru-muda");
    body.classList.toggle("biru-muda");

}

//---------------TOMBOL ACAK WARNA----------------

//Menangkap Elements
const tombolAcakWarna = document.createElement("button");
const textTombol = document.createTextNode("Acak Warna");

//Menambahkan "textTombol" Kedalam "tombolAcakWarna"
tombolAcakWarna.appendChild(textTombol);

//Pendefinisian type tombol
tombolAcakWarna.setAttribute("type", "button");

//Meng-insert Tombol Setelah Tombol "Ubah Warna"
tombolUbahWarna.after(tombolAcakWarna);

//Menambahkan Event "click"
tombolAcakWarna.addEventListener("click", function(){

    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";

});


//---------------SLIDER WARNA---------------------

const sMerah = document.querySelector("input[name = sliderMerah]");
const sHijau = document.querySelector("input[name = sliderHijau]");
const sBiru  = document.querySelector("input[name = sliderBiru]");

sMerah.addEventListener("input", function(){
    
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    

    body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";

});

sHijau.addEventListener("input", function(){
    
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";

});

sBiru.addEventListener("input", function(){
    
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";

});


//---------------MOUSEMOVE WARNA-------------------

body.addEventListener("mousemove", function(Event){

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    body.style.backgroundColor = "rgb("+ xPos +","+ yPos +",100)";


});