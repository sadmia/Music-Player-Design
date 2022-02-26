"use strict";

let playMusicNumber = document.getElementById('selectMusicNumber');
let lastMusicNumber = document.getElementById('listMusicNumber');

let imagesCover = document.getElementById('musicImages');
let videoCover = document.getElementById('videoCover');

let audioTitle = document.getElementById('audioName');
let audioChannle = document.getElementById('audioVarsion');

let audioTimeLine = document.getElementById('audioTimeLine');
let timeLineWork = document.getElementById('timeLine');
let playTime = document.getElementById('liveTime');
let endTime = document.getElementById('endTime');

let voliumBtn = document.getElementById('voliumBtn');
let rePost = document.getElementById('rePost');
let privBtn = document.getElementById('privBtn');
let nextBtn = document.getElementById('nextBtn');

let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');

let audio = document.getElementById("audioSelct");


imagesCover.src = storage[0].images;
audio.src = storage[0].audio;
videoCover.src = "video/bg.mp4";
audioTitle.innerText = storage[0].name;
audioChannle.innerText = storage[0].channle;



imagesCover.addEventListener("dblclick", () => {
	imagesCover.style.display = "none";
	videoCover.style.display = "block";
})
videoCover.addEventListener("dblclick", () => {
	imagesCover.style.display = "block";
	videoCover.style.display = "none";
})

let rePostVlu = 0;
rePost.addEventListener("click", () => {
	let rePostI = rePost.querySelector("i")
	rePostVlu = rePostVlu + 1;
	if (rePostVlu == 1) {
		rePostVlu = 1;
		rePostI.classList.add("fa-vector-square");
		rePostI.classList.remove("fa-right-left");
		audio.loop = true;	
	} else if (rePostVlu == 2) {
		rePostVlu = 0;
		rePostI.classList.remove("fa-vector-square");
		rePostI.classList.add("fa-right-left");
		audio.loop = false;
	}
})

let voliumBtnVlu = 0;
voliumBtn.addEventListener("click", () => {
	let voliumBtnI = voliumBtn.querySelector("i");
	voliumBtnVlu = voliumBtnVlu + 1;

	if (voliumBtnVlu == 1) {
		voliumBtnVlu = 1;
		voliumBtnI.classList.add("fa-volume-down");
		voliumBtnI.classList.remove("fa-volume-high");
		voliumBtnI.classList.remove("fa-volume-off");
		voliumBtnI.classList.remove("fa-volume-mute");
		audio.volume = 0.7;
	} else if (voliumBtnVlu == 2) {
		voliumBtnVlu = 2;
		voliumBtnI.classList.add("fa-volume-off");
		voliumBtnI.classList.remove("fa-volume-down");
		voliumBtnI.classList.remove("fa-volume-high");
		voliumBtnI.classList.remove("fa-volume-mute");
		audio.volume = 0.4;
	} else if (voliumBtnVlu == 3) {
		voliumBtnVlu = 3;
		voliumBtnI.classList.add("fa-volume-mute");
		voliumBtnI.classList.remove("fa-volume-down");
		voliumBtnI.classList.remove("fa-volume-off");
		voliumBtnI.classList.remove("fa-volume-high");
		audio.volume = 0;
	} else if (voliumBtnVlu == 4) {
		voliumBtnVlu = 0;
		voliumBtnI.classList.remove("fa-volume-mute");
		voliumBtnI.classList.remove("fa-volume-down");
		voliumBtnI.classList.remove("fa-volume-off");
		voliumBtnI.classList.add("fa-volume-high");
		audio.volume = 1;
	}
}) 


playBtn.addEventListener("click", function() {
	playClick();
	audioLastTime();
})
pauseBtn.addEventListener("click", function() {
	pauseClick();
})

let playClick = function() {
	audio.play();
	videoCover.play();
	playBtn.style.display = "none";
	pauseBtn.style.display = "block";
}
let pauseClick = function() {
	audio.pause();
	videoCover.pause();
	pauseBtn.style.display = "none";
	playBtn.style.display = "block";
}

lastMusicNumber.innerText = storage.length;

let audioNumber = 1;

nextBtn.addEventListener("click", function() {
	audioNumber = audioNumber + 1;
	pauseClick();

	if (audioNumber > storage.length) {	
		audioNumber = 1;
		playMusicNumber.innerText = audioNumber;
	} else {
		playMusicNumber.innerText = audioNumber;
	}
	musicNumberCount(audioNumber);
	endTime.innerText = "0:00";
})

privBtn.addEventListener("click", function() {
	audioNumber = audioNumber - 1;
	pauseClick();

	if (audioNumber < 1) {	
		audioNumber = storage.length;
		playMusicNumber.innerText = audioNumber;
	} else {
		playMusicNumber.innerText = audioNumber;
	}
	musicNumberCount(audioNumber);
	endTime.innerText = "0:00";
})



let musicNumberCount = function(number) {
	
	for (let i = 0; i < storage.length; i++) {
		if (number == i + 1) {
			imagesCover.src = storage[i].images;
			audio.src = storage[i].audio;
			audioTitle.innerText = storage[i].name;
			audioChannle.innerText = storage[i].channle;
		}
	}
}






// if (audio.duration > 0 && !audio.paused) {
// 	console.log("Its playing...do your job");

// } else {
// 	console.log("Not playing...maybe paused, stopped or never played.");
// }	


function audioLastTime() {
	let audioEndTime = Math.floor(audio.duration);
	let miniteCount = Math.floor(audioEndTime / 60);
	let hourCount = Math.floor(miniteCount / 60);
	let minite = Math.floor(miniteCount % 60);
	let secend = Math.floor(audioEndTime % 60);

	
	if (audioEndTime < 60) {
		for (let i = 0; i <= 9; i++) {
			endTime.innerText = "0:0"+secend;
		}
		if (secend > 9) {
			endTime.innerText = "0"+ ":" + secend;
		}
	} else if (audioEndTime < 3600) {
		for (let i = 0; i <= 9; i++) {
			endTime.innerText = minite + ":" + "0"+secend;
		}
		if (secend > 9 && minite < 9) {
			endTime.innerText = minite + ":" + secend;
		} else if (secend < 9 && minite > 9) {
			endTime.innerText = minite + ":" + "0" + secend;
		} else if (secend > 9 && minite > 9) {
			endTime.innerText = minite + ":" +secend;
		}
	} else if (audioEndTime < 86400) {
		for (let i = 0; i <= 9; i++) {
			endTime.innerText = hourCount + ":" + "0" + minite + ":" + "0" + secend;
		} 
		if (secend > 9 && minite < 9) {
			endTime.innerText = hourCount + ":" + "0" + minite + ":" + secend;
		} else if (secend < 9 && minite > 9) {
			endTime.innerText = hourCount + ":" + minite + ":" + "0" + secend;
		} else if (secend > 9 && minite > 9) {
			endTime.innerText = hourCount + ":" + minite + ":" + secend;
		} 
	}
}

audio.ontimeupdate = function() {

	let audioLiveTime = Math.floor(audio.currentTime);
	let miniteCount = Math.floor(audioLiveTime / 60);
	let hourCount = Math.floor(miniteCount / 60);
	let minite = Math.floor(miniteCount % 60);
	let secend = Math.floor(audioLiveTime % 60);

	
	if (audioLiveTime < 60) {
		for (let i = 0; i <= 9; i++) {
			playTime.innerText = "0:0"+secend;
		}
		if (secend > 9) {
			playTime.innerText = "0"+ ":" + secend;
		}
	} else if (audioLiveTime < 3600) {
		for (let i = 0; i <= 9; i++) {
			playTime.innerText = minite + ":" + "0"+secend;
		}
		if (secend > 9 && minite < 9) {
			playTime.innerText = minite + ":" + secend;
		} else if (secend < 9 && minite > 9) {
			playTime.innerText = minite + ":" + "0" + secend;
		} else if (secend > 9 && minite > 9) {
			playTime.innerText = minite + ":" +secend;
		}
	} else if (audioLiveTime < 86400) {
		for (let i = 0; i <= 9; i++) {
			playTime.innerText = hourCount + ":" + "0" + minite + ":" + "0" + secend;
		} 
		if (secend > 9 && minite < 9) {
			playTime.innerText = hourCount + ":" + "0" + minite + ":" + secend;
		} else if (secend < 9 && minite > 9) {
			playTime.innerText = hourCount + ":" + minite + ":" + "0" + secend;
		} else if (secend > 9 && minite > 9) {
			playTime.innerText = hourCount + ":" + minite + ":" + secend;
		} 
	}	

	let audioEndTime = Math.floor(audio.duration);
	let parsent = 100 / audioEndTime;
	let parsentCat = parsent.toFixed(3);
	timeLineWork.max = audioEndTime;
	timeLineWork.value = audioLiveTime;

	audioPlayChake(audio.paused == true);
	function audioPlayChake(test) {
		if (test && audioEndTime == audioLiveTime) {
			pauseBtn.style.display = "none";
			playBtn.style.display = "block";
			audio.pause();
			videoCover.pause();
		}
	}

	timeLine.addEventListener("input", ()=>{
		audio.currentTime = timeLine.value;
	})
}


