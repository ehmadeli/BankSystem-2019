let user =localStorage.getItem("user");
let konto=localStorage.getItem("konto");
let amount = localStorage.getItem("belopp");
let time =localStorage.getItem("betalningsdag");
	let ocrnumber =localStorage.getItem("ocr");
let catogory = localStorage.getItem("catogory");
let bgBg = localStorage.getItem("catogory");

	
document.getElementById("amount").innerHTML = amount;
document.getElementById("ocr").innerHTML = ocrnumber;
document.getElementById("user").innerHTML = user;
document.getElementById("bgBg").innerHTML = bgBg;