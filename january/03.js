let nums = [1, 2, 3, 4, "5", 6, "7"];

// goal = [3, 5, 7, 9, 11, 13]

nums.pop();
nums = nums.map(num => (parseInt(num)*2+1));

document.getElementById("result").innerHTML = nums.join(", ");