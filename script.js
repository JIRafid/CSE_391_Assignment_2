const quotes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "The journey of a thousand miles begins with one step.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do."
];
const fonts = [
    "'Arial', sans-serif",
    "'Times New Roman', serif",
    "'Courier New', monospace",
    "'Georgia', serif",
    "'Verdana', sans-serif"
];
function generateQuote() {
    const quoteText = document.getElementById('quote-text');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
}
function changeQuoteStyle(color) {
    const quoteBox = document.getElementById('quote-box');
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const fontSize = Math.floor(Math.random() * (24 - 16 + 1)) + 16; 

    quoteBox.style.backgroundColor = color;
    quoteBox.style.color = getContrastYIQ(color);
    quoteBox.style.border = `4px solid ${getContrastYIQ(color)}`;
    quoteBox.style.fontFamily = randomFont;
    quoteBox.style.fontSize = `${fontSize}px`;
}
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}
window.onload = function() {
    generateQuote();
};

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const convertType = document.getElementById('convertType').value;
    const resultSpan = document.getElementById('result');
    if (isNaN(inputValue)) {
        resultSpan.textContent = 'Please enter a valid number';
        return;
    }
    let convertedValue;
    if (convertType === 'kg-to-lbs') {
        convertedValue = inputValue * 2.2046;
        resultSpan.textContent = `${inputValue} kg = ${convertedValue.toFixed(2)} lbs`;
    } else {
        convertedValue = inputValue * 0.4536;
        resultSpan.textContent = `${inputValue} lbs = ${convertedValue.toFixed(2)} kg`;
    }
}

function analyzeNumbers() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numbers.length === 0) {
        alert('Please enter valid numbers');
        return;
    }
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;
    const reversed = numbers.slice().reverse();
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${input}</td>
        <td>${max}</td>
        <td>${min}</td>
        <td>${sum.toFixed(2)}</td>
        <td>${average.toFixed(2)}</td>
        <td>${reversed.join(', ')}</td>
    `;
    document.getElementById('resultsBody').prepend(row);
    document.getElementById('numberInput').value = '';
}

let isUpperCase = false;

function clearAll() {
    document.getElementById('textArea').value = '';
}

function toggleCapitalize() {
    const textArea = document.getElementById('textArea');
    textArea.value = isUpperCase 
        ? textArea.value.toLowerCase() 
        : textArea.value.toUpperCase();
    isUpperCase = !isUpperCase;
}

function sortText() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n')
        .filter(line => line.trim() !== '')
        .sort((a, b) => a.localeCompare(b));
    textArea.value = lines.join('\n');
}

function reverseLines() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n')
        .map(line => line.split('').reverse().join(''));
    textArea.value = lines.join('\n');
}

function stripBlank() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n')
        .map(line => line.trim())
        .filter(line => line !== '');
    textArea.value = lines.join('\n');
}

function addNumbers() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n')
        .map((line, index) => `${index + 1}. ${line.replace(/^\d+\. /, '')}`);
    textArea.value = lines.join('\n');
}

function shuffleLines() {
    const textArea = document.getElementById('textArea');
    const lines = textArea.value.split('\n')
        .filter(line => line.trim() !== '');
    
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    
    textArea.value = lines.join('\n');
}