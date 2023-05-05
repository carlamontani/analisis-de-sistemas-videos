const videoFile = document.getElementById('videoFile');
console.log("hola")
console.log(videoFile); // logs the name of the uploaded video file
console.log("hola2")


const videoFileInput = document.getElementById('videoFile');
    const videoPreview = document.getElementById('videoPreview');

    videoFileInput.addEventListener('change', () => {
      const videoFile = videoFileInput.files[0];
      const videoURL = URL.createObjectURL(videoFile);
      videoPreview.src = videoURL;
    });