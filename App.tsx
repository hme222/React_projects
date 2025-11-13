
import './App.css'

function App() {

//typescript enforces strict typing for our variables
//let variable: type = 
// newStr is typed as a new string, so it cannot be anything else (ex: number)
let newStr: string = "my new string!"
// newStr=5;  // bad ! 
newStr= "5" // good ! 

let count: number;
count=10 

let isCold: boolean
isCold= true;

let myNum= 15; 
// myNum="String" // called typescript inference from previous line 


//any type .. functions like a javascript variable
//if you create a variable without assignment AND
//without type declaration, then it will be 
//considered "any" type 
// this type can be reassigned at any time lol 
//try to avoid any types lol 
//use any type to avoid errors if they come up 
// (specifically from importing code from libraries or fetching data from apis)
let anyTS;
anyTS= "typescript!!"
anyTS=5;

//Arrays! 
//designates a certain type, (ex no numbers in fruits)
let fruitsArray: string[] = ["apple", "banana", "kiwi", "plum"]
let numsArray: number[]= [1,2,3,5] //can't do "3" bc its a number ! lol 

let anyArray: any[]= ["howdy", 11, false]
let multiTypeArray: [number,string,string,number]= [2,"hi","bye",2]

//objects 
let fruit: {
  name: string,
  price: number,
}
// after object is defined, only can include those types 
fruit= {
  name: "lemon",
  price: 1,
}

let fruitBasket: { name: string, price: number}[]
fruitBasket = [{name: "orange", price: 2}, {name: "grapefruit", price: 3}, fruit] 

//type alias or interface (separate files for these)
type Fruit = {
  name: string, 
  price: number | string // can add \ to then do or for either
  // can add as many as you like, this is called the union type 
  //allows for multiple types 
  color?: string // adding a ? can make the variable optional  
} // when defining an option, you are "strictly typing"

let newFruit: Fruit= {
  name: "strawberry",
  price: 4,
  color: "blue"
}

let newFruit2: Fruit= {
  name: "pineapple",
  price: 4
}

let betterFruitBasket: Fruit[];
betterFruitBasket= [newFruit, newFruit2, fruit]

// interface and alias are similar, interface can be added to, but it's the
//same difference, no real differences 



//functions!  optional return type at the end of () :number
//  (a: number, b: number) : number => {}
//called strictly typing
//always required type within () aka number 
//called strictly typing our parameters 
const multiply= (a: number, b: number) => {
  return a*b;
}

 multiply(4,10)

 let global= 10
 // void function 
 //function that doesn't return anything 
 const greeting= (name: string): void => {
  console.log(`Hey ${name} `)
  global = 25; 
 }
//useful for modifying a global variable ex: global 
// no return needed for retaining value 

//? optional parameters 
const optionalFunction = (num1: number, num2: number, num3?: number) => {
  return num1 +num2
}

optionalFunction(1,2,3)
// OR 
optionalFunction(1,2)

// union parameter and multiple types 
const unionFunction=(pin: string | number) => {

}

unionFunction("1234")
unionFunction(1234)
// unionFunction(false) -- can't do this, not the right type defined above 

const fruitFunction= (fruit: Fruit)=>{ 
  return fruit.color
}

const person= {
  name: "jim",
  age: 100, 
}
// fruitFunction(person) - creates an error 
// doesn't work, 
// can't just be an object, has to be specific 



  return (
    <>
    <h1> Typescript! </h1>  


    </>
  )
}

export default App
