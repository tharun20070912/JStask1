 let info={
         name:"",
         birthyear:0,
        city:""
     };

function person(){
    const name = document.getElementById('inputname').value;
    const birthyear =parseInt(document.getElementById('birthyear').value);
    const city = document.getElementById('inputcity').value;
    let out1="";
    if(!name) out1="Please enter your name";
   else if(!birthyear||birthyear<1900) out1="Please enter the birth year correctly";
   else if(!city) out1="Please enter you city";
    else out1="Profile updated successfully";

    info.name=name;
    info.birthyear=birthyear;
    info.city=city;
    
    const outputdiv=document.getElementById('profileresult');
    outputdiv.innerHTML=
        '<h2>Result:</h2>'+
        '<h3>Hello,'+name+'</h3>'+
        '<h3>'+out1+'</h3>';

    console.log(info.name+info.birthyear+info.city);

let today="";
var hour= new Date().getHours();
console.log(hour);
if (hour >= 5 && hour < 12) {
    today="Good Moring"
  } else if (hour >= 12 && hour < 17) {
    today="Good Afternoon"
  } else if (hour >= 17 && hour < 21) {
    today="Good Evening";
  } else {
    today="Good Night";
  }
  console.log(today);
const greetingout=document.getElementById('greeting');
greetingout.innerHTML= today +', '+info.name;
}

function agecheck(){
    let out2="";
    const currentyear = new Date().getFullYear();
  const age = currentyear - info.birthyear;
  console.log(info.birthyear);
  if (age>=18){
    out2="Congrats you are eligible!";
  }
  else{
    out2="Sorry you are not eligible.";
  }
  const agechkout=document.getElementById('ageresult');
  agechkout.innerHTML= '<h2>Result:</h2>'+
        '<h3>'+out2+'</h3>';
}

function arithmetic(){
    var x=0;
    var y=0;
    x=document.getElementById('num1').value;
    y=document.getElementById('num2').value;
    x=parseInt(x);
    y=parseInt(y);
    const add=x+y;
    const sub=x-y;
    const prd=x*y;
    const div=x/y;
    const arithmeticout=document.getElementById('arithmetic');
  arithmeticout.innerHTML= '<h2>Result:</h2>'+
        '<h3>Addition:'+add+'</h3>'
        +'<h3>Subtraction:'+sub+'</h3>'
        + '<h3>Multiplication:'+prd+'</h3>'
        +'<h3>Division:'+div+'</h3>';
}
function jsonstringyfy(){
    const jsonDisplay = document.getElementById('jsonresult');
    
    jsonDisplay.textContent = 'Result:'+ JSON.stringify(info, null, 2);

}