console.log("hii");



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////BAS
document.querySelector(".red").addEventListener("click" , function(){


//animation addition and removal to table
    for(var i=0 ; i<4 ;i++){

        console.log(document.querySelectorAll(".basic")[i].classList.add("table_animation"));
        console.log(document.querySelectorAll(".super")[i].classList.remove("table_animation"));
        console.log(document.querySelectorAll(".premium")[i].classList.remove("table_animation"));        
        
        }
//animation addition and removal to main box
        document.querySelector(".red").classList.add("box_animation");
        document.querySelector(".yellow").classList.remove("box_animation");
        document.querySelector(".orange").classList.remove("box_animation");
        
//animation addition and removal to button.       
        document.querySelector(".basic_button").classList.add("button_animation");
        document.querySelector(".super_button").classList.remove("button_animation");
        document.querySelector(".premium_button").classList.remove("button_animation");
 
//Continue button above text
        document.querySelector(".submittext").innerHTML = "Basic <br /> <span>₹400/Yearly</span>";
        
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector(".orange").addEventListener("click" , function(){


        //animation addition and removal to table
            for(var i=0 ; i<4 ;i++){
        
                console.log(document.querySelectorAll(".super")[i].classList.add("table_animation"));
                console.log(document.querySelectorAll(".basic")[i].classList.remove("table_animation"));
                console.log(document.querySelectorAll(".premium")[i].classList.remove("table_animation"));        
                
                }
        //animation addition and removal to main box
                document.querySelector(".orange").classList.add("box_animation");
                document.querySelector(".red").classList.remove("box_animation");
                document.querySelector(".yellow").classList.remove("box_animation");
                
        //animation addition and removal to button.       
                document.querySelector(".super_button").classList.add("button_animation");
                 document.querySelector(".basic_button").classList.remove("button_animation");
                 document.querySelector(".premium_button").classList.remove("button_animation");
       
        //Continue button above text
        document.querySelector(".submittext").innerHTML = "Super <br /> <span>₹800/Yearly</span>";

        });

       
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 document.querySelector(".yellow").addEventListener("click" , function(){


        //animation addition and removal to table
            for(var i=0 ; i<4 ;i++){
        
                console.log(document.querySelectorAll(".premium")[i].classList.add("table_animation"));
                console.log(document.querySelectorAll(".basic")[i].classList.remove("table_animation"));
                console.log(document.querySelectorAll(".super")[i].classList.remove("table_animation"));        
                
                }
        //animation addition and removal to main box
                document.querySelector(".yellow").classList.add("box_animation");
                document.querySelector(".red").classList.remove("box_animation");
                document.querySelector(".orange").classList.remove("box_animation");
                
        //animation addition and removal to button.       
                document.querySelector(".premium_button").classList.add("button_animation");
                 document.querySelector(".basic_button").classList.remove("button_animation");
                 document.querySelector(".super_button").classList.remove("button_animation");
        
                
        //Continue button above text
        document.querySelector(".submittext").innerHTML = "Premium <br /> <span>₹1200/Yearly</span>";

        });
