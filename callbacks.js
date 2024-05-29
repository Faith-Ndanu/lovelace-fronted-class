function greet(userName,callback){                     //
    console.log(`hello there ${userName}`);
    callback();

}
function intro(){
    console.log(`this is me`)
}
greet('Helen', intro)

setTimeout(intro,2000)

const interval = () =>{
    console.log(`Execute me`);
}
setInterval(interval,3000);




