
const output = document.querySelector(".output"); //Selecting html elements using JavaScript for DOM manipulation//
const txt = document.querySelector("textarea"); //Selecting html elements using JavaScript for DOM manipulation//
/*
txt.addEventListener("change",textCounter);
txt.addEventListener("keyup",textCounter);
txt.addEventListener("keydown",textCounter);
*/
/*keyup, keydown and change are eventlisteners.  Keydown and keyup provide a code indicating which key is pressed.  Keypress indicates which character was entered*/
["keyup","keydown","change"].forEach(function(e){
	txt.addEventListener(e,textCounter); //EventListener occurs when an alteration to the element's value is commited by the user.  When the alteration happens the textCounter function is called//
})

const maxLength = 10; //Maximun number of characters allowed//
const warnLength = 5; //Number of characters left to show the warning message//

function textCounter(e){
	console.log(e);               //The method .length retrieves the length of a string//
	let count = txt.value.length; //declaration of the local variable count, setting its value to txt.valu.length//
	if(count > maxLength){
		console.log(txt.value.substring(0,maxLength));
		txt.value = txt.value.substring(0,maxLength);
	}
	if(count > warnLength){
		output.classList.add("red"); //Code used to add the class "red"//
	}else{
		output.classList.remove("red"); //Code used to remove the class "red//
	}
		output.innerHTML = (maxLength-count)+" characters left"; //Shows the number of characters left//
		console.log(count);
	}
	