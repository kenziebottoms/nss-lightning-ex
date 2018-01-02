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

document.getElementById("result").innerHTML = formatted_quote.join(" ");