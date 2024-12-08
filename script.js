const quotes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "Life is what happens when you're busy making other plans.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Happiness is not something ready made. It comes from your own actions."
];

window.onload = function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-box").innerText = randomQuote;
};

function changeBoxColor(color) {
    const box = document.querySelector(".quote-container");
    box.style.color = color;
    box.style.borderColor = color;
    box.style.backgroundColor = color === "red" ? "#ffe6e6" : color === "blue" ? "#e6f2ff" : color === "green" ? "#e6ffe6" : "#f2e6ff";
    box.style.fontFamily = "Georgia, serif";
    box.style.fontSize = "18px";
}


function convert() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const type = document.getElementById("conversionType").value;
    const result = type === "kg-to-lbs" ? (value * 2.2046).toFixed(2) : (value * 0.4536).toFixed(2);
    document.getElementById("conversion-result").innerText = `Result: ${result}`;
}


function processSeries() {
    const input = document.getElementById("seriesInput").value.split(",").map(Number);
    const max = Math.max(...input);
    const min = Math.min(...input);
    const sum = input.reduce((acc, val) => acc + val, 0);
    const avg = (sum / input.length).toFixed(2);
    const reversed = input.reverse().join(", ");
    document.getElementById("series-result").innerText = `Max: ${max}, Min: ${min}, Sum: ${sum}, Avg: ${avg}, Reversed: ${reversed}`;
}

function clearAll() {
    const textArea = document.getElementById('textarea');
    textArea.value = '';
  }

let isUpperCase = false;
function toggleCapitalization() {
    const textArea = document.getElementById('textarea');
    const lines = textArea.value.split('\n');
    textArea.value = lines.map(line => isUpperCase ? line.toLowerCase() : line.toUpperCase()).join('\n');
    isUpperCase = !isUpperCase;
}
  
function sortLines() {
    const textArea = document.getElementById('textarea');
    const lines = textArea.value.split('\n');
    textArea.value = lines.sort((a, b) => a.localeCompare(b)).join('\n');
}
  
function reverseLines() {
    const textArea = document.getElementById('textarea');
    const lines = textArea.value.split('\n');
    textArea.value = lines.map(line => line.split('').reverse().join('')).join('\n');
}
  
function stripBlankLines() {
    const textArea = document.getElementById('textarea');
    const lines = textArea.value.split('\n');
    textArea.value = lines.map(line => line.trim()).filter(line => line).join('\n');
}
  
function addNumbers() {
    const textArea = document.getElementById('textarea');
    const lines = textArea.value.split('\n');
    textArea.value = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
}
  
function shuffleLines() {
    const textArea = document.getElementById('textarea');
    const lines = textArea.value.split('\n');
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    textArea.value = lines.join('\n');
}
  
document.getElementById('clearAll').addEventListener('click', clearAll);
document.getElementById('capitalize').addEventListener('click', toggleCapitalization);
document.getElementById('sort').addEventListener('click', sortLines);
document.getElementById('reverse').addEventListener('click', reverseLines);
document.getElementById('stripBlank').addEventListener('click', stripBlankLines);
document.getElementById('addNumbers').addEventListener('click', addNumbers);
document.getElementById('shuffle').addEventListener('click', shuffleLines);

