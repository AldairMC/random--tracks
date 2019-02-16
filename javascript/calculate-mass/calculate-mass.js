//Calculate mass 
const calculateMass = (press, fever, volume) => {
    let mass = (press * volume)/(.37*(fever + 460));
    console.log(mass);  
};
calculateMass(1, 20, 100);