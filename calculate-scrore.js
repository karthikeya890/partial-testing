const fs = require('fs');

// Read the Jest result file
const results = JSON.parse(fs.readFileSync('results.json'));

// Calculate the score based on passed tests
const passedTests = results.numPassedTests;
const totalTests = results.numTotalTests;
const score = Math.min(passedTests, 5);  // Ensure maximum score is 5 (or whatever max score you want)

console.log(`Passed Tests: ${passedTests}/${totalTests}`);
console.log(`Score: ${score}`);
process.exit(score); // Exit with the score to pass/fail the test
