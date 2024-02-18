const textArea = document.querySelector("textarea");
const btnVal = document.querySelector(".btn");

let speech = new SpeechSynthesisUtterance();

btnVal.addEventListener("click",()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech)
})