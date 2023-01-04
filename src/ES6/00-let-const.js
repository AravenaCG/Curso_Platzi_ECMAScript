//declarar y asignar
var lastName = 'Cristian';
//reasignar 
lastName = 'Aravena';
console.log(lastName);

//tambien se puede reasignar
let firstName = 'Aravena';
firstName = 'Cristian';
console.log(firstName);

//no se puede reasignar
const animal ='dog';
//animal = 'cat';
console.log(animal);

const fruit = () => {
    if (true){
        var fruit1 ='apple'; //function scope
        let fruit2= 'kiwi'; //block scope
        const fruit3= 'banana'; //block scope
        }
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
}

fruit();