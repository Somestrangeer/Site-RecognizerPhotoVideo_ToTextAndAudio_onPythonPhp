const fileInput = document.querySelector(".file_video");
const nextButton = document.querySelector(".buttonsub");
const titleSpan = document.querySelector(".span-text");
const imageState = document.querySelector(".image-button");
let hiddenClass = document.querySelector(".red-warning-text");
function getElement() {
	let file = document.getElementById("video_file1").files[0];
    let video = document.createElement('video');
    video.preload = 'metadata';

    video.onloadedmetadata = function () {
        let url = video.src
        if (url.startsWith("blob:")) {
            url = url.substr(5);
        }
        window.URL.revokeObjectURL(url);
        let duration = video.duration;
        console.log ('«Длина видео: » ' + duration);
        if(duration > 600){
        	hiddenClass.classList.remove('hidden');
        	nextButton.setAttribute("disabled");
        	titleSpan.textContent = 'Upload a file';
        	imageState.src = "/static/dowvnload.png";
        }
        else{
        	changer();
        }
    }
    video.src = URL.createObjectURL(file);
}
function changer(){
	if(fileInput == "") {
		titleSpan.textContent = "Upload a file";
		nextButton.setAttribute("disabled");
	}
	else if(fileInput == "undefined") {
		titleSpan.textContent = "Upload a file";
		nextButton.setAttribute("disabled");
	}
	else if(fileInput.value.includes(".wmv") || fileInput.value.includes(".mp4") || fileInput.value.includes(".mpg") || fileInput.value.includes(".ogm") || fileInput.value.includes(".asx") || fileInput.value.includes(".avi") || fileInput.value.includes(".ogv") || fileInput.value.includes(".webm") || fileInput.value.includes(".mov")) {
		hiddenClass.classList.add('hidden');
		imageState.src = "/static/loaded.png";
		titleSpan.textContent = 'Uploaded';
		titleSpan.classList.remove('span-text');
		titleSpan.classList.add('dop');
		nextButton.removeAttribute("disabled");
	}
}



