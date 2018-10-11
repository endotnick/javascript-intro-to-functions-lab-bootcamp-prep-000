function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {

}

function logWhisper(string) {

}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return 'I can\'t hear you!'
  }
  if (string === shout(string)) {
    return 'YES INDEED!'
  }
}
