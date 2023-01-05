function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Cristian','Oscar','David','Ana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());