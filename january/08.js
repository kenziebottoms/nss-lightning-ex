let customers = {
    active: {
        a87b6345: {
            name: "Gary Harrison",
            age: 23,
            member_level: "gold"
        },
        b345hy66: {
            name: "Harry Garrison",
            age: 34,
            member_level: "silver"
        },
        nh56yht8: {
            name: "Mary Terryson",
            age: 78,
            member_level: "platinum"
        },
        j677yd456: {
            name: "Barry Sonnyman",
            age: 44,
            member_level: "gold"
        }
    },
    inactive: {
        ur56tfgt: {
            name: "Barb Justice",
            age: 56,
            member_level: "none"
        },
        d56gt6: {
            name: "Jane L'eggo",
            age: 11,
            member_level: "none"
        }
    }
};

// active, inactive
for (let subset in customers) {
    let keys = Object.keys(customers[subset]);
    // name, age, member_level, etc.
    keys.forEach(key => {
        let object = customers[subset][key];
        object.id = key;
    })
}

document.getElementById("result").innerHTML = JSON.stringify(customers);
console.log(customers);