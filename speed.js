//speed detector
function speedDetector(speed){
    let demerit = 1;
    
        if (speed <= 70){
            console.log('Ok');
        }
        else if (speed > 70 && speed <= 130) {
            for (speed = 75;speed<130; speed+=5){
            console.log ("Demerit: ",demerit)
            demerit++;
            }
        }
        else {
            console.log ("License suspended")
        }
        
    

}
speedDetector(135)