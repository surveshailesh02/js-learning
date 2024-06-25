const professor ={
    Name : "Robert",
    Age : 28,
    city : "Navi Mumbai",
    Strength : "Good Lisner & Quick Learner",
    hobbies : ["Cricket", "Football","Chess","Hockey"], 
    Degree : {
        Engineering : "CSC" ,
        PHD : "Adv Computing" ,
        course : "Angular",
    },
    certificates : [ 'Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
    newproperty : totalExperience ="14 years",

}

// console.log(professor);
console.log(`===== Step 1 ========`);
console.log(`NAME  : `,professor.Name);

console.log(`Age : `,professor.Age);

console.log(`City : `,professor.city);

console.log(`Strength : `,professor.Strength);

console.log(`Hobbies : `,professor.hobbies);

console.log(`===== Step 2 ========`);
console.log(`Degree : `,professor.Degree);

console.log(`===== Step 3 ========`);
console.log(`certificates : ${professor.certificates}`);

console.log(`===== Step 4 ========`);
console.log(`new property : ${professor.newproperty}`);

console.log(`===== Step 5 ========`);
console.log(`Modify`);
professor.Degree = "JavaScript";
console.log(`Modify property : ${professor.Degree}`);

console.log(`===== Step 6 ========`);
var certificates = ['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'];
const addedCertificates = certificates.splice(2,0,"Oracle Certificates");
console.log(`One New Certificate Added`, certificates);

console.log(`===== Step 7 ========`);
const len = certificates.length;
console.log(`The Last array certificates is :${certificates[len-1]}`);

console.log(`===== Step 8 ========`);
console.log(`Complete Object : `,professor);


console.log(`===== Step 9 ========`);
console.log(`=== Traverse array ==== `);
for (let index = 0; index < certificates.length; index++) {
    const element = certificates[index];
    console.log(element); 
}
