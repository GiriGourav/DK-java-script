// objects
// const student={
//    "full name":"Gourav Giri",
//    email:"codinggourav@gmail.com",
//    age:10,
//    location: "Ghaziabad",
//    logindays:["sat","sun"],
// };


// console.log(student);
// console.log(typeof student);

// // student.name="Gourav Giri"

// // console.log(student);
// console.table(student);

const stud={
   gender:"male",
   "full name":"Gurav giri",
   email:"codinggourav@gmail.com",
   age:10,
   location:"Ghaziabad",
   islogindays:["sat","sun","mon"],
   islogin:true,
   };
// console.log(stud);
// console.log(typeof stud);
// stud.name="Gourav Goswami";
// console.log(stud);
// console.table(stud);

stud.greeting=()=> console.log("Hello");

stud.greeting()

// function sum( a , b)
// {
//    return(a+b);
   
// };
// console.log(sum(5,10));

// const sayhi =(a,b)=>{
//    console.log("full name")
//    let sum=a+b;
//    let pro=a*b;
//    let diff=pro-sum;
//    return diff;
// };
// console.log(sayhi(10,50));
// if we use curly braces{} then return will be used



// IIFE = imediately inviked function expression

(()=>{
   console.log("hello")
})();
((uname)=>{
   console.log(`$unmae is loged in`);
})("john");