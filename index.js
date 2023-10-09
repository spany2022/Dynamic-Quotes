
let quote = document.querySelector("#quotes");
let author = document.querySelector("#authors");
let btnQuote = document.querySelector("#newQuotes");
let actualdata = []; // Initialize as an empty array

const getNewQuotes = () => {
    if (actualdata.length > 0) {
        let update = Math.trunc(Math.random() * actualdata.length);
        quote.innerHTML = `${actualdata[update].text}`;
        author.innerHTML = `${actualdata[update].author.split(',')[0].trim()}`;
    } else {
        quote.innerHTML = "Loading...";
        author.innerHTML = "";
    }
}

let getData = async () => {
    try {
        let apidata = await fetch("https://type.fit/api/quotes");
        actualdata = await apidata.json();
        getNewQuotes();
    } catch (error) {
        console.log(`The error is ${error}`);
        quote.innerHTML = "Failed to fetch quotes.";
        author.innerHTML = "";
    }
}

btnQuote.addEventListener("click", getNewQuotes);
getData();
