
// *** Ignore the following lines ***
import chalk from "chalk";
import { promises } from "dns";
import { readlinkSync } from "fs";
import PromptSync from "prompt-sync";
import prompt from "prompt-sync";
import { Readline } from "readline/promises";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Sebastin";
  const lastName = "Vilan";
  console.log(`Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`);
}


function runExerciseTwo() {
  let firstName = "Narin";
  let lastName = "Karan";
  console.log("\"Hello Narin Karin! Have a nice day!\"");

}

function runExerciseThree() {
   let num1: number = 10;
  let num2: number = 20;
  let sum: number = num1+num2;
  console.log(sum );
  
  let evenNumber: number = 6;
  let oddNumber: number = 11;
  let divitionResult: number = oddNumber/evenNumber;
 
  console.log(divitionResult);
}

  

function runExerciseFour(){
 let radius = Number(readLine("Enter a radius:"));

 let areaCircle = Math.PI * Math.pow(radius, 2);
 let areaSphere = 4 * Math.PI * Math.pow(radius, 2);

 console.log(`Radius: ${radius}, Circle Area: ${areaCircle}, Sphere Area: ${areaSphere}`);
}
 


function runExerciseFive() {
  console.log("Enter consecutive numbers");

  let num1: number = Number(readLine("Number 1: "));
  let num2: number = Number(readLine("Number 2: "));

  if (num1 + 1=== num2 || num2 + 1 ===num1){
    console.log("consecutive");
  }else {
    console.log("Not consecutive");5

  }
  
  }
   

function runExerciseSix() {
 let num: number = Number(readLine("Enter a number:"));
 if (num % 2 === 0){
  console.log("Even");
 }else {
  console.log("Odd");
 }6
}


function runExerciseSeven() {
 let bodyTempC: number = Number(readLine("Enter your body temp(C):"));
 console.log(bodyTempC > 37? "Fever" : "No fever");
}

function runExerciseEight() {
  let grade: string = readLine("Enter your grade:").toUpperCase();
  switch (grade){
    case 'A':
      console.log(`You you got an ${grade}! congratulations`);
      break;
      case'B':
      console.log(`You got a ${grade}! :)`);
      break;
      case 'C':
        console.log(`You got a ${grade}! :|`);
        break;
        case'D':
        console.log(`you got a ${grade}! :(`);
        break;
        case'E':
        console.log(`You got an ${grade}! :'(`);
        break;
        default:
          console.log(chalk.red("You didn't get a grade!"));8

  }
}

function runExerciseNine() {
  let originalInput: string = readLine("Enter a palindrome:");
  let input = originalInput.trim().toLocaleLowerCase().replace(/\w/g, "");
  let inputArray = input.split("");
  let reverseInput = inputArray.reverse().join("");

  if (reverseInput === input){
    console.log(chalk.green(`"${originalInput}" is a palindrome`));
  }else {
    console.log(chalk.green(`"${originalInput}" is not a palindrome`));

  }

} 
function runExerciseTen() {
  //A
  let str = "The quick fox jumped Over the DOG";
  let newStr = str.replace("quick", "brown").replace("DOG", "lazy dog");
 console.log(newStr);
//B
 let word1 = readLine("Enter the first word:").toLowerCase().trim();
 let word2 = readLine("Enter the second word:").toLocaleLowerCase().trim();
 if (word1===word2){
  console.log("The words are the same.");

 }
 //C
 let word = readLine("Enter Donkey:");
 word = word.replace("Don", "Mon");
 console.log(word);
 //D
 let str2 = "I am going to visit Kolmärden zoo tomorrow. I am a big fan of the dolphin SharedWorker. I may watch all dolphin shows during the DynamicsCompressorNode. I would like to take a gondola safari as WEBGL_lose_context. i wish to visit Bamse and his team runExerciseThree.";
 let arr = str2.split("")
 let newArr = arr.map((word) => {
  if (word === "I"){
    return "We";
  }else if(word === "am"){
    return "are";
  }else {
    return word;
  }
 })
 console.log(newArr.join(" "));

 //E
 let str3 = " He is the best teacher";
 let midPoint = str3.indexOf("popular");
 let part1 = str3.slice(0, midPoint);
 let part2 = str3.slice(midPoint, str3.length);

 let updatedStr = part1 + "most" + part2;
 console.log(updatedStr);

 //F
 let startString = " Knowledge is power"
 let knowledgeIndex = startString.indexOf("knowledge");

 let stringwithknowledge = startString.slice(0, knowledgeIndex) + "true" + startString.slice(knowledgeIndex, startString.length)

 let powerIndex = stringwithknowledge.indexOf("power");
 let finalString = stringwithknowledge.slice(0, powerIndex) + "greatest" + stringwithknowledge.slice(powerIndex, stringwithknowledge.length)
 console.log(finalString);

 //G
 let fullStr = "My name is Sebastian Ballin.";
 let index = fullStr.indexOf("Sebastian");
 let name = fullStr.slice(index, fullStr.length)
 console.log(name);

 //H
let str1 = "Arrays are very common in programmering, they look something like:[1, 2, 3, 4, 5]"
let index2 = str1.indexOf("[");
let res = str1.slice(index2, str1.length)
console.log(res);

}


function runExerciseEleven() {
  let operator: string = readLine ("Enter an  operator(+ - * /):");
  let num1: number = Number(readLine("Enter the first number:"))
  let num2: number = Number(readLine("Enter the  second number:"))
  
  switch (operator){
    case'+':
   console.log(num1 + num2);
    break;
    case'-':
    console.log( num1 - num2);
    break;
    case'*':
    console.log( num1 * num2);
    break;
    case'/':
     console.log( num1 / num2);
     break;
     default:
       console.log(chalk.red("Error"));
       break;11
    }

}

function runExerciseTwelve() {
  let input: number = Number (readLine("Enter a number smaller than 100:"))
  for (let index = 1; index <= input; index++){
    console.log(chalk.blue(index));
  }
  for (let index = input; index > 0; index--){
    console.log(chalk.green(index));
  }
  
  let i: number = 1;
  while (i <= input){
    console.log(chalk.blue(i));
    i++;
  }
  
  let j: number =input;
  do {
    console.log(chalk.green(j));
    j--;
  }while (j > 0);

}


function runExerciseThreeten() {
 let secretNumber: number = Math.ceil(Math.random() * 10);

 let keepGuessing: string = "";
 while (keepGuessing != "no"){
  let guess: number = Number(readLine("Guess a number 1-10:"))
  if (guess === secretNumber){
    console.log(chalk.green(`${guess} was correct!`));
    break;
  }
  console.log(chalk.green(`${guess} was incorrect!`));
  keepGuessing = readLine("Do you want to guess again? (yes/no):");
 }
}

interface MultiplicationTable{
  [index: number]: {
    [index: number]: number
  }
}
function runExerciseFourthen() {
   let multiTable: MultiplicationTable = {};
   for (let i = 1; i <= 10; i++){
    multiTable[i] = {};
    for (let j = 1; j <= 10; j++){
      multiTable[i][j] = i * j;
    }
   }

   console.table(multiTable)


}

function runExerciseFifthen() {
  let line: string = "";
  let startCount: number = 9;
  let stars: string = "";
  let spaceCount: number = 4;
  let space: string = "";
  for(let index = 0; index < 5; index++){
    line = "";
    stars = "";
    for (let index = startCount; index > 0; index--){
      stars += "*"
    }
    space = "".repeat(spaceCount);
    line = space + stars + space;
    startCount = startCount - 2;
    spaceCount++;
    if (index % 2 === 0){
      console.log(chalk.yellow.bgBlue(line));
    }else {
      console.log(chalk.gray.bgBlue(line));
    }
  }
}


function runExerciseSixthen() {
  console.log("Keep entering numbers until you enter 0");
  let num: number = Number(readLine("Number:"))
  let sum: number = num;
  let count: number = 0;

  while (num != 0){
    num = Number(readLine("Number:"))
    sum+= num;
    count++;
  }

  console.log(`sum: ${sum}`);
  console.log(`Average: ${sum / count}`);
}


function runExerciseSeventhen() {
    let num = Number(readLine("How many fibonacci numbers?"))
    let seq: number[] = [];

    for (let index = 0; index < num; index++){
      if (seq.length > 1){
        seq.push(seq[index - 1] + seq[index - 2]);
      }else {
        seq.push(index);
      }
    }
    console.log(seq.toString());
}


function runExerciseNinethen(){
   console.log("--Calculate triangle area--");
   const height: number = Number(readLine("Enter height:"));
   const width: number = Number(readLine("Enter width:"));
   const area = height * width /2;
   console.log(`Area: ${area}`);
   return area;
}



function runExerciseTwenty(){
  let x = 20; 
  let y = 5;
  console.log(x, y);

  function swap(a: number, b: number){
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
  }
  [x, y] = swap(x, y);
  console.log(x, y);
}



function runExerciseTwentyOne(){
   const birthdate: Date = new Date(readLine("Enter birthday:"))
   const today: Date = new Date();
   let diff: number = today.getFullYear() - birthdate.getFullYear();

   if (today.getDate() < birthdate.getDate() && today.getMonth() <= birthdate.getMonth()){
    diff--;
   }
   
   console.log(diff);
   return diff;
}



function runExerciseTwentyTwo(){
   const name = readLine("Enter Name:");
   console.log(`Hello ${name}!`);
   const age = runExerciseTwentyOne();
   if (age > 18){
    serveDrink()
   }else {
    let sodaAnswer: string = readLine("Do you want a soda? (yes/no):");
    switch (sodaAnswer){
      case "yes":
        console.log("Soda is served");
        break;
      default:
        console.log("No more option");
        break;
    }
   }
}
function serveDrink(){
  let beerAnswer: string = readLine("DO you want a beer? (yes/No):");
  switch (beerAnswer){
    case "yes":
      console.log("Bear is served");
      break;
      case "no":
        let sodaAnswer: string = readLine("Do you want a soda? (yes/No):");
        switch (sodaAnswer){
          case "yes":
            console.log("Soda is served");
            break;
          default:
            console.log("No more option");
            break;
        }
        break;
        default:
          console.log("No more option");
          break;
       }
  }




function runExerciseTwentyThree(){
   let arr = [5, 21, 7, 12, 9]
   let max = findMax(arr);
   console.log(max);
}

function findMax(arr: number[]){
  return Math.max(...arr);
}
function findMin(arr: number[]){
  return Math.min(...arr);
}



function runExerciseTwentyFour(){
   const input: string = readLine("Enter a string of numbers: (2, 7, 1, 20, 13):");
   const inputArr: number[] = input.split(",").map((element)=>{
    return Number(element)
   });
    const max = findMax(inputArr);
    const min = findMin(inputArr);
    const sum = inputArr.reduce((total, num)=>{
      return total + num;
    }, 0)
      
   const average = sum / inputArr.length;

   console.log(max);
   console.log(min);
   console.log(average);
}



function runExerciseTwentyFive(){
  let totalArr: number[] = [];
  let oddArr: number[] = [];
  let evenArr: number[] = [];
  for(let index = 0; index < 20; index++){
    let rand = Math.ceil(Math.random() * 10);
    totalArr.push(rand);
    if (rand % 2 === 0){
      evenArr.push(rand);
    }else{
      oddArr.push(rand);
    }
  }
  console.log("All:", totalArr.toString());
  console.log("Even:", evenArr.toString());
  console.log("Odd:", oddArr.toString());
}



function runExerciseTwentySix(){
  let arr: number[] = []
  for(let index =0; index < 10; index++){
    arr.push(Number(readLine("Enter a number:")))
  }
  console.log(arr.filter((num)=> {
    return num < 0;
  }

  ));
}



function runExerciseTwentySeven(){
  let arr: number[] = []
  for(let index = 0; index <12; index++){
    arr.push(Number(readLine("Enter a positive number:")))
  }
  let odd = arr.filter((num)=> {
    return num % 2 != 0;
  })
  let even = arr.filter((num)=> {
    return num % 2 === 0;
  })

  console.log(arr.toLocaleString());
  console.log(odd.toLocaleString());
  console.log(even.toLocaleString());
}


function runExerciseTwentyEigth(){
  let randArr: number[] = [];
  let result: number[] = [];

  for (let index = 0; index < 8; index++){
    randArr.push(Math.ceil(Math.random() * 10));
  }
  result = randArr.filter((num)=> {
    return num % 2 === 0;
  }).concat(randArr.filter((num)=> {
    return num % 2 != 0;
  }))

  console.log(randArr.toString());
  console.log(result.toString());

}


function runExerciseTwentyNine(){
  let arr: number[] = [];
  let sizeMin: number = 5;
  let sizeMax: number = 15;
  let siz: number = Math.ceil(Math.random() * (sizeMax - sizeMin)) + sizeMin
  for (let index = 0; index < sizeMax; index++){
    arr.push(Math.ceil(Math.random() * 100));
  }
  console.log(arr.toString());

  let sorted: boolean = false;
  do{
    sorted = false;
    for (let index = 0; index < arr.length; index++){
      if(arr[index] > arr[index + 1]){
        let temp = arr[index + 1];
        arr[index + 1] = arr[index];
        arr[index] = temp;
        sorted = true;
      }
    }
  }while (sorted);

  console.log(arr.toString());
}

function runExerciseThirty(){
  let arr: number[] = [];
  let sizeMin: number = 5;
  let sizeMax: number = 15;
  let size: number = Math.ceil(Math.random() * (sizeMax - sizeMin)) + sizeMin
  while(arr.length != size){
    let randNum: number;

    do {
      randNum = Math.floor(Math.random() * 20);
    }while (arr.includes(randNum));
    arr.push(randNum);
  }
  console.log(arr.sort((a: number, b: number)=> a - b).toString());

  let operator = readLine("square/cube?");
  let newArr: number[] = [];
  if(operator === "square"){
    newArr = arr.map((num)=> {
      return num ** 2;
    })
  }else if (operator === "cube") {
    newArr = arr.map((num)=> {
      return num ** 3;
    }

    )
  }

  console.log(newArr.toString());


}

function runExerciseThirtyOne(){
  let year = Number(readLine("Enter current year:"));
  if(year === new Date().getFullYear()){
    console.log(chalk.green(`correct, ${year} is the current year.`));
  }else {
    console.log(chalk.red(`Incorrect. ${year} is not the current year.`));
  }
}

function runExerciseThirtyTwo(){
  let today = new Date();
  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  let yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  console.log("Tomorrow", tomorrow.toLocaleDateString());
  console.log("Yesterday", yesterday.toLocaleDateString());
  console.log("Today", today.toLocaleDateString());

  let formatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "long",
    dayPeriod: "long"

  })

  console.log(formatter.format(today));

  let svFormatter = new Intl.DateTimeFormat("sv-sv", {
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  })

  console.log(svFormatter.format(today));
  
}

function runExerciseThirtyThree(){
  let date = new Date(readLine("Enter a date:"));
  let today = new Date();
  if (date.getFullYear() < today.getFullYear()){
    console.log("past year");
  }else if (date.getFullYear() > today.getFullYear()){
    console.log("Future year");
  }else {
    console.log("Current year");
  }

}

function runExerciseThirtyFour(){
  let year = 1990;
  while (year <= new Date().getFullYear()){
    if (year % 4 === 0){
      console.log(year);
    }
    year++;
  }
}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
          

        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThreeten();
          break;
      case 14:
         runExerciseFourthen();
         break;
      case 15:
          runExerciseFifthen();
          break;
      case 16:
           runExerciseSixthen();
           break;
      case 17:
           runExerciseSeventhen();
           break; 
      case 19:
           runExerciseNinethen();
           break; 
      case 20:
            runExerciseTwenty();
            break; 
      case 21: 
           runExerciseTwentyOne();
           break; 
      case 22: 
           runExerciseTwentyTwo();
           break;   
      case 23:  
           runExerciseTwentyThree();
           break; 
      case 24: 
           runExerciseTwentyFour();
           break; 
      case 25: 
           runExerciseTwentyFive();
           break; 
           case 26: 
           runExerciseTwentySix();
           break; 
           case 27: 
           runExerciseTwentySeven();
           break; 
           case 28: 
           runExerciseTwentyEigth();
           break; 
           case 29: 
           runExerciseTwentyNine();
           break; 
           case 30: 
           runExerciseThirty();
           break; 
           case 31: 
           runExerciseThirtyOne();
           break; 
           case 32: 
           runExerciseThirtyTwo();
           break; 
           case 33: 
           runExerciseThirtyThree();
           break; 
           case 34: 
           runExerciseThirtyFour();
           break; 
      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
