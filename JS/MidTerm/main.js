// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(age) {

if(age >= 25){
return "You can do pretty much anything."
}else if(age <= 24 && age >= 18){
return "You can vote but not rent a car."
}else if(age == 16 || age == 17){
return "You can drive but not vote."
}else if(age < 16){
return "You can't drive."
}
}

function oddIndices(arr){
let oddArr = []   
for(let i = 1; i < arr.length; i += 2){
    

    
   oddArr.push(arr[i])
  
} return oddArr
}

function numOddValues(arr){

let arrOdd = []
let arrEven = []

for(let i = 0; i < arr.length; i++){


if(i % 2 !== 0){
arrOdd.push(arr[i])
}else{
arrEven.push(arr[i])   
}
}
}
return arrOdd

function numOddValues(arr){
let count = 0
for(let i = 0; i < arr.length; i++){
 if (arr[i] % 2 !== 0){
count++
 }
 return count
}
}


function averageStringLength(arr){
let total = 0
for(let i = 0; i< arr.length; i++){
total = total + arr[i].length
}
return total / arr.length
}
function firstPunctuationIndex(str){

let str = firstPunctuationIndex.indexOf(".", "?", "!")
return str
} 


    



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
