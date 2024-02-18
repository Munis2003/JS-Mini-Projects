        const btnVal = document.querySelector(".btn");
const soundVal = document.querySelector("#soundbtn")
const resultVal = document.querySelector("#result")
const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

btnVal.addEventListener("click",()=>{
    const inputVal = document.querySelector("#inpText").value;
    fetch(`${apiURL}${inputVal}`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        
        resultVal.innerHTML=`
        <div id="word">
        <h3>${inputVal}</h3>
        <i id="soundbtn" class="fa-solid fa-volume-high"></i>
    </div>
    <div id="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetics[0].text || ""}</p>
    </div>
        <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
        
            <p class="example">${data[0].meanings[0].definitions[0].example || ""}</p>`;
})
.catch(()=>{
    resultVal.innerHTML = `<h3 class="error"> Couldn't Find The Word </h3>`;
})

})

function sound(){
    let speakword = SpeechSynthesisUtterance(inputVal)
    speechSynthesis.speak(speakword)
}
soundVal.addEventListener("click",sound)    






