function newUser(name,age,country){
    var name = name || 'Oscar';
    var age = age || 35;
    var country = country || 'Argentina';
    console.log(name, age, country);
}

newUser();
newUser('Daniel',33,'Ecuador');

function newAdmin( name= 'German', age = 32, country = 'CL'){
    console.log(name,age,country);
}


newAdmin();
newAdmin('Ana',24,'FR');