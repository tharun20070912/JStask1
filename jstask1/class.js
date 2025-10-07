// const myPromise= new Promise((resolve,reject)=> {
//     if(success){
//         resolve("task completed");
//     }
//     else{
//         reject("task incomplete or something went wrong!");
//     }
// });

// myPromise 
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=> {
//         console.log("promise execution finished");
//     });

// let i=10;
// sum=0;
// while (i<=20){
//     sum=sum+i;
//     i++;
//     console.log(sum);
// }

function randomq(){
   let questions=[
    {q:"Which planet is called as red planet?",
        ans:"3"
        ,a:"Neptune",b:"Uranus",c:"Mars"
    },
    {q:"Which is the tallest building in the world?",
        ans:"2"
        ,a:"Twin-towers",b:"Burj Khalifa",c:"Shangai Tower"
    },
    {q:"What is 1+10",
        ans:"3"
        ,a:"12",b:"15",c:"11"
    },
    {q:"How many oscars does AR Rahman own?",
        ans:"1"
        ,a:"two",b:"four",c:"three"
    },
    {q:"Who is the president of america?",
        ans:"2"
        ,a:"Barak Obama",b:"Donald Trump",c:"Kamala Harris"
    }
    ]

    let rand = Math.floor(Math.random() * questions.length);
    let quest1 = questions[rand];

    let rand2 = Math.floor(Math.random() * questions.length);
    while (rand2==rand){
         rand2 = Math.floor(Math.random() * questions.length);
    }
    let quest2 = questions[rand];
    
     let rand3 = Math.floor(Math.random() * questions.length);
     while (rand3==rand||rand3==rand2){
         rand3 = Math.floor(Math.random() * questions.length);
    }
    let quest3 = questions[rand];

    const qout= document.getElementById("qcrd1");
        qout.innerHTML='<h2>'+quest1.q+'</h2>';
    const opt1=document.getElementById('o1');
        opt1.innerHTML='<h2>'+quest1.a+'</h2>';
     const opt2=document.getElementById('o2');
        opt2.innerHTML='<h2>'+quest1.b+'</h2>';
    const opt3=document.getElementById('o3');
        opt3.innerHTML='<h2>'+quest1.c+'</h2>';

}



