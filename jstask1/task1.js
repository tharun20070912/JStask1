let i = prompt("Enter your mark:");
let s = Number(i);
let g="n";
g = (s >= 90 && s <= 100) ? "A" :
    (s >= 75 && s < 90) ? "B" :
    (s >= 50 && s < 75) ? "C":"d";

switch(g){
    case "A":
        console.log("Grade A");
        break;
    case "B":
        console.log("Grade B");
        break;
    case "C":
        console.log("Grade C");
        break;
    default:
        console.log("Failed");
}

let a= prompt("Enter a number(odd or even):");
let n = Number(a);

if (n % 2 === 0){
    console.log("Even number");
}
else {
    console.log("Odd number");
}

let w = prompt("Enter the day number (1-7):");
let d = Number(w);

switch (d) {
    case 1:
        console.log("It's a weekday");
        break;
    case 2:
        console.log("It's a weekday");
        break;
    case 3:
        console.log("It's a weekday");
        break;
    case 4:
        console.log("It's a weekday");
        break;
    case 5:
        console.log("It's a weekday");
        break;
    case 6:
        console.log("It's the weekend");
        break;
    case 7:
        console.log("It's the weekend");
        break;
    default:
        console.log("Invalid day");
}