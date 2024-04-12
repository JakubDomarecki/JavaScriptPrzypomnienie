let numbers =  [];

for (let i = 0; i <= 10; i++) {
    numbers.push(Math.floor(Math.random() * 60) + 1);
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        numbers[i]++;
    }
}
console.log(`zmodyfikowana tablica ${numbers}`);
