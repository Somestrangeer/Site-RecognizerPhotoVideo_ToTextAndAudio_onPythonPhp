function myFunction() {
  /* Get the text field */
  let copyText = document.getElementById("text-copy");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


function redirectMainSite(){
	window.location.href = "http://amochka/";
}


document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('page');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}

	});
}
let audio = document.querySelector('.audio-back');
audio.addEventListener('click', function(){
  let fs = require('fs');
  fs.unlinkSync('videoplayback.wav')

});
