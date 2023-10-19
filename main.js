var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function start(){
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var conteudo = event.results[0][0].transcript;
    console.log(conteudo);
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speakData = "Tirando sua selfie em 5 segundos!"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}