let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

// for
let fave_demo1 = [];
for (let x=0; x<ages.length; x++) {
    if (ages[x] >= 18 && ages[x] <= 49) {
        fave_demo1.push(ages[x]);
    }
}

// forEach
let fave_demo2 = [];
ages.forEach(x => {
    if (x >= 18 && x <= 49) {
        fave_demo2.push(x);
    }
});

// filter
let fave_demo3 = ages.filter(x => (18<=x && x<=49));

console.log(fave_demo1);
console.log(fave_demo2);
console.log(fave_demo3);