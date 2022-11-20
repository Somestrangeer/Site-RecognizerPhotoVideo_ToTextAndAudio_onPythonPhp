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
document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('page');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}

	});
}