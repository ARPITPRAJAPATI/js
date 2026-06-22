const students = [
    {name: "Arpit" , marks: 85},
    {name: "Rahul" , marks: 60},
    {name: "Sneha" , marks: 95},
    {name: "Aman" , marks: 40}
];
let total = 0;
let topper = students[0];

for(let i=0;i<students.length;i++){
    total+=students[i].marks;

    if(topper.marks<students[i].marks){
        topper = students[i];
    }
}
let average = total / students.length;
console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Topper:", topper.name);

function checkR() {
    for(let i=0;i<students.length;i++){
        if(students[i].marks>=50){
            console.log(students[i].name + " Pass");
        }
        else{
            console.log(students[i].name + " Fail");
        }   
    }
}
checkR();