//saving in the bank
const savingInTheBank = (salary) => {
   function interest(){
    var calcInterest = salary + (salary*0.015);   
    console.log(`Your salary is $${calcInterest}`);
   }
   interest(); 
}
savingInTheBank(1000);