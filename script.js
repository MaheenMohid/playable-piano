const pianoKeys = document.querySelectorAll('.piano-keys .key')
volumeSlider = document.querySelector('.volume-slider input')
keysChecked = document.querySelector('.key-checkbox input')

let allKeys = [],
  audio = new Audio('tunes/a.wav')
// by default, audio src is "a" tune

const playTune = (key) => {
  // passing audio src based on key pressed

  audio.src = `tunes/${key}.wav`

  // playing audio
  audio.play()

  const clickedKey = document.querySelector(`[data-key="${key}"]`)

  //   adding active class to the clicked key
  clickedKey.classList.add('active')

  setTimeout(() => {
    //   Removing active class after 150ms from the clicked key

    clickedKey.classList.remove('active')
  }, 150)
}

pianoKeys.forEach((key) => {
  // adding data-key value to the allKey array
  allKeys.push(key.dataset.key)
  // calling playTune function with passing data-key value as an argument
  key.addEventListener('click', () => playTune(key.dataset.key))
})

const handleVolume = (e) => {
  // passing the range slider value as an audio volume
  audio.volume = e.target.value
}

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle('hide'))
}

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key)
}

keysChecked.addEventListener('click', showHideKeys)
volumeSlider.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)
