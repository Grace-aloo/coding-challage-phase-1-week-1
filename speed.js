//speed detector
function speedDetector(speed){
    demerit =Math.floor((speed-70)/5)
    //start with if else statement
        if (speed <= 70){
            console.log('Ok');
            return ('Ok')
        }
        else if (speed > 70 && speed <= 130) {
            //nested for loop inside the if else statement
            for (speed = speed;speed <= 130; speed +=5 ){
             console.log (`At speed ${speed} Demerit: `,demerit)
                 demerit++;
                 return ('point:',demerit)
            }
        }
        //for anything above 130
        else {
            console.log ("License suspended")
            return('License suspended')
        }
        
    

}
speedDetector(102)