function netSalary(basicSalary,benefits){
    let paye;
    //calculating using monthly taxable pay on PAYE chart
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
    grossSalary= basicSalary + benefits;
    netsAlary = grossSalary - paye - nssf - nhif;
}