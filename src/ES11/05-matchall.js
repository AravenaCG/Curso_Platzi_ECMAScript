const regex =  /\b(Apple)+\b/g;

const fruit = 'Orange, Banana, Kiwi, Apple, Carrot';


for (const match of fruit.matchAll(regex)){
    console.log(match)
}