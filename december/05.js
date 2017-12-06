let song = {
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    rickRoll: () => "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

// let album = {
//     title: "Whenever You Need Somebody",
//     released: 1987,
//     songs: [song]
// };

newSong = Object.create(song);

newSong.title = "Whenever You Need Somebody";
newSong.reputation = "not quite as bad";
newSong.memeLevel = 0;

// newSong.hasOwnProperty("rickRoll") = false
// newSong.hasOwnProperty("memeLevel") = true