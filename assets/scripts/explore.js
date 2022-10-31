// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  let select_voice = document.getElementById('voice-select');
  let play_button = document.querySelector("button");
  let face_img = document.querySelector("img");

  addEventListener('load', ()=> {
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      var option = document.createElement("option");
      option.text = `${voices[i].name} (${voices[i].lang})`;
      select_voice.add(option);
    };
  })

  play_button.addEventListener('click', () => {
    let speech_text = document.getElementById("text-to-speak").value
    let voices = synth.getVoices();
    const selectOption = select_voice.value;
    const dictate = new SpeechSynthesisUtterance(speech_text);
    for (let i = 0; i < voices.length; i++) {
      selectOption.includes(voices[i].name) && selectOption.includes(voices[i].lang)
      ? dictate.voice = voices[i] : dictate.voice
    };

    synth.speak(dictate);

    dictate.addEventListener('start', () => {
      face_img.src = "assets/images/smiling-open.png";
    });
  
    dictate.addEventListener('end', () => {
      face_img.src = "assets/images/smiling.png";
    });
  })
}