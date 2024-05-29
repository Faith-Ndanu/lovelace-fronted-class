const internship = true;
let ourPromise = new Promise((resolve,reject) => {
if (internship){
resolve(`Imade It`);
}
else{
    reject(`Pray for me`);
}
})
ourPromise
.then(()=>{
    console.log(`I will be confirmed`)
})
.catch(()=>{
    console.log(`I will continue applying for jobs`)
})
.finally(()=>{
    console.log(`I will still be succesful`)
});
console.log({ourPromise});



const successWish = async()=>{
    try{

    
    await ourPromise;
    console.log(`My succcess Wish`);
    }
    catch{
        console.log(`my wish is not successful`)
    }
}
successWish();




