
let ok = false;

  function myFunction1() {
	  
    window.location = 'index.html';
  }
  
  function doFirst()
  {
	  let button = document.getElementById("test123");
	  button.addEventListener("click",saveCrap,false);
	  
  }
  //get value by ID
  function saveCrap()
  {
	  let userkonto = document.getElementById("exampleFormControlSelect233456").value;

	  let konto = document.getElementById("inputEmail348").value;

	  let belopp = document.getElementById("inputPassword99999").value;

	  let betalningsdag = document.getElementById("betalningsdag").value;

	  let ocr = document.getElementById("inputPassword222").value;

	  let catogory = document.getElementById("exampleFormControlSelect328").value;
	  
	//Store the value 
window.localStorage.setItem('user',userkonto);
window.localStorage.setItem('konto',konto);
window.localStorage.setItem('belopp',belopp);
window.localStorage.setItem('betalningsdag',betalningsdag);
window.localStorage.setItem('ocr',ocr);
window.localStorage.setItem('catogory',catogory);

//Check the value
if(document.getElementById("exampleFormControlSelect233456").value == ""){
	 ok = false;
	 console.log("userkonto="+ok);
	 document.getElementById("exampleFormControlSelect233456").style.borderColor="red"
	 return false
}


if(document.getElementById("inputPassword222").value == ""){
	 ok = false;
	 console.log("ocr="+ok);
	 document.getElementById("inputPassword222").style.borderColor="red"
	 
	  return false
}

if(document.getElementById("inputEmail348").value == "")
{
	ok = false;
	console.log("konto="+ok);
	document.getElementById("inputEmail348").style.borderColor="red"
	 return false
	} 
if(document.getElementById("inputPassword99999").value == ""){
	ok=false;
console.log("belopp="+ok);
 document.getElementById("inputPassword99999").style.borderColor="red";
 return false
}




	if(document.getElementById("exampleFormControlSelect328").value==""){
		ok=false;
		console.log('catogory='+ok);
		document.getElementById("exampleFormControlSelect328").style.borderColor="red"
		 return false
	}
else
	
	ok = true;
console.log(ok)

if(ok){
window.location = "program.html";

}
  }
  
  window.addEventListener("load",doFirst,false);