let fruits = ["Mango","Apple","Banana","Orange"];

let array = new Array(20,30,6,7);
console.log({fruits});
console.log({array});

fruits[1] = 3;
console.log({fruits});
console.log("length",fruits.length);
console.log(fruits[20]);

//Array Methods
//push-to add to last item
let addLast = fruits.push('Kiwi');
console.log({fruits})

//unshift-to add first item
let addFirst = fruits.unshift('Pineapple');
console.log({fruits});

//pop- removes the last item
let removeLast = fruits.pop();
console.log({fruits});

//shift - removes first item
let removeFirst = fruits.shift();
console.log({fruits});


//adding of items in an array
//reduce method
let items = [20,30,40,50,60];
let add = items.reduce((acc,curr)=>acc + curr);
console.log({add});

//multiply everthing by 2
//map method-loop through an array
let multiplyAll = items.map((item => 
    item*2));
console.log({multiply});

//add each item by 2
//forEach
let addEach = []
let total = 0
 items.forEach(item => {
const add = item+2;
console.log({add});
addEach.push(add);
total +=item
})
    
console.log({addEach})
console.log({total})

let[num1,num2,num3]= items;
console.log({num1});
console.log({num2});
console.log({num3});
