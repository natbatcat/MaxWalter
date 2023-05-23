//HAMBURGER MENU

(function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the nav links when the hamburger menu is clicked
  hamburgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close the nav links when a link is clicked
  navLinks.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
})();

//VIDEO PAGE

(function() {
  // Function to load the YouTube API script
  function loadYouTubeAPI() {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  // Function to create YouTube players
  function createPlayers() {
    var videoIds = [
      "0wUFhAxGD6s",
      "cKd1uicSFaE",
      "gn9Q7AtWlw4",
      "fbgPshuFh78",
      "s05sVWhzN48",
      "HCQICE79io0"
    ];

    // Iterate through the video IDs and create a player for each video
    var videoItems = document.getElementsByClassName("video-item");
    for (var i = 0; i < videoItems.length; i++) {
      var videoContainer = videoItems[i].getElementsByClassName("video-container")[0];
      var player = new YT.Player(videoContainer, {
        height: "200", // Set the height of the video player
        width: "300", // Set the width of the video player
        videoId: videoIds[i],
        playerVars: {
          autoplay: 0, // Set to 1 if you want the videos to autoplay
        },
      });
    }
  }

  // Load the YouTube API
  window.onYouTubeIframeAPIReady = function() {
    createPlayers();
  };

  // Load the YouTube API script
  loadYouTubeAPI();
})();




//HOME PAGE PLAY BTN FOR YOUTUBE
(function homepagePlayButton() {
  const playButton = document.getElementById("play-button");
  const videoModal = document.getElementById("video-modal");
  const closeBtn = document.getElementsByClassName("close")[0];
  const videoFrame = videoModal.getElementsByTagName("iframe")[0];

  playButton.addEventListener("click", function () {
    videoModal.style.display = "block";
    videoFrame.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
    );
  });

  function closeVideoModal() {
    videoModal.style.display = "none";
    videoFrame.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
    );
    videoFrame.src = videoFrame.src.replace("&autoplay=1", ""); // Remove autoplay parameter
  }

  closeBtn.addEventListener("click", closeVideoModal);

  window.addEventListener("click", function (event) {
    if (event.target == videoModal) {
      closeVideoModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
      closeVideoModal();
    }
  });

  // Hide the modal initially
  videoModal.style.display = "none";

})();



