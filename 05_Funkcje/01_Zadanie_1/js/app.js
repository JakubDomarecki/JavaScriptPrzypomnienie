function SumArray(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

const numbers = [1, 2, 3];
let result = SumArray(numbers);
console.log(result);