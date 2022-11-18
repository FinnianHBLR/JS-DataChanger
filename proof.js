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

// Sort - Normal sort with numbers will compare UTF-16 length. To sort numbers you should use a function.
console.log(testArray.sort());
console.log(testArray.reverse());


const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

// Descending 
function sorterDescending(a, b) {
    return b-a;
}

// Ascending 
function sorterAscending(a, b) {
    return a-b;
}
// b-a to reverse numbers.
console.log(array1.sort(sorterDescending));
console.log(array1.sort(sorterAscending));


// Find - Finds the first element that meets the criteria
function condition(element){
    return element >= 10;
}

console.log(array1.find(condition))

// For loops - for, for/in, for/of, while/ do/while.

// Start from 1 and count to 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}
// log each array element.
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
// in Array ( shortcut for array.length basically.)
for (let i in array1){
    console.log(i);
    console.log(array1[i]);
}

// For each
function readData(value, index, array){
    console.log(`index: ${index} value: ${value}`);
}
array1.forEach(readData);
    // alt with inline function.
array1.forEach(value => console.log(`Alt ${value}`))

// OF function. I like this one.
for(let i of array1){
    console.log(i)
}

// Objects
let cars = [
    {
        type: 'BMW',
        model: '325ci'
    },
    {
        type: 'Jag',
        model: 'XJL'
    }

]

for(let i of cars){
    console.log(i.type);
}

// math operators
    // Exponentiation 
console.log(5**2);

    // Modulus
console.log(2%3)

function calc(a){
    if(a%2 == 0) {
        return "Even number";
    } else {
        return "Odd Number";
    }
}
console.log(calc(3))

console.log(Object.keys(cars[0]));