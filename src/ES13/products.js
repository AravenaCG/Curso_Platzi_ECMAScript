import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/';
const GETProducts = 'api/v1/products'
console.log(`${API}${GETProducts}`);


const response = await fetch(`${API}${GETProducts}`);
const products = await response.json();

export { products };