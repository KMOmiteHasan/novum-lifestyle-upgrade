let timeoutBtn = document.getElementById("timeoutBtn")
let timeoutText = document.getElementById("timeoutText")
let timeoutImg = document.getElementById("timeoutImg")
let firstSect = document.getElementById("first-sect")
let videoContainer = document.getElementById("video-container")
let video = document.getElementById("video-0")
let tapToResume = document.getElementById("tap-to-resume")
let tapToPlay = document.getElementById("tap-to-play")

tapToPlay.addEventListener("click", function () {
    video.play()
    video.currentTime = 0
    video.muted = false;
    tapToPlay.style.display = "none"
    setInterval(function () {
        if (Math.round(video.currentTime) === 100) {
            timeoutBtn.style.display = "block"
            timeoutText.style.display = "block"
            timeoutImg.style.display = "block"
        }
    }, 1000);

    videoContainer.classList.add("full-mobile")
    firstSect.classList.add("top-space")
})

for (var t = document.querySelectorAll("[data-delayed-fade-in]"), n = 0; n < t.length; n++) {
    if (t[n].dataset.delayedFadeIn) {
        if (t[n].dataset.delayedFadeInRemember && "undefined" != typeof localStorage && localStorage.getItem("delayedFadeInRemember-" + t[n].id)) {
            timeoutBtn.style.display = "block"
        }
        else {
            t[n].dataset.delayedFadeInRemember && "undefined" != typeof localStorage && localStorage.setItem("delayedFadeInRemember-" + t[n].id, "true")
        }
    }
}


video.addEventListener("click", function () {
    video.pause()
    tapToResume.style.display = "block"
    videoContainer.classList.remove("full-mobile")
    firstSect.classList.remove("top-space")
})

tapToResume.addEventListener("click", function () {
    video.play()
    tapToResume.style.display = "none"
    videoContainer.classList.add("full-mobile")
    firstSect.classList.add("top-space")
})


setInterval(() => {
    timeoutBtn.classList.add("animated")
}, 1000);

setInterval(() => {
    timeoutBtn.classList.remove("animated")
}, 2000);


