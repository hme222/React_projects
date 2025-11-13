let strings =["sun", "moon", "star" ];

// let str1= strings[0];
// let str2=strings[1];
// let str3= strings[2];

//array destructuring- you can pick out the items you need from the array
//utilizing brackets and variables on the left hand side and assigning it to the array
// to pick the variables from on the right-hand sie 
//the variables you create become assigned to their respective index

// let [str1, str2, str3] = strings;

// ok to skip over items like below as needed 
let [str1, , str3]= strings;


// console.log(str1) 
// console.log(str2) 
// console.log(str3)

strings.push("space")
let [ , str2, , str4]= strings; // grab the 2nd and 4th string from the strings array
console.log(str2) 
console.log(str4)

strings = ["mars", "mercury", "earth", "saturn", "jupiter", "pluto", "neptune", "venus", "uranus"]

// ... spread operator 
// when used in destructuring - rest parameter (bc it gives us the 
// "rest" of everything in the array )
let [planet1, , ,  ...planets]= strings;
console.log(planet1)
console.log(planets)

// .. spread operator "spreads" out an array into its individual items
let nums1= [1,2,3,4]
let nums2= [5,6,7,9]

console.log(nums1) // an array!
console.log(...nums1) // not an array 
let numsTotal= [...nums1,...nums2] // this is now all one array, good for algorithms
console.log(numsTotal)

console.log("Max")
const newArray=[1,2,3,4,5,15,20,207,-1]
// Math.max/min takes in a group of #'s but NOT an array
//we can utilize our spread operator to convert our array
//into a group of numbers 
console.log(Math.max(...newArray))


// Object Destructuring 
console.log("\nObject Destructuring")
let person = {
    firstName: "Joe",
    lastName: "Microphones",
    age: 32
}
console.log(person.firstName)

// allows us to specify the properties we want to access
// and utilize them as variables 
let {firstName, lastName, age}= person;
console.log(firstName)
console.log(lastName)
console.log(age)
//                                                 IMPORTANT **********
// object destructuring for the function paramters 
// specify the exact properties you want to use as the parameters 
const getFullName= ({firstName, lastName}) => {
    return `${firstName} ${lastName}`
}

// and when you call the function, you can just pass in the object 
console.log(getFullName(person))

let person2= {
    firstName: "Joey",
    lastName: "Cellphone",
    age: 33
}

//Aliasing !!!!
// so the naming from above HAS TO match the returns for the new variable
//otherwise it doesn't work 
// let {firstName, lastName, age }= person2 
let {firstName: p2firstName, lastName: p2lastName, age: p2age }= person2;

console.log(p2firstName)
console.log(p2lastName)
console.log(p2age)

// admin 
// same properties as person + isAdmin: true
//secretCode: 1234

const admin = {...person, firstName:"Joseph",  isAdmin : true, secretCode: 1234} 
console.log("ADMIN:") // takes in all existing properties, and lets us add more 
console.log(admin)
// keeps original intact, but can create new ones based on existing data 
// can override information w new info 
console.log(person) 


