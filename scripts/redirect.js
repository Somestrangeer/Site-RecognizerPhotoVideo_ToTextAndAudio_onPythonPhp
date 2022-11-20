document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('page');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}

	});



}

let red = document.querySelector('.class-of-text-trans');
let red2 = document.querySelector('.class-of-video-trans');

red.addEventListener('click', function(){
	window.location.href = 'getting-file.html';
	if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
});
red2.addEventListener('click', function(){
	window.location.href = 'http://127.0.0.1:8080/downloading';
	let preloader = document.getElementById('page');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
});


