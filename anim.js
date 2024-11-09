// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "We're stressing out", time: 22 },
  { text: "Over nothing real", time: 28 },
  { text: "So tell me what it's about", time: 33 },
  { text: "Tell me what you feel", time: 39 },
  { text: "Relax", time: 50 },
  { text: "Take it easy", time: 56 },
  { text: "Lie down next to me", time: 62 },
  { text: "Forget your worries", time: 68 },
  { text: "You have the time you need", time: 96 },
  { text: "There will be tommorow", time: 101 },
  { text: "So don't believe what you read", time: 107 },
  { text: "Cause everything will fall", time: 112 },
  { text: "Relax", time: 126 },
  { text: "Take it easy", time: 129 },
  { text: "Lie down next to me", time: 135 },
  { text: "Forget your worries", time: 141 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);