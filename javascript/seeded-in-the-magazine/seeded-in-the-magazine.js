// Seeded in the magazine
const seeded = (work, cm, color) => {
    var totalPay = 0;
    function pay (){
        totalPay = ((work*20000)+(cm*15000)+(color*25000));
    }
    pay();
    console.log(`The pay total is: $${totalPay}`);
}
seeded(1,1,1);