const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Dream big and dare to fail.",
    "It always seems impossible until it's done.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Start where you are. Use what you have. Do what you can."
];
const usedIndex = new Set();
let qouteElement = document.getElementById("qoute");
function generateQoute() {
    if (usedIndex.size >= quotes.length) {
        usedIndex.clear();
    }
    while (true) {
        let randomIndex = Math.floor(Math.random() * quotes.length)
        if (usedIndex.has(randomIndex)) continue;

        const qoute = quotes[randomIndex];
        qouteElement.innerText = `${qoute} (${randomIndex + 1})`;
        usedIndex.add(randomIndex);
        break;
    }
}