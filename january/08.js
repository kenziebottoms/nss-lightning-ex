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
}

// ref: https://stackoverflow.com/questions/8312459/iterate-through-object-properties

// active, inactive
for (let subset in customers) {
    if (customers.hasOwnProperty(subset)) {
        // name, age, member_level, etc.
        for (let property in customers[subset]) {
            if (customers[subset].hasOwnProperty(property)) {
                let object = customers[subset][property];
                object.id = property;
            }
        }
    }
}

document.getElementById("result").innerHTML = JSON.stringify(customers);
console.log(customers);