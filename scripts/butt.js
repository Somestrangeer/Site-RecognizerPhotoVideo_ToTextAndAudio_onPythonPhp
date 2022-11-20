const titleSpan = document.querySelector(".span");
const buttonUp = document.querySelector(".button-to-download");
const fileInput = document.querySelector(".fileinput");
const nextButton = document.querySelector(".buttonsub");
const warning = document.querySelector("#just");
const fony = document.querySelector(".second-container");

function changer(){
	if(fileInput == ""){
		titleSpan.textContent = 'Upload a file';
		nextButton.setAttribute("disabled");
	}
	else if(fileInput == 'undefined'){
		titleSpan.textContent = 'Upload a file';
		nextButton.setAttribute("disabled");
	}
	else if(fileInput.value.includes('.png') || fileInput.value.includes('.jpg')|| fileInput.value.includes('.jpeg')|| fileInput.value.includes('.svg')|| fileInput.value.includes('.bmp')){
		titleSpan.textContent = 'Uploaded';
		warning.classList.add('hidden');
		titleSpan.classList.remove('span');
		titleSpan.classList.add('dop');
		nextButton.removeAttribute("disabled");
	}
}
setInterval(changer, 1000);

fony.addEventListener('click', function(){
	if(titleSpan.textContent == 'Upload a file'){
		warning.classList.remove('hidden');
	}
});


	
