const quoteArea = document.querySelector("#main-quote");
const btnVal = document.querySelector("#btn");
const authName = document.querySelector(".author .authorName");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");
const quoteUrl = "https://api.quotable.io/random"
function quote(){
    btnVal.classList.add("loading")
    btnVal.innerText = "Loading Quote...";
    fetch (quoteUrl)
    .then(res=>res.json())
    .then(data=>{
        quoteArea.innerText = data.content;
        authName.innerText = data.author;
        btnVal.innerText = "New Quote";
        btnVal.classList.remove("loading")
    });

}
soundBtn.addEventListener("click",()=>{
    let speakval = new SpeechSynthesisUtterance(`${ quoteArea.innerText} by ${authName.innerText}`)
    speechSynthesis.speak(speakval)
})
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteArea.innerText);
})
twitterBtn.addEventListener("click",()=>{
    let tURL = `https://twitter.com/tweet?url=${quoteArea.innerText}`;
    window.open(tURL, "_blank")
})

btnVal.addEventListener("click",quote)