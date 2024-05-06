// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  const horn = document.getElementById('horn-select');
  const hornImg = document.querySelector('img');
  const audio = document.querySelector('audio');
  horn.addEventListener('change', function() {
    const chosen = horn.value;
    console.log(chosen);
    if(chosen === 'air-horn'){
      hornImg.src = '/assets/images/air-horn.svg';
      audio.src = '/assets/audio/air-horn.mp3';
    }
    if(chosen === 'car-horn'){
      hornImg.src = '/assets/images/car-horn.svg';
      audio.src = '/assets/audio/car-horn.mp3';
    }
    if(chosen === 'party-horn'){
      hornImg.src = '/assets/images/party-horn.svg';
      audio.src = '/assets/audio/party-horn.mp3';
    }
    console.log(hornImg.src);
  });
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  volume.addEventListener('change', function(){
    const vol = parseInt(volume.value);
    console.log(vol);
    if(vol == 0){
      volumeIcon.src = '/assets/icons/volume-level-0.svg';
      console.log(volumeIcon.src);
    } else if (vol > 0 && vol < 33){
      volumeIcon.src = '/assets/icons/volume-level-1.svg';
      console.log(volumeIcon.src);
    } else if (vol >= 33 && vol< 67){
      volumeIcon.src = '/assets/icons/volume-level-2.svg';
      console.log(volumeIcon.src);
    } else {
      volumeIcon.src = '/assets/icons/volume-level-3.svg';
      console.log(volumeIcon.src);
    }
    audio.volume = vol / 100;
  });
  const play = document.querySelector('button');
  play.addEventListener('click', function(){
    const hornChosen = horn.value;
    if(hornChosen != 'select'){
      audio.play();
      if(hornChosen === 'party-horn'){
        jsConfetti.addConfetti();
      }
    }
  });
}