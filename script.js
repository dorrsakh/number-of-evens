let arr = prompt("Enter a list of numbers of your choice: (for example: 1 2 -44 68 39)").split(" ");
let res = [];

for (let num of arr) {
    num = Number(num);
    if (num % 2 === 0){
        res.push(num);
    }
}
console.log(res.length);