// let number = [1,2,3,4,5,"rajveer","aniket"]
// for (let i = 0; i < number.length; i++) {
//    console.log(number[i])
    
// }



// print value from 1 to 100


// for (let i = 0; i <= 100; i++) {
//    console.log (i);
    
// }
// for (let i = 0; i <= 100; i=i+2) {
//    console.log (i);
    
// }
// for (let i = 100; i <= 100; i**2) {
//    console.log (i);
    
// }
// for (let i = 0; i <= 100; i*2) {
//    console.log (i);
    
// }



// for (let age = 1 ; age <=100 ; age++) {
    
//     if (age >= 18 && age <= 80) {
//         console.log(age, "you are elligible for driving licence")
//     } else {
//         console.log("you are not elligible for driving licence")
//     }
    
// }



//  age related question 


// let ages=["rajveer",19,18,45,26,6,9,10,21,2,25,5]

// for (let i = 0; i < ages.length; i++) {
//     let age = ages[i];

//     if (age >= 18 && age <= 80) {
//         console.log(age, "you are elligible for driving licence")
//     } else {
//         console.log(age , "you are not elligible for driving licence")
//     }
// }




// age related question 




// let access=[25,28,34,78,65,90,56,17,18,39,100,101,"rajveer"]

// for(let i=0; i<access.length ; i++){
//     let age=access[i];

//     if(age>1 && age<18){
//         console.log(age,"you can get an access to playstore");
//     }else if(age>=18 && age<30){
//         console.log(age, "you can get an access to pub");
//     }else if(age>30 && age<60){
//         console.log(age, "you can get an access to jobspace");
//     }
//     else if(age>=60 && age<=100){
//         console.log(age, "you can get an access to bonus life");
//     }else{
//         console.log(age, "there is something an error");
//     }
// }




// if the number is divisible by 3 or 5 


// let number=[3,2,10,46,78,93,90,40,38,33,29,25,60,"rajveer"];
// for(let i=0; i<number.length; i++){
//     let alarm=number[i] ;
//     if(alarm % 3===0 && alarm % 5 ===0){
//         console.log("fizz buzz", alarm);
//     }else if(alarm%3===0){
//         console.log("fizz", alarm);
//     }else if(alarm%5===0){
//         console.log("buzz", alarm);
//     }else{
//         console.log("error" ,alarm)
//     }

// }



// number is odd or even 

// let number=[2,5,7,4,3,78,90,46,77]
// for(let i=0; i<number.length; i++){
//     let value=number[i];
//     if (value%2===0) {
//         console.log("numeber is even", value)
//     }else {
//         console.log("numeber is odd", value)
//     }
// }





// string example 

// Write a for loop that iterates over an array of names. If a name starts with the letter "A", print "Name starts with A: X" where X is the actual name. Otherwise, print "Other name: X". 



// let names=["rajveer", "Amber" , "pavneet","Anosh"]

// for(let i=0; i < names.length;i++){
//     let name=names[i];
//     if (name.charAt(0).toUpperCase()==="A") {
//         console.log("Name starts with A" ,name)
//     }else{
//         console.log("Other Name" , name)
//     }
// }




// Suppose you have an array of numbers called data. Write a program that finds all pairs of numbers in the array whose sum is equal to a given target number target. The program should print each pair of numbers in the format "X + Y = target".   



// let data=[2,10,5,18,19,1,17,3,16,15,4]
// let target=20;

// for (let i = 0; i < data.length; i++) {
//     for (let j=i+1; j < data.length; j++) {
//         let num1 = data[i];
//         let num2 = data[j];
//         let sum=num1+num2;

//         if (sum==target) {
//             console.log(num1, "+", num2, "=", target)
//         }  
//     } 
// }





// let age=[12,34,48,90,56,81,16,"rajveer"]

// for(data of age){
//     if(data<18 || data>80){
//         console.log("you are not elligble for dl " , data)
//     }else if(data>18 && data<80){
//     console.log("your are elligble for dl " , data)
// }else{
//     console.log("there is something an error" , data)
// }

// }



// Addition of three number and we have to get the target from the array 


// const array = [10,20,30,25,10,40,5,20,15,45];
// const target = 50;

// for(let i=0 ; i <array.length ; i++ ){
//     for(let j=i+1 ; j<array.length ; j++){
//         for(let k=j+1; k<array.length; k++){

//             if(array[i] + array[j] + array[k] === target){
//                 console.log(array[i] , " + " , array[j] , "+",  array[k] , "=" , array[i] + array[j] + array[k] );
//             }

//         }

//     }
// }



// subtraction of 2 number from an array an we hav to get the target 

// const array = [5,70,55,84,26,67,90,78,57,30,20,5];
//  const target = 50;

// for(let i=0; i<array.length; i++){
//     for(let j=i+1; j<array.length; j++){

//         if(array[i]-array[j] === target){
//             console.log(array[i] , " - " , array[j] , " = ", array[i] - array [j])
//         }
//     }
// }



// if we wanted the commas after every 3 digit 

// let num=100000000.50000;

// let numformatted= num.toLocaleString("en-IN",{
//     minimumFractionDigits:2,
//     style:"currency",
//     currency:"USD"
// });
// console.log(numformatted);

let arr =[2,3,5,5,32,54,23,12,45,23,43,1,34,65,1,54,6,33,4,9,7]
let target =25;

 for (let i=0;i<arr.length-4;i++){
    for(let j=i+1;j<arr.length-3;j++){
        for(let k=j+1;k<arr.length-2;k++){
            for(let l=k+1; l<arr.length;l++){
                if(arr[i] + arr[j] + arr[k] + arr[l] == target){

                    console.log(arr[i] ,"+" ,arr[j] ,"+", arr[k] ,"+", arr[l] , "=" ,arr[i] + arr[j] + arr[k] + arr[l], "=target")
                }
            }
        }
    }
}