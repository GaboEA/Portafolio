(function stickyBar(){
    var numero = 0;
    var detectorPos = true;

    const src = document.getElementById("--box");
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

            if(!detectorPos){
                detectorPos = true;
                
                document.getElementById("--nav_bg").style.position = "static";
                document.getElementById("--nav_bg").style.top = "0px";
                document.getElementById("--nav_bg").style.background = "repeating-linear-gradient(rgb(4, 5, 43),rgb(39, 41, 80) )";
                document.getElementById("--nav_bg").style.transition = "ease-in-out";
                document.getElementById("--nav_bg").style.transitionDuration = "1s";
                document.getElementById("--nav_bg").style.background = "transparent";
            }
        } 
        else if (numero >= 100){
            if(detectorPos){
                detectorPos = false;
                
                document.getElementById("--nav_bg").style.position = "sticky";
                document.getElementById("--nav_bg").style.top = "-10px";
                document.getElementById("--nav_bg").style.background = "transparent";
                document.getElementById("--nav_bg").style.backgroundColor = "transparent";
                document.getElementById("--nav_bg").style.transition = "ease-in-out";
                document.getElementById("--nav_bg").style.transitionDuration = "1s";
                document.getElementById("--nav_bg").style.backgroundColor = "rgb(4, 5, 43)";
                
                var douc = /*document.getElementById("--nav_bg").style.backgroundImage =*/ "repeating-linear-gradient(rgb(4, 5, 43),rgb(39, 41, 80) )";
    
                function wait4Seconds() {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(douc);
                            document.getElementById("--nav_bg").style.backgroundImage = douc;
                        }, 1000);
                    });
                }
                
                async function asyncCall() {
                    const result = await wait4Seconds();
                    // console.log(result);
                }

                asyncCall();
            }
        }
    });
})();