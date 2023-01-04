// enhaced object literals

function newUser(user,age, country,Uid){
    return {
        user,
        age,
        country, 
        id: Uid,
    }
}

console.log(newUser('Cristian',35,'AR',22));