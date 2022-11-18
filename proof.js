// Arrays

testArray = ['BMW', 'Ford', 'Jag']

// Add nissan to array.
testArray[3] = 'Nissan'
console.log(Object.keys(testArray));
console.log(testArray[3]);
// Remove Nissan 
// testArray.length = 2

// Add two arrays together
addArray = ['Kia']
testArray.concat(addArray);
console.log(testArray);
// Swap copy Nissan to start
testArray.copyWithin(0, 3)
console.log(testArray)
// Put BMW back in
testArray[0] = 'BMW';
console.log(testArray)

// Every element is bigger or equal to 2 letters RETURNS TRUE/FALSE
function checker(element, index, array){
    return element.length > 2;
}
console.log(testArray.every(checker))

// The same but filters out elements that don't meet the condition FILTERS
function checkerRemove(element, index, array){
    return element.length > 3;
}
console.log(testArray.filter(checkerRemove));

// MAP
let dobules = testArray.map((element) => element+element);
console.log(dobules)

// SLICE provide with index to start/end at
    // Remove the first entry
console.log(testArray.slice(1))
    // Remove the first and last
console.log(testArray.slice(1, 3))

// Splice
    // Start at index 0, remove the first 1 and insert 2.
testArray.splice(0, 1, 'BMW 325ci', 'BMW 328i');
// inserts at index 1
console.log(testArray);

// Pop - Removes the last element and returns it (basically clipping it off)
    // Result in Nissan (being taken off and returned)
console.log(testArray.pop());
console.log(testArray);

// Push - Pushes one TO THE END OF THE ARRAY on and returns the length.
console.log(testArray.push('Nissan'));
console.log(testArray);
// For loops


// Objects


// math operators
