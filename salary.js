function netSalary(basicSalary,benefits){
    //calculating PAYE using monthly taxable pay on PAYE chart
    let paye;
    if(basicSalary<=24000){
        paye = basicSalary*10/100;
    }
    else if(basicSalary > 24000 && basicSalary <= 32333){
        paye =basicSalary*25/100;
    }
    else if(basicSalary > 32333){
        paye = basicSalary*30/100;
    }
    
    //calculating using old nssf monthly rates on the old rates chart
     nssf = 400;
     //calculating gross salary
     let grossSalary= basicSalary + benefits;
     //calculating nhif using if else statements
     let nhif;
    if(grossSalary < 6000){
        nhif = 150;
    }
    else if(grossSalary < 8000){
        nhif = 300;
    }
    else if(grossSalary < 12000){
        nhif = 400;
    }
    else if(grossSalary < 15000){
        nhif = 500;
    }
    else if(grossSalary < 20000){
        nhif = 600;
    }
    else if(grossSalary < 25000){
        nhif = 750;
    }
    else if(grossSalary < 30000){
        nhif = 850;
    }
    else if(grossSalary < 35000){
        nhif = 900;
    }
    else if(grossSalary < 40000){ 
        nhif = 950;
    }
    else if(grossSalary < 45000){
        nhif = 1000;
    }
    else if(grossSalary < 50000){
        nhif =1100;
    }
    else if(grossSalary < 60000){
        nhif = 1200;
    }
    else if(grossSalary < 70000){
        nhif = 1300;
    }
    else if(grossSalary < 80000){
        nhif = 1400;
    }
    else if(grossSalary < 90000){
        nhif = 1500;
    }
    else if(grossSalary < 100000){
        nhif = 1600;
    }
    else if(grossSalary > 100000){
        nhif = 1700;
    }
    //calculating net salary
    let netsAlary = grossSalary - paye - nssf -nhif;
    console.log('PAYE: ',paye)
    console.log('NHIF: ',nhif)
    console.log('Gross Salary: ',grossSalary)
    console.log('Net Salary: ',netsAlary)
}
netSalary(45000,5000)