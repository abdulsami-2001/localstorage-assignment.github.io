//Name: Muhammad Sami
//Roll No: 20385

// Question 1
/*
let itemsArray = [
    {name:"juice",price:50, quantity:3},
    {name:"cookie",price:30, quantity:9},
    {name:"shirt",price:880, quantity:1},
    {name:"pen",price:100, quantity:2}
];

var overallPrice = 0;
itemsArray.forEach((item,index)=>{
    console.log(`Price Of ${item.name} Is: ${item.price} And Total Price Of Quantity: ${item.quantity} Is, ${item.price*item.quantity}`)
    overallPrice = overallPrice+item.price;
})

console.log(`\nTotal Price of is ${overallPrice}`)
*/
// Question 2

/*
let person = {
    firstName: "Muhammad",
    lastName:"Sami",
    email: "abdulsamisiddiq2001@gmail.com",
    password: "123456789",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}

if(person.age || person.country){
    console.log(`\nAge Property Is Available In The Object, It's value is: ${person.age}`);
    console.log(`\nCountry Property Is Available In The Object, It's value is: ${person.country}`)
}else{
    console.log("Not Available!")
}
if(person.firstName || person.lastName){
    console.log(`\nFirst Name Property Is Available In The Object, It's value is: ${person.firstName}`);
    console.log(`\nLast Name Property Is Available In The Object, It's value is: ${person.lastName}`)
}else{
    console.log("Not Available!")
}

*/

/*

// Question 3

function Iphones(name,price,bluetooth,simslot){
    this.name = name
    this.price = price
    this.bluetooth = bluetooth
    this.simslot = simslot
}

let IphoneX = new Iphones("Iphone X", 100000,"No","Yes")
let IphoneX_Max = new Iphones("Iphone X Max", 150000,"No","Yes")
let IphoneX_Max_Pro = new Iphones("Iphone X Max Pro", 200000,"No","Yes")


console.log(`${IphoneX.name} Price: ${IphoneX.price}`)
console.log(`${IphoneX_Max.name} Price: ${IphoneX_Max.price}`)
console.log(`${IphoneX_Max_Pro.name} Price: ${IphoneX_Max_Pro.price}`)


*/

// Question 4
/*
function Users(Name, Gender, Address, Education, Profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}


function onSubmit(){
    let name = document.getElementById("Name").value
    let gender = document.getElementById("male").checked ? "Male":"Female"
    let address = document.getElementById("Address").value
    let education = document.getElementById("Education").value
    let profession = document.getElementById("Profession").value

    let newUser = new Users(name,gender,address,education,profession)
    let previusData = JSON.parse(localStorage.getItem("Users"))
    console.log(previusData)
    if(JSON.parse(localStorage.getItem("Users")) != null ){
        localStorage.setItem("Users",JSON.stringify([...previusData,newUser]))
        
    }else{
        localStorage.setItem("Users",JSON.stringify([newUser]))
    }
    document.getElementById("Name").value = ""
    document.getElementById("Address").value = ""
}

*/








// var data = {
//     name : document.getElementById("Name").value,
//     gender: document.getElementById("Gender").value,
//     address: document.getElementById("Address").value,
//     education: document.getElementById("Education").value,
//     profession: document.getElementById("Profession").value
// }