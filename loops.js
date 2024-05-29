const multiplyByTwo = (num) =>{
    let newArray = [];

    for(let i = 0;i<num.length;i++){
        const result = num[i]*2;
        newArray.push(result);
    }
    return newArray;
}
console.log(multiplyByTwo([2,3,4,5,6,7]))

const totalSum = (num)=>{
    let sum=0
    for(let element of num){
        sum += element;
    }
    return sum
}
console.log(totalSum([1,2,3,4,5,6,7,8]))

const teachStudents = (students)=>{
    while(students.length>2){
        console.log("Teach students")
        students.pop();
        if (students.length===1){
            break
          //if(students.includes("Monica")){
          //  continue
         // }
        }
    }
}
//do-while 
teachStudents(["Max","Anita","John","Monica"]);

const childrenNames = (children)=>{
    do{
        console.log("There are many children")
    }
    while(children.length>5)
    
}
childrenNames(["Max","Anita","John","Evans","Monica"])

//switch statements-used in decisionmaking
const checkDayOfWeek = (day)=>{
    switch(day){
        case "Monday":
        console.log('Monday is Monday')
        break
        case"Tuesday":
        console.log("Tuesday is tuesday")
        break;
        default:
            console.log("The day is not listed")
    }
}
checkDayOfWeek("Monday")
