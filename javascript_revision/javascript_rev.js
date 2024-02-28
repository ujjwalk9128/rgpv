
let message;
message="hi ujjwal";
alert(message);

function myfunction(p1, p2)
{
    return p1*p2;
}
let result=myfunction(4, 6);
document.getElementById("demo1").innerHTML=result;

function myfun()
{
    alert("heloo ujjwal");
}
myfun();

//we create object to 
const person={
    firstName : "ujjwal",
    lastName : "Kumar",
    age : 99

};

document.getElementById("demo3").innerHTML=person.firstName+ " "+person.lastName+ " "+person.age;

const  person1={
    firstName: "jhon",
    lastName :"Doe",
    age : 50,
    fullName :function()
    {
        return this.firstName + " " +this.lastName;
    }
};

document.getElementById("demo4").innerHTML=person1.fullName();

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;

let text="";

for(let i=0;i<5;i++)
{
    text += "the number is " + i + "<br>";
}
document.getElementById("demo6").innerHTML=text;

const cars=["volvo", "fieat", "BMW", "Audi", "Range Rover"]

let text1="";

for(let i=0;i<cars.length;i++)
{
    text1 += cars[i] + "<br>"
}
document.getElementById("demo7").innerHTML=text1;

// for in loop

const person2={fname:"john",lname:"Doe",age:25};
let text3="";

for(let x in person2)
{
    text3 += person2[x];
}
document.getElementById("demo8").innerHTML=text3;

const array=[44,56,23,98,90,12];
let txt="";

for(let i in array)
{
    txt += array[i] + "<br>";
}
document.getElementById("demo9").innerHTML=txt;

// for of loop

const car1=["BMW","VOLVO","MARUTI","MIni"];
let t="";

for(let i of car1)
{
    t += i + "<br>";
}
document.getElementById("demo11").innerHTML=t;

// for of loop 

const lang="javascript";
let t1="";
for(let i of lang)
{
    t1 += i + "<br>";
}
document.getElementById("demo12").innerHTML=t1;

// det in javascript...

const value=new Set([1, 4, 7, 3, 6, 8, "a", "b", "c"]);
let t2="";

for(let i of value)
{
    t2 += i + "<br>";
}
document.getElementById("demo13").innerHTML=t2;

// error in javascript...

function myfunction()
{
    const message=document.getElementById("p01");
    message.innerHTML= "";
    let x=document.getElementById("demo15").value;

    try{
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x=Number(x);
        if(x<5) throw "is too low";
        if(x>15) throw " is too high";
    
    }
    catch(err)
    {
        message.innerHTML="input " + err;
    }

}

// javascript objects by literals...
const person3={firstName:"John",LastNmae:"Doe",age:"25"};
document.getElementById("demo16").innerHTML=person3.firstName +" is " +person3.age +"years old";

// object by using new object () method
const person4=new Object();
person4.firstName="Johnseena";
person4.lastName="Doeoeram";
person4.age="35"
person4.nationality="indian";


//document.getElementById("demo17").innerHTML=person4.firstName + " is "+person4.age + " years old "+"and nationality is " +person4.nationality; 
document.getElementById("demo17").innerHTML=person4;

function rectangel(){
    const length=parseInt(prompt("Enter the length of the Rectangle",""));
    const breadth=parseInt(prompt("Enter  the Breadth of the Rectangle",""));

    const are=(length*breadth);
    const peri=2*(length + breadth);

    document.write("<br> Area of the Rectangle is:"+are);
    document.write("<br> Perimeter of the Rectangle is:"+peri);
    }

rectangel();

function Person5(first,last,age,eye)
{
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyecolor=eye;
}

const myfather=new Person5("john","deo",25,"brown");
document.getElementById("demo18").innerHTML=myfather.firstName+" "+myfather.lastName+" he is "+myfather.age+" year old ";

// function in javascript
function sum(a,b)
{
    return a+b;
}

let x=sum(5,1);
document.getElementById("demo19").innerHTML=x;