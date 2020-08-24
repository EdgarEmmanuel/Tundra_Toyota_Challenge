//retrieve the button 

let btn_red = document.querySelector(".main .section-2 #red");

let btn_grey = document.querySelector(".main .section-2 #grey");

let btn_blue = document.querySelector(".main .section-2 #blue");

let btn_green = document.querySelector(".main .section-2 #green");

let btn_smoked = document.querySelector(".main .section-2 #smoked");

let btn_metal = document.querySelector(".main .section-2 #metal");

let btn_white = document.querySelector(".main .section-2 #white");


let i_left = document.querySelector(".main .section-0-5 #left");

let i_right = document.querySelector(".main .section-0-5 #right");

let img_balise = document.querySelector(".main .section-1 #img");

let first=1;

let last =4



class UI{
        
    //verify if the file exists (not recommanded)
    static doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}
    
    //for green
    static for_greenCar(val){
         var posi = img_balise.getAttribute("src")[13];
        //img_balise.setAttribute("src","others/white/1white.png");
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`others/green/${parseInt(posi)+1}green.png`)==true){
                        img_balise.setAttribute("src",`others/green/${parseInt(posi)+1}green.png`);
                     }else{
                          img_balise.setAttribute("src","others/green/1green.png");
                     }
                    break;
                case "moins":
                    if(UI.doesFileExist(`others/green/${parseInt(posi)-1}green.png`)==true){
                        img_balise.setAttribute("src",`others/green/${parseInt(posi)-1}green.png`);
                    }else{
                        img_balise.setAttribute("src","others/green/4green.png");
                    }
                break;
        }
    }
    
    
    
    //for metal
    static for_metalCar(val){
         var posi = img_balise.getAttribute("src")[13];
        //img_balise.setAttribute("src","others/white/1white.png");
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`others/metal/${parseInt(posi)+1}metal.png`)==true){
                        img_balise.setAttribute("src",`others/metal/${parseInt(posi)+1}metal.png`);
                     }else{
                          img_balise.setAttribute("src","others/metal/1metal.png");
                     }
                    break;
                case "moins":
                    if(UI.doesFileExist(`others/metal/${parseInt(posi)-1}metal.png`)==true){
                        img_balise.setAttribute("src",`others/metal/${parseInt(posi)-1}metal.png`);
                    }else{
                        img_balise.setAttribute("src","others/metal/4metal.png");
                    }
                break;
        }
    }
    
    
    
    
    
    
    //for smoked
    static for_smokedCar(val){
         var posi = img_balise.getAttribute("src")[14];
        //img_balise.setAttribute("src","others/white/1white.png");
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`others/smoked/${parseInt(posi)+1}smoked.png`)==true){
                        img_balise.setAttribute("src",`others/smoked/${parseInt(posi)+1}smoked.png`);
                     }else{
                          img_balise.setAttribute("src","others/smoked/1smoked.png");
                     }
                    break;
                case "moins":
                    if(UI.doesFileExist(`others/smoked/${parseInt(posi)-1}smoked.png`)==true){
                        img_balise.setAttribute("src",`others/smoked/${parseInt(posi)-1}smoked.png`);
                    }else{
                        img_balise.setAttribute("src","others/smoked/4smoked.png");
                    }
                break;
        }
    }
    
    
    
    static for_whiteCar(val){
         var posi = img_balise.getAttribute("src")[13];
        //img_balise.setAttribute("src","others/white/1white.png");
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`others/white/${parseInt(posi)+1}white.png`)==true){
                        img_balise.setAttribute("src",`others/white/${parseInt(posi)+1}white.png`);
                     }else{
                          img_balise.setAttribute("src","others/white/1white.png");
                     }
                    break;
                case "moins":
                    if(UI.doesFileExist(`others/white/${parseInt(posi)-1}white.png`)==true){
                        img_balise.setAttribute("src",`others/white/${parseInt(posi)-1}white.png`);
                    }else{
                        img_balise.setAttribute("src","others/white/4white.png");
                    }
                break;
        }
    }
    
    static for_blueCar(val){
        var posi = img_balise.getAttribute("src")[8];
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`blueCar/${parseInt(posi)+1}blue.png`)==true){
                        img_balise.setAttribute("src",`blueCar/${parseInt(posi)+1}blue.png`);
                     }else{
                          img_balise.setAttribute("src","blueCar/1blue.png");
                     }
                    break;
                case "moins":
                    if(UI.doesFileExist(`blueCar/${parseInt(posi)-1}blue.png`)==true){
                        img_balise.setAttribute("src",`blueCar/${parseInt(posi)-1}blue.png`);
                    }else{
                        img_balise.setAttribute("src","blueCar/4blue.png");
                    }
                break;
        }
    }
    
    
    
    static for_redCar(val){
        var posi = img_balise.getAttribute("src")[7];
            switch(val){
                case "plus":
                    if(UI.doesFileExist(`redCar/${parseInt(posi)+1}red.png`)==true){
                        img_balise.setAttribute("src",`redCar/${parseInt(posi)+1}red.png`);
                    }else{
                        img_balise.setAttribute("src","redCar/1red.png");
                    }
                    img_balise.setAttribute("src",`redCar/${parseInt(posi)+1}red.png`);
                    break;
                case "moins":
                    if(UI.doesFileExist(`redCar/${parseInt(posi)-1}red.png`)==true){
                        img_balise.setAttribute("src",`redCar/${parseInt(posi)-1}red.png`);
                    }else{
                        img_balise.setAttribute("src","redCar/4red.png");
                    }
                    break;
            }        
    }
    
    
    
    static for_greyCar(val){
        //get the position wher the number is 
        var posi = img_balise.getAttribute("src")[4];
            switch(val){
                case "plus":
                     if(UI.doesFileExist(`img/${parseInt(posi)+1}grey.png`)==true){
                        img_balise.setAttribute("src",`img/${parseInt(posi)+1}grey.png`);
                     }else{
                         img_balise.setAttribute("src",`img/${first}grey.png`);
                     }
                    break;
                case "moins":
                     if(UI.doesFileExist(`img/${parseInt(posi)-1}grey.png`)==true){
                        img_balise.setAttribute("src",`img/${parseInt(posi)-1}grey.png`);
                     }else{
                         img_balise.setAttribute("src",`img/${last}grey.png`);
                     }
                    break;
            }
    }
    
    
    
    static verifyColor(a){
        var val = img_balise.getAttribute("src");
        //img/1grey.png
        var classValue = img_balise.getAttribute("class");
        
        switch(a){
            case "grey": 
            //change teh attribute color 
             img_balise.setAttribute("class","grey");
            
           //change the image color 
            img_balise.setAttribute("src","img/1grey.png");
                
                break;
                
            case "red": 
            img_balise.setAttribute("class","red");
            
            //change the image color 
            img_balise.setAttribute("src","redCar/1red.png");
                
                break;
                
            case "blue":
            img_balise.setAttribute("class","blue");
            
            //change the image color 
            img_balise.setAttribute("src","blueCar/1blue.png");
                break;
                
                
            case "metal":
                 img_balise.setAttribute("class","metal");
            
            //change the image color 
            img_balise.setAttribute("src","others/metal/1metal.png");
                break;
                
            case "green":
                 img_balise.setAttribute("class","green");
            
            //change the image color 
            img_balise.setAttribute("src","others/green/1green.png");
                break;
                
            case "smoked":
            img_balise.setAttribute("class","smoked");
            
            //change the image color 
            img_balise.setAttribute("src","others/smoked/1smoked.png");
                break;
                
            case "white":
            img_balise.setAttribute("class","white");
            
            //change the image color 
            img_balise.setAttribute("src","others/white/1white.png");
                break;
                
               }
    }
    
    
    
    
    
    static chooseData(val){
        var classValue = img_balise.getAttribute("class");
        
        switch(val){
            case "plus": 
                switch(classValue){
                    case "red":
                        UI.for_redCar(val);
                        break;
                    case "grey":
                        UI.for_greyCar(val);
                        break;
                    case "blue":
                        UI.for_blueCar(val);
                        break;
                    case "white":
                        UI.for_whiteCar(val);
                        break;
                    case "smoked":
                        UI.for_smokedCar(val);
                        break;
                    case "metal":
                        UI.for_metalCar(val);
                        break;
                    case "green":
                        UI.for_greenCar(val);
                        break;
                }                
                break;
                
                case "moins": 
                     switch(classValue){
                        case "red":
                            UI.for_redCar(val);
                            break;
                        case "grey":
                            UI.for_greyCar(val);
                            break;
                        case "blue":
                            UI.for_blueCar(val);
                            break;
                         case "white":
                             UI.for_whiteCar(val);
                             break;
                        case "smoked":
                            UI.for_smokedCar(val);
                            break;
                         case "metal":
                             UI.for_metalCar(val);
                             break;
                              case "green":
                            UI.for_greenCar(val);
                            break;
                    }                
                break;                
               }
    }
}


class fortheSmallCarRotating{
    static forGreyCar(){
        
        //for grey car 
            document.querySelector("#testHover").addEventListener("mouseover",(e)=>{
        e.preventDefault();
        var img = document.querySelector("#testHover").children[0];
        img.setAttribute("src","img/4grey.png");
    });

        document.querySelector("#testHover").addEventListener("mouseout",(e)=>{
            e.preventDefault();
            var img = document.querySelector("#testHover").children[0];
            img.setAttribute("src","img/1grey.png");
        });
        
         //for red car 
      document.querySelector("#blueTest").addEventListener("mouseover",(e)=>{
        e.preventDefault();
        var img = document.querySelector("#blueTest").children[0];
        img.setAttribute("src","blueCar/1blue.png");
    });

        document.querySelector("#blueTest").addEventListener("mouseout",(e)=>{
            e.preventDefault();
            var img = document.querySelector("#blueTest").children[0];
            img.setAttribute("src","blueCar/2blue.png");
        });
        
        
         //for redCar 
     document.querySelector("#redTest").addEventListener("mouseover",(e)=>{
        e.preventDefault();
        var img = document.querySelector("#redTest").children[0];
        img.setAttribute("src","redCar/2red.png");
    });

        document.querySelector("#redTest").addEventListener("mouseout",(e)=>{
            e.preventDefault();
            var img = document.querySelector("#redTest").children[0];
            img.setAttribute("src","redCar/1red.png");
        });
        
        
         
         //for greenCar 
     document.querySelector("#greenTest").addEventListener("mouseover",(e)=>{
        e.preventDefault();
        var img = document.querySelector("#greenTest").children[0];
        img.setAttribute("src","others/green/2green.png");
    });

        document.querySelector("#greenTest").addEventListener("mouseout",(e)=>{
            e.preventDefault();
            var img = document.querySelector("#greenTest").children[0];
            img.setAttribute("src","others/green/1green.png");
        });
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
    
   


//btn green
btn_grey.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.verifyColor(btn_grey.getAttribute("id"));
});


//btn red
btn_red.addEventListener("click",(e)=>{
    e.preventDefault();
   
    UI.verifyColor(btn_red.getAttribute("id"));
});


//button blue
btn_blue.addEventListener("click",(e)=>{
    e.preventDefault();
    
    UI.verifyColor(btn_blue.getAttribute("id"));
});

btn_metal.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.verifyColor(btn_metal.getAttribute("id"));
})


btn_green.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.verifyColor(btn_green.getAttribute("id"));
})


btn_smoked.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.verifyColor(btn_smoked.getAttribute("id"));
})

btn_white.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.verifyColor(btn_white.getAttribute("id"));
    
})


//for the arrow 

i_left.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.chooseData("moins");
});

i_right.addEventListener("click",(e)=>{
    e.preventDefault();
    UI.chooseData("plus");
})

//================ test ======================
fortheSmallCarRotating.forGreyCar();


