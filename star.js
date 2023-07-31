let numbers = [];
function fill(n, m, len) {
    for (let i = 0; i < len; i++) {
        if (n <= m) {
            numbers.push(n);
            n++;
        }
    }
    return numbers;
}
fill(-10, 10, 21);
console.log(numbers);


let reversNumbers = [];
function revers() {
    for (let item of numbers.reverse()) {
        if (item === -1) {
            break;
        }
        reversNumbers.push(item ** 2);
    }
    return reversNumbers;
}
revers();
console.log(reversNumbers);




