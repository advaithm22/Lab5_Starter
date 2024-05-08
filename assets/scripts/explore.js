// explore.js

window.addEventListener('DOMContentLoaded', init);
let voices = [];
function init() {
  let dropdown = document.getElementById("voice-select");
  if(typeof speechSynthesis === "undefined"){
    return;
  }
  speechSynthesis.onvoiceschanged = function() {
    voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if(voices[i].default){
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    dropdown.appendChild(option);
  }
  }
  const play = document.querySelector("button");
  const image = document.querySelector("img");
  play.addEventListener("click", function(){
    const chosenVoice = document.querySelector("select");
    const text = document.getElementById("text-to-speak");
    if(text.value !== ""){
      const utterThis = new SpeechSynthesisUtterance(text.value);
      const voice = chosenVoice.selectedOptions[0].getAttribute("data-name");
      console.log(voice);
      for(let i = 0; i < voices.length; i++){
        if(voices[i].name === voice){
          utterThis.voice = voices[i];
        }
      }

      utterThis.onstart = function() {
        image.src = "assets/images/smiling-open.png";
      };

      utterThis.onend = function(){
        image.src = "assets/images/smiling.png"
      }

    speechSynthesis.speak(utterThis);
  }
  });

}
