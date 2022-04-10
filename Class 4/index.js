var Class4date = new Date()
console.log(Class4date)

// spilit operator and set

var arr1 = ["1","2","3","4",];
var arr2 = ["3","4","5","6"]
var newarr = new Set([...arr1,...arr2])
console.log(newarr)

// for Each Method

// for each with arrow function 

var Arr = ["Mehtab","Jeewat","Suresh","Mukesh"]
Arr.forEach((value,key,set) => {
    console.log(value,key,set)
});


// for each with simple function 

var Arr = ["Mehtab","Jeewat","Suresh","Mukesh"]
Arr.forEach(function(value,key,set){
    console.log("<<<<< value >>>>>>>>",value)
    console.log("<<<<< key >>>>>>>>",key)
    console.log("<<<<< set >>>>>>>>",set)
// window.location.reload()

});


let quiz = [
    {
        q1:"how are u",
        option :["a","a","a"],
        correct : 0,

    }
]

