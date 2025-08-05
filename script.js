const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");

let count = 2;

const gifs = [
  "cat-heart.gif",
  "rusure.gif",
  "3shocked-1.gif",
  "4.crying.gif",
  "5.crying.gif",
  "idc.gif"
];

// Preload GIFs
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

no.addEventListener("click", () => {
  if (count === 2) {
    gif.src = "rusure.gif";
    text.innerHTML = "You meant to press YES right?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count === 3) {
    gif.src = "3shocked-1.gif";
    text.innerHTML = "Your hand must have slipped right?🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count === 4) {
    gif.src = "4.crying.gif";
    text.innerHTML = "I'm gonna cry 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count === 5) {
    gif.src = "5.crying.gif";
    text.innerHTML = "Pretty Please 🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  gif.src = "idc.gif";
  text.innerHTML = "Knew it babe 😘";

  const letter = document.createElement("div");
  letter.classList.add("popup-letter");
  letter.innerHTML = `
    <h2>to my Asawa 💌</h2>
    <p>Happy Monthsarry Asawa ko!<br>
    Tadaaaaaa, Another month to celebrate asawa ko and still counting for our ups and downs nga atu-ang atubangon, thank you asawa I'm very grateful each day because naa ka asawa ko. You're my hope, my home, nag-iisa kung tinatangi.  <br>
    Every moment with you is a gift I’ll never take for granted. I love you Asawa ko mwuaaaaaa ❤️</p>
  `;
  document.body.appendChild(letter);

  yes.style.display = "none";
  no.style.display = "none";
});
