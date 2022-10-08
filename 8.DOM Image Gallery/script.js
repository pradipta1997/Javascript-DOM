const container = document.querySelector(".container");
const master = document.querySelector(".master");
const thumbnail = document.querySelectorAll(".thumbnail");

container.addEventListener("click", function(e){

    //cek apakah yang di klik adalah thumbnail
    if(e.target.className == "thumbnail"){

        master.src = e.target.src;
        master.classList.add("fade");
        
        setTimeout(function(){
            master.classList.remove("fade");
        },500)

        thumbnail.forEach(function(thumb){

            //CARA PERTAMA (LEBIH COMPLEX)
           // if(thumb.classList.contains("active") ){
           //     thumb.classList.remove("active");
           // }

            //CARA KEDUA (LEBIH RINGKAS)
            thumb.className = "thumbnail";

        });

        e.target.classList.add("active");

    }

});
