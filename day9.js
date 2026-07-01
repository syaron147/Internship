let fruits=["apple","banana","mango","orange"] //[0,1,2,3]
// //include

// console.log(fruits.includes("basketball")) //it helps to check the element exist or not

// //indexof
// console.log(fruits.indexOf("mango")) //it helps to find the index of the element

// //short
// fruits.sort()
// console.log(fruits) //it short the array in alphabetical order

// //reserve
// fruits.reverse()
// console.log(fruits) //it reserve the array

//splice method
//  fruits.splice(1,2) //it helps to remove the element from the array
// console.log(fruits) //it will print the array after removing the element
 
//forEach Loop Method
// fruits.forEach(function(fruits,index){
//     console.log("the fruit is " + fruits + " at index: " + index)
// })

//msp array method its helps us to return new array by loop through each elements
// let upper=fruits.map(function(fruits){
//     console.log("the fruits are " + fruits)
//     return fruits.toUpperCase()
// })
// console.log(upper) //it will print the array with all the elements in uppercase

// filter method it returns new array containing only the elements that satisfy the conditions
// let number=[1,2,3,4,5,6,7,8,9,10]
// let even=number.filter(function(num){
//     return num%2==0;
// })
// console.log(even)

let number = [1,2,3,4,5,6,7,8,9,10]; 
// let odd=number.filter(function(num){
//     return num%2!==0;
// })
// console.log(odd) 

//reduce method it helps to reduce the array to a single value
let num1=number.reduce(function(num1,num){
    return num1+num
})
console.log(num1)