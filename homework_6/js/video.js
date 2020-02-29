var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol =	document.querySelector("#volume");
	vol.innerHTML=video.volume*100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	console.log("Pause Video");
	video.pause();
}

function decreaseSpeed() {
	console.log(video.playbackRate -= 0.2);
}

function increaseSpeed() {

	console.log(video.playbackRate += 0.25);
}

function skipAhead() {
	video.currentTime += 60;
	var vid = document.getElementById("myVideo");
	vid.loop = true
	console.log("Current time is " + video.currentTime)
}

function mute() {
	if(video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML= "Mute";
		console.log(video.changeVolume = 0);
		}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute";
		console.log(video.changeVolume = 100);
	}
}

function changeVolume() {
	var volu = document.querySelector("#volumeSlider").value;
	video.volume = volu / 100;
	document.querySelector("#volume").innerHTML = volu + '%';
	console.log(volu);

}


function gray() {
	video.classList.add('grayscale');
	console.log("Changing to gray");

}

function color() {
	video.classList.remove('grayscale')
	console.log("Changing to color");
}
