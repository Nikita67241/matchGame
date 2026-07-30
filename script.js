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
        
        const enBtn = document.createElement("button");
        enBtn.textContent =  jumbledEnglish[i];
        enBtn.classList.appendChild("english-button");
      
        const esBtn = document.createElement("button");
        esBtn.textContent =  pair.es;
        esBtn.classList.appendChild("spanish-button");

        //adding both buttons to list item
        const li = document.createElement("li");
        li.appendChild(esBtn);
        li.appendChild(enBtn);
    });
}

document.getElementById("generateButton").addEventListener("click", generateJumbledPairs);

generateJumbledPairs();
