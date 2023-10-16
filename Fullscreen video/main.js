let video = document.getElementById("video");
let btn = document.getElementById("btn");

function handleClick() {
  if (video.paused) {
    btn.innerHTML = "Play";
    video.play();
  } else {
    btn.innerHTML = "Pause";
    video.pause();
  }
}
