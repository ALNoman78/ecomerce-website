const product = {
    productName : "T-shirt",
    price : 450.,
    ratingProduct : 4,
    productOffer : 5,
};
console.log(product);

const social = {
    profileName : "Abdullah AL Noman",
    isFollow : true,
    profileFollowers : 550000,
    profilePost : 120,
    followAc : 4,
    infoAc : "I am a professional font-end web developer, if you need any kind of design just tell me i will create this for you",
};
console.log(social)

// arthmeatic operator 
// let a = 5;
// let b = 2;
// let c = (a *a ) + 2*( a * b ) + ( b * b );
// let d = (a *a ) - 2*( a * b ) + ( b * b );
// console.log(" a = ", a , "& b = ", b);
// console.log(" ( a + b ) * 2 = ", c)
// console.log(" ( a - b) * 2 =", d )
// let modulus = a % b;
// console.log("a % b =", modulus)

// unary operator 

// let a = 5;
// let b = 2;
// a = a + 3 ;
// console.log(" a = ", a , "& b ", b);
// console.log(" a ++ =", a++)


// assignment operator

// let a = 5; 
// a %= 4;  that means a = a % 4 (value)
// a **= 4; that means a = a ** 4 (value)
// console.log(a);

// comparison operator 


// let a = 5;
// let b = 5;
// let x = 3;
// console.log(" a  ", a, "& b ", b);
// console.log( " 5 == 5" , a == b); // true
// console.log( " 5 == 3 " , a == x); // false


//logical operator

// let a = 5;
// let b = 5;
// let cond1 = a >= b; // true
// let cond2 = a === b; // true
// console.log("cond1 && cond2 =", cond1 && cond2 );

// let cond3 = a != b; // false
// let cond4 = a === b ; // true
// console.log("cond3 || cond4 =", cond3 || cond4)


// conditional operators

let age = 18;
if (age >= 18){
    console.log("You are eligible for Driving")
}else{
    console.log("You are not eligible for Driving")
}

let mode = "light";
let color;
if( mode === "dark"){
    color = "black";
}else{
    color = "white";
}
console.log(color)

let x = 9;
if (x % 2 === 0){
    console.log(x , "This is even number")
}else{
    console.log(x , "Odd number")
}

// let mark = prompt("Enter the value of your marks"); // get a user input 
// let mark = 33;
// let grade;
// if(mark >= 90 && mark <= 100){
//     grade = "A+";
// }else if(mark >=80 && mark <=89){
//     grade = "B";
// }else if(mark >=70 && mark <=79){
//     grade = "c";
// }else if(mark >= 60 && mark <= 69){
//     grade = "D";
// }else if(mark >=49 && mark <= 59){
//     grade = "E";
// }else{
//     grade = "F";
// }
// console.log("According to your mark , your grade was :",grade)

// ternary operator

// let year = prompt("Input your age and then check what should you do ?");
// let year = 32;
// let result = year ? "Get a driving license" : "You are not eligible for driving"
// console.log(result)

// // let solve a question
// let user = prompt("Enter a number which is divided by 5");
// if(user % 5 === 0){
//     console.log(user , "This a can  divided by 5")
// }else{
//     console.log(user , "this can't be divided number");
// }



// grade using if..then..else if

// let score = prompt("Enter Your Marks All subjects");
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A";
// }else if(score >= 80 && score <=89){
//     grade = "B+";
// }else if(score >= 70 && score <= 79){
//     grade = "C";
// }else if (score >= 60 && score <= 69){
//     grade = "D";
// }else if(score >= 40 && score <= 59){
//     grade = "E";
// }else{
//     grade = "F";
// }
// console.log("Your accurate grade is =",grade)