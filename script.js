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

let selectedSpanish = null;

function generateJumbledPairs() {
    // pick 5 correct pairs
    const selected = shuffle([...words]).slice(0, 5);

    // extract english words and shuffle them
    const jumbledEnglish = shuffle(selected.map(w => w.en));

    // clear the UL
    const list = document.getElementById("wordList");
    list.innerHTML = "";

    // create li elements
    selected.forEach((pair, i) => {
        
        const esBtn = document.createElement("button");
        esBtn.textContent =  pair.es;
        esBtn.classList.add("spanish-button");
        //when esbtn clicked
         esBtn.addEventListener("click", () => {
            selectedSpanish = pair;  // store the whole pair
            esBtn.style.backgroundColor = "lightblue"; // highlight
        });

        const enBtn = document.createElement("button");
        enBtn.textContent =  jumbledEnglish[i];
        enBtn.classList.add("english-button");
      
        // When English is clicked
        enBtn.addEventListener("click", () => {
            if (!selectedSpanish) return; // no Spanish selected yet

            const correctEnglish = selectedSpanish.en;
            const clickedEnglish = enBtn.textContent;

            if (correctEnglish === clickedEnglish) {
                // correct match
                enBtn.style.backgroundColor = "lightgreen";
                esBtn.style.backgroundColor = "lightgreen";
                alert("Correct match!");

                // remove both buttons
                esBtn.disabled = true;
                enBtn.disabled = true;
            } else {
                // wrong match
                enBtn.style.backgroundColor = "pink";
                alert("Wrong match!");
            }

            // reset selection
            selectedSpanish = null;
        });

        //adding both buttons to list item
        const li = document.createElement("li");
        li.appendChild(esBtn);  
        li.appendChild(enBtn);
       
        list.appendChild(li);
    });
    
    // add event listeners to buttons and check for matches
    
}



document.getElementById("generateButton").addEventListener("click", generateJumbledPairs);

