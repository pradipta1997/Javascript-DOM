//EVENT HANDLING & //DOM SELECTION/MANIPULATION
/*
const tutup = document.querySelector(".close");
const card = document.querySelector(".card");

tutup.addEventListener("click", function(){

    card.style.display = "none";

});
*/

//--------------------DOM TRAVERSAL---------------------

//DOM TRAVERSAL (MENUTUP CARD)


const tutup = document.querySelectorAll(".tutup");
/*
//DENGAN METODE (for)
for(let i = 0; i < tutup.length; i++){

    tutup[i].addEventListener("click", function(e){

        //tutup[i].parentElement.style.display = "none";
        e.target.parentElement.style.display = "none";


    });
}
*/

//DENGAN METODE (forEach),LEBIH RINGKAS & SEDERHANA
//Dengan cara (DOM PREVENT DEFAULT) mencegah aksi default dari sebuah element
/*
tutup.forEach(function(el){

    el.addEventListener("click", function(e){

        e.target.parentElement.style.display = "none";
        e.preventDefault();
        e.stopPropagation();
        
    });

});
*/

//Muncul info saat meng-klik kartu
/*
const cards = document.querySelectorAll(".card");
cards.forEach(function(card){

    card.addEventListener("click", function(){

        alert("ok");

    });

});
*/



//--------------------DOM TRAVERSAL---------------------

/*
//DOM TRAVERSAL (PARENT ELEMENT)
const nama = document.querySelector(".nama");
console.log(nama.parentElement.parentElement);

//DOM TRAVERSAL (NEXT SIBLING) TERMASUK ENTER JUGA TERHITUNG
const nama2 = document.querySelector(".nama");
console.log(nama2.nextSibling.nextSibling);

//DOM TRAVERSAL (NEXT SIBLING) CARA KE-2
const nama3 = document.querySelector(".nama");
console.log(nama3.nextElementSibling);

//DOM TRAVERSAL (NEXT ELEMENT SIBLING)
const nama4 = document.querySelector(".nama");
console.log(nama4.previousElementSibling);

//DOM TRAVERSAL (NEXT ELEMENT SIBLING)
const nama5 = document.querySelector(".nama");
console.log(nama5.nextElementSibling.nextElementSibling);
*/


//--------------------DOM EVENT BUBBLING------------------

//Funsi menggunakan "event bubbling",jika kita menambahkan ->
//div class = "card" yang baru pada HTML maka akan tetap ->
//bisa di click tutup,selama yang terseleksi class .container ->
//yang menjadi wadah dari semua isi class .card

const container = document.querySelector(".container");

container.addEventListener("click", function(e){

    if(e.target.className == "tutup"){
        e.target.parentElement.style.display = "none";
        e.preventDefault();
    }

});

