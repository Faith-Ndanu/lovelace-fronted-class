class Person{
constructor(name,age){
    this.name = name;
    this.age = age;
}
greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
}
};
const jane =new Person('Jane',30);
console.log({jane})
jane.greet();
console.log('prototype',Person.prototype);

Person.prototype.nationality="kenyan"
console.log('nationality',jane.nationality);


class Student extends Person{
constructor(name,age,school){
    super(name,age);
    this.school=school
}
proffession(){
    console.log(`I am a student at ${this.school}`);
}
}
const amanda = new Student('Amanda',18,'AkiraChix');

console.log({amanda})
console.log("nationality" ,amanda.nationality)
amanda.greet();
amanda.proffession();
