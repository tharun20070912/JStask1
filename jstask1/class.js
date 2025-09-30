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

let i=10;
sum=0;
while (i<=20){
    sum=sum+i;
    i++;
    console.log(sum);
}