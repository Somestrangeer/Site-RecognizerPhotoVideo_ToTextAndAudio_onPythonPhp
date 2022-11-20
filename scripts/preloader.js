let preloader = document.getElementById('page');
let button = document.getElementById('MyButton');
button.addEventListener('click', function(){
	if(preloader.classList.contains('done')){
		preloader.classList.remove('done');
	}
});


document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('page');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}

	});
}