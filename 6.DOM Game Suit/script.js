//--------------------JAVASCRIPT--------------------

function getPilihanComputer(){

    const comp = Math.random();
    if(comp < 0.34) 
    return "gajah";

    if(comp >= 0.34 && comp < 0.67)
    return "orang";

    return "semut";
}


function getHasil(player, comp){

    if(player == comp)
    return "SERI";

    if(player == "gajah")
    return (comp == "orang") ? "MENANG" : "KALAH";

    if(player == "orang")
    return (comp == "gajah") ? "KALAH" : "MENANG";

    if(player == "semut")
    return (comp == "orang") ? "KALAH" : "MENANG";

}


//--------------------JAVASCRIPT DOM-----------------

//DENGAN 3 EVENTS
/*
const playerGajah = document.querySelector(".gajah");
playerGajah.addEventListener("click", function(){

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer   = playerGajah.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        const imgComputer = document.querySelector(".img-Computer");
        imgComputer.setAttribute("src", "asset/" + pilihanComputer + ".png");

        const info = document.querySelector(".info");
        info.innerHTML = hasil;
});


const playerOrang = document.querySelector(".orang");
playerOrang.addEventListener("click", function(){

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer   = playerOrang.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        const imgComputer = document.querySelector(".img-Computer");
        imgComputer.setAttribute("src", "asset/" + pilihanComputer + ".png");

        const info = document.querySelector(".info");
        info.innerHTML = hasil;
});


const playerSemut = document.querySelector(".semut");
playerSemut.addEventListener("click", function(){

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer   = playerSemut.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        const imgComputer = document.querySelector(".img-Computer");
        imgComputer.setAttribute("src", "asset/" + pilihanComputer + ".png");

        const info = document.querySelector(".info");
        info.innerHTML = hasil;
});
*/

//-------------------------------------------------------------



//FUNGSI UNTUK MEMUTAR PILIHAN KOMPUTER
function putar(){

    const imgComputer = document.querySelector(".img-Computer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){

        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }

        imgComputer.setAttribute("src", "asset/" + gambar[i++] + ".png");
        if(i == gambar.length) {
            i = 0;
        }

    }, 100)


}

//DENGAN 1 EVENT(LOOPING "FOREACH")

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil){

    pil.addEventListener("click", function(){

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer   = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        setTimeout(function() {
            
            const imgComputer = document.querySelector(".img-Computer");
            imgComputer.setAttribute("src", "asset/" + pilihanComputer + ".png");
    
            const info = document.querySelector(".info");
            info.innerHTML = hasil;

        }, 1000);

        putar();
    });


});



