
let name2="hello";
let email="helloworld.@gmail.com";
let age="23";

if( typeof name2!=="string"){
    console.log("name should be in string");
}
else if (typeof email!=="string") {
    console.log("email should be in string");
} 
else if(typeof age!=="number") {
    console.log("age should be number");
}
else{
    console.log("enter valid details");
}