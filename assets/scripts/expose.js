// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  // TODO
  let img_select = document.querySelector('#horn-select');
  let slider = document.getElementById('volume-controls');
  let play_button = document.querySelector('button');

  
  
  img_select.addEventListener('input', () => {
    let select_value = img_select.value;
    let result = document.querySelector("img");

    result.src = select_value == 'air-horn' ? "assets/images/air-horn.svg"
      : select_value == 'car-horn' ? "assets/images/car-horn.svg"
      : select_value == 'party-horn' ? "assets/images/party-horn.svg" 
      : "assets/images/no-image.png";
  });

  slider.addEventListener('input', () => {
    let range_val = slider.querySelector('#volume').value;
    let vol_img = slider.querySelector("img");
    
    vol_img.src = 
    range_val == 0 ? "assets/icons/volume-level-0.svg"
      : range_val < 33 ? "assets/icons/volume-level-1.svg"
      : range_val < 67 ? "assets/icons/volume-level-2.svg"
      : range_val >= 67 ? "assets/icons/volume-level-3.svg"
      : vol_img;
  })

  play_button.addEventListener('click', () => {
    var audio = document.querySelector('audio');
    const range_val = slider.querySelector('#volume').value;
    const select_value = img_select.value;

    audio.src = 
     select_value == 'air-horn' ? "assets/audio/air-horn.mp3"
      : select_value == 'car-horn' ? "assets/audio/car-horn.mp3"
      : select_value == 'party-horn' ? "assets/audio/party-horn.mp3" 
      : "";
      
    audio.volume = range_val / 100;
    select_value =='party-horn' ? (audio.play(), jsConfetti.addConfetti())
    : audio.play();

  })
}