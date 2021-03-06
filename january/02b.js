let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

// dot notation
console.log();
document.getElementById("result").innerHTML = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life + "\t";

// bracket notation
let meaning = "meaning_of_life";
document.getElementById("result").innerHTML += `${hitchhikers_guide.random_facts.ultimate_answer[meaning]}`;