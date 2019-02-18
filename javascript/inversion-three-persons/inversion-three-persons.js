//inversion three persons 
const inversionThreePerson = (personOne, personTwo, personThree) => {
    var total = (personOne + personTwo +personThree);
        function percent(str){
            var percentPersonOne = (personOne/total)*100;
            var percentPersonTwo = (personTwo/total)*100;
            var percentPersonThree = (personThree/total)*100;
            console.log(`${str} one invested ${percentPersonOne}%, ${str} two invested ${percentPersonTwo}%, and ${str} three invested ${percentPersonThree}%`);
        }
        percent('the person');  
        console.log(`Total inverted is: ${total}`)
    }
inversionThreePerson(100, 200, 500);