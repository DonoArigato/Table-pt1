
"use strict";
// GET DOCUMENT READY TO RECEIVE INFOMATION
$(document).ready(() => {
   const dot =$(".dot");
//    MAKE DOT VARIABLE iNTO CLASS DOT
   
   dot.click(() =>{
  $(".input").fadeToggle();
   }) 
//    WHEN CLICKED TOGGLE INPUT
//    TO TURN FORM ON DISPLAY

//    MAKE ICON INTO VARIABLE FOR X ICON
   const icon =$(".material-icons");
//    WHEN CLICKED TOGGLE INPUT OFF HIDE FORM
   icon.click(() => {
   $(".input").fadeToggle(); 
   
  
});
//    $(".button").on("click", (event) => {
//     name = $(event.target).attr("name");
//     oldname = $(event.target).text();

   $(".button").click(() => {
    let userName = $("#name").val();
    let phone = $("#num").val();   
    let cust = $("#cus").val();
    console.log(userName);
    console.log(phone);
    console.log(cust);
        

   });
   
    
   
   




//    class MyRevs {
//     constructor() {

//         this.person = [
//             new Reservation("Dezmen", "232", "23")
//         ];

//     add(info) {
//     addedReservation = newReservation (info.name, info.phone, info.reservation);
//     this.person.push(addedReservation);
//     }

// // class Person {
//     constructor(name, phone, reservation) {
//             this.name = name;
//             this.phone = email;
//             this.reservation = phone; 
            
    


        //     const info = {
        //         name: newName,
        //        email: newEmail,
        //  reservation: newReservation
         
       
//            }

        
//     }

// } 


// });
})
