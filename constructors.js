function Person(name,age){
    this.name = name
    this.age = age
    this.greet = function(){
        console.log(`Hello,my name is ${this.name} and I am ${this.age} years old`)
    }
}
const adam = new Person('Adam',30);//used to intialize and create an object inside the variablefrom the function
console.log({adam});
adam.greet();

const age = new Person('Eve',25)
console.log({eve});
eve.children = ['cain','abel','seth'];
console.log({eve});
console.log({adam});

Person.prototype.skinColor= 'black'//prototype-
console.log(skinColor.adam)

















