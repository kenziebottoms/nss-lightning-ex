let occs = [
    {name: "Bob", department: "sales", title: "sales manager"},
    {name: "Tina", department: "finance", title: "director of finance"},
    {name: "Randy", department: "IT", title: "hardware guy"},
    {name: "Glenda", department: "C-suite", title: "CEO"}
];

occs.forEach(function(e, i) {
    console.log(`${occs[i].name}'s job title is ${occs[i].title}.`);
});