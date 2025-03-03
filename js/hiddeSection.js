(function showHide(){
    var numero = 0;

    const src = document.getElementById("cuadro");
    src.addEventListener("touchstart",(e) => {
          for (let i = 0; i < e.touches.length; i++) {
            console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
          }
        },
        false,
      );

    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        numero = scroll; 
        console.log(scroll);

        if (numero < 100) {
            document.getElementById("cuadro").style.height = "600px";
            document.getElementById("cuadro").style.opacity = "1";
            document.getElementById("cuadro").style.transition = "opacity 1.5s ease-in-out";
            // document.getElementById("cuadro2").style.display = "none";
            document.getElementById("cuadro2").style.opacity = "0";
            document.getElementById("cuadro2").style.transition = "opacity 1.5s ease-in-out";


          } else if (numero < 200){
            document.getElementById("cuadro").style.height = "100px";
            document.getElementById("cuadro").style.opacity = "0";
            document.getElementById("cuadro").style.transition = "opacity 1.5s ease-in-out";
            // document.getElementById("cuadro2").style.display = "none";
            document.getElementById("cuadro2").style.opacity = "1";
            document.getElementById("cuadro2").style.transition = "opacity 1.5s ease-in-out";
            // document.getElementById("cuadro").style.height = "100px";
            // document.getElementById("cuadro2").style.display = "block";
          }
    });
})();