var STEP1;
 console.log("===== STEP 1.1 =====");
 function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender=="Male" && age>=21)
    ? `Hey ${boyName} you are eligible for Marriage`
    : ` ${boyName} you are Not eligible for Marrige `;
    return result ;
 }
 var message = maleMarriageEligibility("Male", 25, "Bill gates");
 console.log(message);
 var message = maleMarriageEligibility("Male", 17, "Stew Jobs");
 console.log(message);

 var STEP2;
 console.log("===== STEP 2 =====");
 function femaleMarriageEligibility(gender, age, girlName) {
    var result = (gender=="Female" && age>=18)
    ? `Hey ${girlName} you are eligible for Marrige`
    : `${girlName} you are Not eligible for Marrige `;
    return result;
 }
 var message = femaleMarriageEligibility("Female", 16, "Jenifer");
 console.log(message);
 var message = femaleMarriageEligibility("Female", 27, "Malinda Gates");
 console.log(message);