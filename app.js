
// Exercise 1 Section


function printOdds(count){
    if (count < 0) {
        for (let i = -1; i >= count; i--) {
            if(i % 2 != 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 1; i <= count; i++){
        if (i % 2 !=0){
            console.log(i);
            }
        }
    }

}

printOdds(-10);
printOdds(10);

// exercise 2: Check Age

const checkAge = (name,age) => {
let oldEnoughMsg = `Congrats ${name}! You can drive!`;
let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive!`;


if (age < 16) {
 console.log(tooYoungMsg)
} else {
    console.log(oldEnoughMsg)
}


};


checkAge("Ben",12);
checkAge("Seth",16);
checkAge("Cameron",21);



// exercise 3 quadrant

function checkQuadrant(x,y) {

if (x>0 && y > 0 ) {
    return "Quadrant 1";
} else if (x < 0 && y> 0){
    return "Quadrant 2";
} else if (x < 0 && y< 0){
return "Quadrant 3";
} else if (x > 0 && y!= 0){
return "Quadrant 4";
} else if (x == 0 && y!= 0){
return "X axis";
} else if (x != 0 && y== 0){
return "Y axis";
} else {
return "Origin";

 }

}

console.log(checkQuadrant(11,1));
console.log(checkQuadrant(-11,1));
console.log(checkQuadrant(-1,-11));
console.log(checkQuadrant(1,-11));
console.log(checkQuadrant(0,-11));
console.log(checkQuadrant(11,0));
console.log(checkQuadrant(0,0));

// exercise 4: Traingles

function isValidTriangle(a,b,c) {

    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a,b,c) {
 let isValid = isValidTriangle(a,b,c);
 if (isValid) {
    // What type of triangle?
    if (a == b && b == c) {
        return `Equilateral`;
    } else if (a == b || b == c) {

    }
 } else {

    return ` Not a valid triangle.`;
 }
}


console.log(checkTriangle(2,3,4)); //scalene
console.log(checkTriangle(2,2,2)); //eq
console.log(checkTriangle(1,2,2)); // iscosceles
console.log(checkTriangle(1,1,2)); // invalid



// exercise 5

// plant limit day usage 
// 15 days used  15 days remaining
// you are exceeding your average daily usage plan  3.73 GB/day
// coninuting your usage you will exceed your usage by 11.9 GB 
// to stay below your data plan use no more than 2,93 GB per day
const dataUsageFeedback = (planLimit, day, usage) => {
 let periodLength = 30;
 let currentAvg = usage / day;
 let projectedAvg = plantLimit / periodLength;
 let remainingDays = periodLength -day;
 let remainData = plantLimit - usage; 
 let projectedUsage = remainingDays * currentAvg;
 let statusMsg;

if (currentAvg > projectedAvg) {
statusMsg = "Exceeding";
} else if (currentAvg < projectedAvg) {
    statusMsg = "Under";
} else {
    statusMsg = "AT"

}



 console.log(`${day} days used , ${periodLength - day} days remaining`);
 console.log(`Average projected use: ${planLimit / periodLength} GB/day`);
 console.log(`You are exceeding your daily use (${currentAvg} GB/day), coninuting this 
 you will exceed your GB by 11.9 GB `);

}

dataUsageFeedback(50,12,25);
