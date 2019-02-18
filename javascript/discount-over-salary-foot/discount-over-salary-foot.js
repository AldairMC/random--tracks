//discount over salary foot
( ( salary ) => {
    var publicPolitics = salary*0.01;
    var socialSecurity = salary*0.04;
    var forcedInsurance = salary*0.005;
    var savings = salary*0.05;
    var total = publicPolitics+socialSecurity+forcedInsurance+savings;
    console.log(`The discount in the salary is: $${total}`);
})(1000);