const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
let authorName = document.getElementById("authorName");
let count = 0;
let quote = document.getElementById("quote");
let btn = document.getElementById("btn");
async function getQuote(i) {
    let promise = await fetch(apiUrl);
    let result = await promise.json();
    quote.innerText = result[i].text;
    authorName.innerText = "Author:  " + result[i].author;
}
getQuote(0);
btn.addEventListener('click', () => {
    count++;
    getQuote(count);
})