let clusterfuck = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];

let newClusterfuck = clusterfuck.map(item => typeof(item));

console.log(newClusterfuck);