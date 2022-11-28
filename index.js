//TODO: Program that prompts the user to input student marks
//our variable is grade, below I have defined it.
function studentGrade (grade){
if (grade > 79 && grade <= 100){
    console.log ('grade: A')
} 
else if (grade >= 60 && grade <=79){
    console.log ('grade: B')
}
else if (grade >=50 && grade <= 59){
    console.log ('grade: C')
}
else if(grade >=40 && grade <=49 ){
    console.log ('grade:D')
}
else if(grade < 40){
    console.log ('grade: E')
}
}
studentGrade(76)