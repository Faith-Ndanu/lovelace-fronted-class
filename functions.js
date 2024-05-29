function add(num1,num2){
    const sum = num1+num2;
console.log({console:sum})
return {'return':sum}
};
console.log(add(2,3));
add(4,5);


//function expressions
const subtraction = function(num1,num2){
    console.log(num1-num2);
}
subtraction(20,10);
//Arrow functions
const multiply = (num1,num2)=> console.log(num1*num2);
multiply(5,6);

//IIFEs
(function(){
    console.log(("hello"))
})();

//hoisting-doent work with let/const

console.log({greet});

var greet ="hello there";
console.log({})