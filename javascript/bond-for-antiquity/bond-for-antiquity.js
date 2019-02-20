const bondAntiquity = (year) => {
    var firstYear = 100000;
    var totalBond = 0;
    function calcBond (){
        totalBond = firstYear + ((year-1)*120000);
    }
    calcBond();
    console.log(`The total of bonds to be paid is: $${totalBond}`)
}
bondAntiquity(4);