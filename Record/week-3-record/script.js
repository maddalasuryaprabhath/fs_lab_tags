// Utility function to print array elements
function printList(arr) {
    console.log("Array:", arr.join(" "));
}

// Function to calculate total sum
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to average
function getAvg(arr) {
    if (arr.length === 0) return 0;
    return getSum(arr) / arr.length;
}

// Function to find maximum
function getMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// Function to find minimum
function getMin(arr) {
    if (arr.length === 0) return undefined;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// Function to check elemen
function containsVal(arr, target) {
    return arr.includes(target);
}

// Function to find even numbers
function filterEvens(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}

// Function to add element
function addVal(arr, item) {
    arr.push(item);
    return arr;
}

// Function to remove last element
function removeVal(arr) {
    arr.pop();
    return arr;
}

let dataset = [10, 25, 30, 45, 50];

console.log("\nTest 1: Print");
printList(dataset);

console.log("\nTest 2: Calculate Sum");
console.log("Total Sum =", getSum(dataset));

console.log("\nTest 3: Calculate Average");
console.log("Average =", getAvg(dataset));

console.log("\nTest 4: Find Max & Min");
console.log("Max Value =", getMax(dataset));
console.log("Min Value =", getMin(dataset));

console.log("\nTest 5: Search Operations");
console.log("Search 30:", containsVal(dataset, 30));
console.log("Search 99:", containsVal(dataset, 99));

console.log("\nTest 6: Filter Even Numbers");
console.log("Evens:", filterEvens(dataset));

console.log("\nTest 7: Array Modifications");
let added = addVal([...dataset], 60);   
console.log("After addVal(60):");
printList(added);

let removed = removeVal([...dataset]);
console.log("After removeVal():");
printList(removed);

// Edge Cases / Manual Failures
console.log("\nTest 8: Manual Edge Cases");
let emptySet = [];
console.log("Empty Array Average:", getAvg(emptySet)); // Returns 0
console.log("Empty Array Max:", getMax(emptySet));       // Returns undefined
console.log("Type Mismatch Search ('30'):", containsVal(dataset, "30")); // Strict type check fail