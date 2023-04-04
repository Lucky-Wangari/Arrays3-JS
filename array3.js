//Write a function that accepts an array of strings and console.logs each element using a for loop.
let words = ["Fly", "Sing", "Doing", "Dancing"];
function word(words){
for(let i = 0; i < words.length; i++){
    console.log(words[i]);

} 
}
word(words);

//Write a function that accepts an array of numbers and uses the forEach() method to console.
//log each number multiplied by 2.
let numbers = [1,2,3,4,5,6,7];
function nums(numbers){


numbers.forEach(number=>{
    console.log(number * 2)
    
})
}
nums(numbers);

//Write a function that takes in an array of numbers and consoles the first four 
//items multiplied by 8 and the last two added by 5. Console the array with the new values
let numericals = [5,6,7,8,9,10];
mutiply(numericals)
function mutiply(numericals){
for(let i = 0; i < 4; i++){
    numericals[i]= numericals[i] * 8;
}

for(let x = numericals.length-2; x< numericals.length; x++){
    numericals[x] = numericals[x] + 5;
}    
   
console.log(numericals); 
}

//Write a function that takes in the following array and use a while loop to iterate and break
// when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
wordings(arrNum)
function wordings (arrNum){
let i = 0;
while(i < arrNum.length){
    console.log(arrNum[i]);

if( i ===3) {
    break
 } 
 i++  
 }
}

//Write a function that takes in a an array of strings and use a continue
// statement when the item is at the second index

let fruits= ['apple','plum','banana','strawberries','kiwi'];
moreFruits(fruits)
function moreFruits(fruits){
for(let i = 0; i < fruits.length; i++){
    if(i === 1){
        continue
    }
    console.log(fruits[i])
}
}