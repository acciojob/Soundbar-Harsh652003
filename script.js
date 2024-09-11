//your JS code here. If required.
let currentAudio;

function playSound(sound) {

	const sounds={
		
        applause: "https://www.fesliyanstudios.com/play-mp3/387",
        boo: "https://www.fesliyanstudios.com/play-mp3/421",
        gasp: "https://www.fesliyanstudios.com/play-mp3/477",
        tada: "https://www.soundbible.com/mp3/Ta%20Da-SoundBible.com-1884170640.mp3",
        victory: "https://www.fesliyanstudios.com/play-mp3/667",
        wrong: "https://www.fesliyanstudios.com/play-mp3/456"
        // stop: "https://www.fesliyanstudios.com/play-mp3/414"
    };
	

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(sounds[sound]);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
