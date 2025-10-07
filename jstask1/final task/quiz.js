person={
    name:"",
    age:0,
    emailid:"",
    password:""
};

result={
    score:0,
    grade:"",
    timestamp:""
};
let selectedquestions=[];
let answeredquestions=[false,false,false];
let score=0;    

function register(){
     const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const emailid = document.getElementById("emailid").value;
    const password = document.getElementById("password").value;
    const retypepassword = document.getElementById("retypepassword").value;

    if(!name||!age||!emailid||!password||!retypepassword){
        alert("Please fill out all the fields");
    }
    else if(age<13){
        alert("Age must be 13 or above");
    }
    else if(password!=retypepassword){
        alert("Password doesn't match");
    }
    else{
    person.name=name;
    person.age=age;
    person.emailid=emailid;
    person.password=password;
    localStorage.setItem("person", JSON.stringify(person));
        alert("registration successful");
    }
}

function Login(){
    const storedperson = JSON.parse(localStorage.getItem("person"));
       if (!storedperson) {
      alert("No registered user found. Please register first.");
      return;
    }
    const inname = document.getElementById("inname").value;
     const inemailid = document.getElementById("inemailid").value;
    const inpassword = document.getElementById("inpassword").value;
    if(storedperson.name!==inname){
        alert("Incorrect username");
    }
    else if (storedperson.emailid!==inemailid){
        alert("Incorrect Email ID");
    }
    else if (storedperson.password!==inpassword){
        alert("Incorrect Password");
    }
    else{
        alert("login Successful");
        open("rules.html");
    }
}
function randomq(){
   let questions=[
    {q:"Which planet is called as red planet?",
        ans:"3",
        a:"Neptune", b:"Uranus", c:"Mars"
    },
    {q:"Which is the tallest building in the world?",
        ans:"2",
        a:"Twin-towers", b:"Burj Khalifa", c:"Shangai Tower"
    },
    {q:"What is 1+10",
        ans:"3",
        a:"12", b:"15", c:"11"
    },
    {q:"How many oscars does AR Rahman own?",
        ans:"1",
        a:"two", b:"four", c:"three"
    },
    {q:"Who is the president of America?",
        ans:"2",
        a:"Barak Obama", b:"Donald Trump", c:"Kamala Harris"
    }
    ];

    // Pick any 3
    let rand = Math.floor(Math.random() * questions.length);
    let rand2 = Math.floor(Math.random() * questions.length);
    while (rand2 == rand) {
        rand2 = Math.floor(Math.random() * questions.length);
    }
    let rand3 = Math.floor(Math.random() * questions.length);
    while (rand3 == rand || rand3 == rand2) {
        rand3 = Math.floor(Math.random() * questions.length);
    }

    let quest1 = questions[rand];
    let quest2 = questions[rand2];
    let quest3 = questions[rand3];
    selectedquestions=[quest1,quest2,quest3];
    score=0;

    
    const qout= document.getElementById("qcrd1");
        qout.innerHTML='<h2>'+quest1.q+'</h2>';
    document.getElementById('1').innerHTML='<h2 style="margin-top:0px;">'+quest1.a+'</h2>';
    document.getElementById('2').innerHTML='<h2 style="margin-top:0px;">'+quest1.b+'</h2>';
    document.getElementById('3').innerHTML='<h2 style="margin-top:0px;">'+quest1.c+'</h2>';

    const qout2= document.getElementById("qcrd2");
        qout2.innerHTML='<h2>'+quest2.q+'</h2>';
    document.getElementById('4').innerHTML='<h2 style="margin-top:0px;">'+quest2.a+'</h2>';
    document.getElementById('5').innerHTML='<h2 style="margin-top:0px;">'+quest2.b+'</h2>';
    document.getElementById('6').innerHTML='<h2 style="margin-top:0px;">'+quest2.c+'</h2>';

    const qout3= document.getElementById("qcrd3");
        qout3.innerHTML='<h2>'+quest3.q+'</h2>';
    document.getElementById('7').innerHTML='<h2 style="margin-top:0px;">'+quest3.a+'</h2>';
    document.getElementById('8').innerHTML='<h2 style="margin-top:0px;">'+quest3.b+'</h2>';
    document.getElementById('9').innerHTML='<h2 style="margin-top:0px;">'+quest3.c+'</h2>';

    console.log("Q1:"+ quest1.q + "\n"+quest1.ans);
    console.log("Q2:"+ quest2.q + "\n"+quest2.ans); 
    console.log("Q3:"+ quest3.q + "\n"+quest3.ans); 
}

function checkanswer(questnum, selectedoption) {
    const question=selectedquestions[questnum];
    const crctans=question.ans;
    if(answeredquestions[questnum]==true){
        alert("You have already answered this question");
        return;
    }
    else{
    answeredquestions[questnum]=true;
    }
    if (selectedoption==crctans){
        console.log("Correct answer");
        score++;
    }
    else{
        console.log("Wrong");
    }
    console.log("score="+score);
    result.score=score;
    console.log(result.score);
}

function submitquiz(){
     document.getElementById("resultcrd").innerHTML="<h2>Processing...</h2>";
const wait = new Promise((resolve) => {
  setTimeout(() => {
    resolve("wait time 4 sec");
    
  }, 4000);
});

wait.then((message) => {
  console.log(message);
  console.log("Delay over");
  evaluate();
});

}
function evaluate(){
    if (result.score==1){
        result.grade="C";
    }
    else if(result.score==2){
        result.grade="B";
    }
    else if(result.score==3){
        result.grade="A";
    }
    else{
        result.grade="D";
    }
    result.timestamp=new Date();
    console.log(result.grade);
    console.log(result.timestamp);
 let jsonstrres=JSON.stringify(result);
    document.getElementById("resultcrd").innerHTML="<h2>Your score is: "+result.score+"/3</h2>";
    document.getElementById("resultcrd").innerHTML+="<h2>Your grade is: "+result.grade+"</h2>";
    document.getElementById("resultcrd").innerHTML+="<h2>Timestamp: "+result.timestamp+"</h2>";
    document.getElementById("resultcrd").innerHTML+="<h2>JSON String:</h2>";
     const storedperson = JSON.parse(localStorage.getItem("person"));
     dispperson=JSON.stringify(storedperson);
    document.getElementById("resultcrd").innerHTML+="<h2>Registered User Details:</h2>";
    document.getElementById("resultcrd").innerHTML+=dispperson;
    document.getElementById("resultcrd").innerHTML+="<h2>Quiz Result Details:</h2>";
    document.getElementById("resultcrd").innerHTML+=jsonstrres;
}

