function fibonacci(n) {
    let fibSeries = [];
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= n; i++) {
        fibSeries.push(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return fibSeries;
}

function printFibonacci() {
    const n = parseInt(prompt("Enter the number of terms in the Fibonacci sequence:"));

    if (Number.isInteger(n) && n < 100 && n > 0) {
        const fibSeq = fibonacci(n);
        alert("Fibonacci sequence:\n" + fibSeq.join(", "));
    } else {
        alert("Invalid input. Please enter a positive integer less than 100.");
    }
}

printFibonacci();
