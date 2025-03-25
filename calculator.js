const readline = require('readline');

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
        return this;
    }

    reset() {
        this.result = 0;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Ejemplo de uso
const calculator = new Calculator();
try {
    calculator.add(10).subtract(2).multiply(3).divide(2);
    console.log("Resultado:", calculator.getResult()); // Resultado: 12
    calculator.reset();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Ingrese un número para sumar: ", (input) => {
        const number = parseFloat(input);
        if (!isNaN(number)) {
            calculator.add(number);
            console.log("Resultado después de sumar:", calculator.getResult());
        } else {
            console.log("Entrada no válida.");
        }
        rl.close();
    });
} catch (error) {
    console.error(error.message);
}
