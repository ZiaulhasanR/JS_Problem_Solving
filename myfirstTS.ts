let numbers: number[] = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
const totalSum: number = numbers.reduce((accumulator: number, number: number): number => {
    return accumulator + number;
}, 0);
console.log(totalSum);