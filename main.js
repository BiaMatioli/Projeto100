var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speakData = "Tirando sua selfie em 5 segundos";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    
    setTimeout(function (){
        imgId = "selfie1"
        takeSnapshot();
        salvar();
    }, 5000);

    setTimeout(function (){
        imgId = "selfie2"
        takeSnapshot();
        salvar();
    }, 5000);

    setTimeout(function (){
        imgId = "selfie3"
        takeSnapshot();
        salvar();
    }, 5000);
}

function takeSnapshot() {

    console.log();

    Webcam.snap(function (data_uri){
        if (imgId == "selfie1") {
            document.getElementById("resultado").innerHTML = "<img id='selfie1' src='" + data_uri + "'></img>";
        }

        if (imgId == "selfie2") {
            document.getElementById("resultado").innerHTML = "<img id='selfie2' src='" + data_uri + "'></img>";
        }

        if (imgId == "selfie3") {
            document.getElementById("resultado").innerHTML = "<img id='selfie3' src='" + data_uri + "'></img>";
        }
    });
}

function salvar() {
    link = document.getElementById("link");
    foto = document.getElementById("selfie");

    link.href = foto;
    link.click();
}
