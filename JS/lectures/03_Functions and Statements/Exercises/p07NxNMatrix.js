function printMatrix(n) {
 let oneLineOutput = (String(n)+" ").repeat(n).trimEnd();
 for (let i = 0; i < n; i++) {
    console.log(oneLineOutput);
    
 }
}

printMatrix(2);