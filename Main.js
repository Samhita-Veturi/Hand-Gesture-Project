Webcam.set({
    height: 250,
    width: 450,
    image_format: 'png',
    png_quality: 200
});
Camera = document.getElementById("Camera");
Webcam.attach("Camera");
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = "<img src='" + data_uri + "' id='Img_C'>"
    })
}
console.log("ml5 version: " + ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wx-gqGunE/model.json', MLoaded);
function MLoaded(){
    console.log("Model Loaded!")
    Album();
}
function Album(){
    synth = window.speechSynthesis;
    speakData = "Model Loaded!";
    UtterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(UtterThis);
}