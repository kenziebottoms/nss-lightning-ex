let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

let formatted_quote = yoda_quote.slice();

// capitalize "the"
formatted_quote[0] = yoda_quote[0][0].toUpperCase() + yoda_quote[0].substring(1);

// add period
formatted_quote[formatted_quote.length-1] += ".";

// add double quotes
formatted_quote[0] = `&ldquo;${formatted_quote[0]}`;
formatted_quote[4] = `${formatted_quote[4]}&rdquo;`;

// add "Yoda says"
formatted_quote.unshift("Yoda", "says");

// add commas
formatted_quote[1] += ",";
formatted_quote[4] += ",";

document.getElementById("result").innerHTML = formatted_quote.join(" ") + "\n";

// take 2 with map()
let formatted_quote2 = yoda_quote.slice();
// "Yoda says"
formatted_quote2.unshift("Yoda", "says");

// capitalization and commas
formatted_quote2 = formatted_quote2.map(word => {
    if (word == "the") {
        return word[0].toUpperCase() + word.slice(1);
    } else if (word == "teacher" || word == "says") {
        return `${word},`;
    } else {
        return word;
    }
});

// quotes
formatted_quote2[formatted_quote2.length-1] += ".&rdquo;";
formatted_quote2[2] = "&ldquo;" + formatted_quote2[2];

document.getElementById("result").innerHTML += formatted_quote2.join(" ");