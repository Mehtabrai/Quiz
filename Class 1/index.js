// // var can be asign & Declare more times
// var num = 30; 
// var num = 30;

// console.log(num)

// // let can be declare more times but asign only one time

// let num1 = 30;
// num1 = 30 ;
// console.log(num1)

// // Const Can not be asign or Declare more times

// const num2 = 30 ;
// num2 = 40;

// console.log(num2)

var obj ={
    Name : "one",
    Age : "15",

    City : {
        name : "New York",

        Gender : {
            Male : "Female"
        }
        
    }
    
}

console.log(obj)
const {City} = obj
console.log(City)
console.log(City.name);
console.log(City.Gender);


var Man = Object.create(null);
console.log(Man);
Man.name = "Man";
console.log(Man);
var date = Date() 
console.log(date);

