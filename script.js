
"use strict";
// GET DOCUMENT READY TO RECEIVE INFOMATION
$(document).ready(() => {
   const dot =$(".dot");
//    MAKE DOT VARIABLE iNTO CLASS DOT
   
   dot.click(() =>{
  $(".input").toggle();
   }) 
//    WHEN CLICKED TOGGLE INPUT
//    TO TURN FORM ON DISPLAY

//    MAKE ICON INTO VARIABLE FOR X ICON
   const icon =$(".material-icons");
//    WHEN CLICKED TOGGLE INPUT OFF HIDE FORM
   icon.click(() => {
   $(".input").toggle();    
   });

   


});


    