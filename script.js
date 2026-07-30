const words = [
    {es: "Hola", en: "Hello"},
    {es: "Adiós", en: "Goodbye"},
    {es: "Gracias", en: "Thank you"},
    {es: "Por favor", en: "Please"},
    {es: "Sí", en: "Yes"},
    {es: "No", en: "No"},
    {es: "Perro", en: "Dog"},
    {es: "Gato", en: "Cat"},
    {es: "Casa", en: "House"},
    {es: "Coche", en: "Car"},
    {es: "Comida", en: "Food"},
    {es: "Agua", en: "Water"},
    {es: "Amigo", en: "Friend"},
    {es: "Familia", en: "Family"},
    {es: "Escuela", en: "School"},
];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let selectedSpanish = null; // store both the word and its button
let time = 0;
let timerInterval = null;
let matches = 0; // count correct matches


function generateJumbledPairs() {
    // reset timer
    time = 0;
    matches = 0;
    document.getElementById("timer").textContent = "Time: 0s";

    // stop old timer if running
    if (timerInterval) clearInterval(timerInterval);

    // start new timer
    timerInterval = setInterval(() => {
        time++;
        document.getElementById("timer").textContent = `Time: ${time}s`;
    }, 1000);

    const selected = shuffle([...words]).slice(0, 5);
    const jumbledEnglish = shuffle(selected.map(w => w.en));

    const list = document.getElementById("wordList");
    list.innerHTML = "";

    selected.forEach((pair, i) => {
        const esBtn = document.createElement("button");
        esBtn.textContent = pair.es;
        esBtn.classList.add("spanish-button");

        // store both the pair and the button
        esBtn.addEventListener("click", () => {
            selectedSpanish = { pair, button: esBtn };
            esBtn.style.backgroundColor = "lightblue";
        });

        const enBtn = document.createElement("button");
        enBtn.textContent = jumbledEnglish[i];
        enBtn.classList.add("english-button");

        enBtn.addEventListener("click", () => {
            if (!selectedSpanish) return;

            const correctEnglish = selectedSpanish.pair.en;
            const clickedEnglish = enBtn.textContent;

            if (correctEnglish === clickedEnglish) {
                // correct match → mark and remove the right Spanish + English buttons
                selectedSpanish.button.style.backgroundColor = "lightgreen";
                enBtn.style.backgroundColor = "lightgreen";

                selectedSpanish.button.disabled = true;
                enBtn.disabled = true;

                matches++;

                 if (matches === 5) {
                    clearInterval(timerInterval);

                    // delay the alert so the green color appears first
                    setTimeout(() => {
                        alert(`You finished in ${time} seconds!`);
                    }, 300); // 0.3 seconds is enough
                }
            } else {
               // incorrect match → mark both buttons red for 5 seconds
                selectedSpanish.button.style.backgroundColor = "#FF8FA3 ";
                enBtn.style.backgroundColor = "#FF8FA3 ";
                const wrongSpanishBtn = selectedSpanish.button;
                const wrongEnglishBtn = enBtn;
                
                setTimeout(() => {
              wrongSpanishBtn.style.backgroundColor = "pink";
              wrongEnglishBtn.style.backgroundColor = "pink";
              }, 300); 
                setTimeout(() => {
                wrongSpanishBtn.style.backgroundColor = "";
                wrongEnglishBtn.style.backgroundColor = "";
                }, 600); 
            }

            selectedSpanish = null;
        });
        
        const li = document.createElement("li");
        li.appendChild(esBtn);
        li.appendChild(enBtn);
        list.appendChild(li);
    });
}




document.getElementById("generateButton").addEventListener("click", generateJumbledPairs);

