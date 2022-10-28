const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.querySelector(".result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-btn");


btn.addEventListener("click", async () => {
  try {
    let inpWord = document.querySelector("#inp-word").value;

    const response = await fetch(`${url}${inpWord}`);

    const res = await response.json();
    console.log(res);
    
    result.innerHTML = `<div class="word">
      <h3>${inpWord}</h3>
      <button onclick = "playSound()">
        <i class="fas fa-volume-up"></i>
      </button>
      </div>
      <div class="details">
         <p>${res[0].meanings[0].partOfSpeech}</p>
         <p>${res[0].phonetic}</p>
      </div>
      <p class = "word-meaning">
        ${res[0].meanings[0].definitions[0].definition}
      </p>
      <p class = "word-example"><em>
      ${res[0].meanings[0].definitions[0].example || ""}
      </p>`;
    sound.setAttribute("src", `${res[0].phonetics[1].audio}`)
  }
  catch (error) {
    
    result.innerHTML = `<h3 class = "error">Couldn't Find The Word</h3>`;
  }
})


function playSound() {
  sound.play();
}

