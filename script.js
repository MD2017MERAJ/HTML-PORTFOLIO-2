function convertTextToSpeech() {
    const text = document.getElementById('text').value.trim();
    if (!text) {
        alert('Please enter some text.');
        return;
    }

    // Check if speech synthesis is supported by the browser
    if ('speechSynthesis' in window) {
        // Create a new speech synthesis object
        const synth = window.speechSynthesis;

        // Create a new speech utterance
        const utterance = new SpeechSynthesisUtterance(text);

        // Speak the text
        synth.speak(utterance);
    } else {
        alert('Sorry, your browser does not support text-to-speech conversion.');
    }
}
function clearText() {
    document.getElementById('text').value = ''; // Clear the text in the textarea
}