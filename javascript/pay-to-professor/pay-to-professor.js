//Pay to professor
( (hours) => {
    var desc = (hours*20000)*0.05;
    var totalPay = hours*20000;
    console.log(`The discount amount is: $${desc} and the total pay is: $${totalPay-desc}`)
})(4);