let video = document.getElementById("video-tag");

function showDialog() {
    let dialog = document.getElementById("overlay")
    dialog.style.visibility = 'visible'
}
function hideDialog() {
    let dialog = document.getElementById("overlay")
    dialog.style.visibility = 'hidden'
}
function cancelDialog() {
    hideDialog();
}

//video.addEventListener("click", function (event) {
    //if (video.paused == true) {
        //video.play();
        //hideDialog()
    //}
    //else {
        //video.pause();
        //showDialog()
    //}
//});
/*
(function localFileVideoPlayer() {
    'use strict'
    var URL = window.URL || window.webkitURL

    var playSelectedFile = function (event) {
        var file = this.files[0]
        var type = file.type
        var videoNode = document.querySelector('video')
        videoNode.disablePictureInPicture = true
        var canPlay = videoNode.canPlayType(type)

        var fileURL = URL.createObjectURL(file)
        videoNode.src = fileURL
    }
    var inputNode = document.querySelector('input')
    inputNode.addEventListener('change', playSelectedFile, false)
})()
*/

document.getElementById('addVideoBtn').addEventListener('click', function() {
    var videoInput = document.getElementById('videoInput');
    var videoFile = videoInput.files[0];
    var videoURL = URL.createObjectURL(videoFile);
    var videoElement = '<video width="100%" height="auto" controls><source src="' + videoURL + '" type="video/mp4"></video>';
    $('#videoContainer').html(videoElement);
  });
  