"use strict";
$(document).ready(function () {

    

$('.btn').click(function (e) { 
    e.preventDefault();
    let a = a => {
        if (Number(a)){
            for (let i = 0; i <= a; i++) {
            $('.box').append(`<h1>${a}</h1>`);
            
        }
        }else{
            $('.box').append(`<h1>${a}</h1>`);
        }
    }
    a($('input').val())
});



// $('.btn').click(function (e) {
//     e.preventDefault();
//     let a = (a) => {
//         if (Number(a)) {
//             for (let i = 0; i < a; i++) {
//                 $('.box').append(`<h2>${a}</h2>`);
//             }
//         } else {
//             if (String(a)) {
//                 $('.box').append(`<h2>${a}</h2>`);
//             }
//         }
//     }
//     a($('input').val());
//     $('input').val("");
// });
















});