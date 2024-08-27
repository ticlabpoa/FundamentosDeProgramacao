function dividir(a, b) {
    if(b === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
    console.log(resultado);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
}

try {
    const resultado = dividir(10, 2);
    console.log(resultado);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
} finally {
    console.log("Operação de divisão finalizada.");
}

const numbers = [1, 2, 3, 4, 5, 6, -1, 7, 8, 9, 10, -9];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue; // Ignora números negativos
    }

    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < 0) {
            continue; // Ignora números negativos
        }

        if (numbers[i] + numbers[j] === 10) {
            console.log(`Pares que somam 10: ${numbers[i]}, ${numbers[j]}`);
            break; // Sai do loop interno assim que encontrar um par
        }
    }
}
