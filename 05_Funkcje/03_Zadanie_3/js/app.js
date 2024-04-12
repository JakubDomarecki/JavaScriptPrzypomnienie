function calculateTip(amount, rating) {
    switch (rating) {
        case 'Bardzo dobra obsługa':
            return `${amount * 0.25}zł`;
        case "Dobra obsługa":
            return amount * 0.2;
        case "Średnia obsługa":
            return amount * 0.15;
        case "Zła obsługa":
            return 0;
        default:
            return "Opis nieczytelny";
    }
}

const calculate = calculateTip(100,'Bardzo dobra obsługa');
console.log(calculate);