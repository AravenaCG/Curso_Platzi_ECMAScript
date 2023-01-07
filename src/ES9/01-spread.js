const user = {ame: 'turko', age : 35, country: 'Argentina'};

const {ame, ...values } = user;
console.log(ame);
console.log(values);