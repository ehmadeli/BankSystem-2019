 function myFunction2(){
    window.location = 'index.html';
 }
 function myFunction1(){
   window.location = 'account.html';
}
let account =localStorage.getItem("user");
let konto=localStorage.getItem("konto");
let amount = localStorage.getItem("belopp");
let time =localStorage.getItem("betalningsdag");
  let ocrnumber =localStorage.getItem("ocr");
 let catogory = localStorage.getItem("catogory");

   document.getElementById("p1").innerHTML = account;
 document.getElementById("ammount").innerHTML = amount;
 document.getElementById("ocr").innerHTML = ocrnumber;
 document.getElementById("sender").innerHTML = konto;
 document.getElementById("bankgiro").innerHTML = konto;

 