console.log("java");
var a=10
var b=20
var Result=a+b
console.log("Total value",Result);
var num1=10
var num2=num1
num1=20
console.log("num1:",num1);
console.log("num2:",num2);


var renum1 = [10]
var renum2 = renum1
renum1[0]= 20
console.log("renum1:",renum1);
console.log("renum:",renum2);

var age =17

if(age>17){
    console.log("Adult");
}
else if (age>45){
    console.log("citizen")
}
else if (age>75){
    console.log("senior citizen");
}
else{
    console.log("children");
}

//nested if

let age1 =20;
let hasID = true;

if(age>=18){
console.log("you are an adult");
if (hasID){
    console.log("you have an ID.you can enter.");
    }else{
        console.log("you need an ID to enter.");
    }
}
else{
    console.log("you are not an adult");
}

//loop

// increment
for(var i=0; i<10;i++){
console.log("Increment :",i);
}
// Decrement
for(var i=10; i>0;i--){
console.log("Decrement :",i);
}

//For in

varstudata=[

{
name:"hari",
age:18,
rol_num:2010
},
{
name:"giri",
age:18,
rol_num:2020
},
{
name:"raja",
age:18,
rol_num:2030
}
]

//For of

// array
var list=[1, 2, 3, 4, 5];
for(value of list) {
console.log("array data of :", value);
}

//For each

var datavalue1 = [10,4,65,1,2,3,4,5,6,6]
datavalue1.foreach((ele)=>console.log("foreach data:",ele)) 

//API

let data =
fetch("https://api.disneyapi.dev/character");
data.then((e)=>e.json())
then((res)=>{
    console.log(res);
    for(let key of res.data){
        console.log("API VALUE :",key)
    }
})

    








