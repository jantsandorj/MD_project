const swiper = new Swiper(".swiper", {
  effect: "fade",
  crossFade: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var navbar = document.getElementsByClassName("head")[0];
console.log(navbar);
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function () {
  myFunction();
};

var ytPlayers = [];
var videoid = [
  "Kf319Gh2voc",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
]; //YouTube video ID
function onYouTubeIframeAPIReady() {
  // Initialize the YouTube players for each video ID
  for (var i = 0; i < videoid.length; i++) {
    ytPlayers[i] = new YT.Player("player_" + i, {
      videoId: videoid[i],
      playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
      },
    });
  }
}

var inn_yt = document.getElementsByClassName("inn_yt");
var playButtons = document.getElementsByClassName("play_btn");
var yt_imgs = document.getElementsByClassName("yt_img");

function changePic() {
  for (var i = 0; i < yt_imgs.length; i++) {
    yt_imgs[i].src = `https://i.ytimg.com/vi/${videoid[i]}/maxresdefault.jpg`;
  }
}
changePic();

for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    var index = Array.from(playButtons).indexOf(this);
    console.log(index);

    // Play the corresponding video
    ytPlayers[index].playVideo();
    console.log(ytPlayers[1]);

    // Delayed actions to hide elements and add a class
    setTimeout(function () {
      yt_imgs[index].style.display = "none";
      playButtons[index].style.display = "none";
      inn_yt[index].classList.add("playing");
    }, 300);
  });
}