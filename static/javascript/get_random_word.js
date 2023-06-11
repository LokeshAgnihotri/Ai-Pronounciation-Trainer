function chooseRandomWord() {
    fetch('http://127.0.0.1:5000/random_word')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        const randomWord = data.random_word;
        const randomWordIpa = data.random_word_ipa;
        const randomWordAudio = data.pronunciation_audio;

        document.getElementById("referenceWord").value = `Your random word is: ${randomWord} and its phonetics are: ${randomWordIpa}`;

        document.getElementById("audio").src = randomWordAudio
      });
  }

  document.getElementById("suggestRandomWord").addEventListener("click", chooseRandomWord);

