const words =[
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