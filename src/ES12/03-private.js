//declaramos la clase
class User{

    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
        //metodos
    greeting(){
        return 'Hello';
    }
    };
    //instancia de una clase
    const newUsert = new User();
    console.log(newUsert.greeting());
    
    const secondUser = new User();
    console.log(secondUser.greeting());
     
    const cristian = new User();
    
    //this
    
    class User{
        constructor(name){
            this.name= name;
        }
        //metodos
        speak(){
            return 'Hello';
        }
    
        greeting(){
            return `${this.speak()} ${this.name}`
        }
    }
    
    const thirdUser = new User('Cristian');
    console.log(thirdUser.greeting());
    
    //getters and setters
    
    class User{
    
        constructor(name,age){
            this.name= name;
            this.age=age;
        }
    
        //metodos
        // ahora con # se indica que la función es privada
        #speak(){
            return 'Hello';
        }
    
        greeting(){
            return `${this.speak} ${this.name}`;
        }
    
        get #uAge(){
            return this.age;
        }
    
        set uAge(nAge){
            this.age=nAge;
        }
    
    
    }
    const bebeloper = new User('Cristian2',34);
    console.log(bebeloper.uAge);
    console.log(bebeloper.uAge = 35);
    