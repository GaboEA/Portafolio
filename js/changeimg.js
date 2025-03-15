(function changesImg (){
    var firstPhoto = document.getElementById("profile_id");

    firstPhoto.addEventListener("pointerenter", (event) => {
        console.log("verdadero")
        firstPhoto.setAttribute("src", "img/img_profile_real.png")
    });
    
    firstPhoto.addEventListener("pointerleave", (event) => {
        firstPhoto.setAttribute("src", "img/img_profile_real_NS.png")
    }); 
})();