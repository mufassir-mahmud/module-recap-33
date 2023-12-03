const user = {id: 1, name: 'Mufassir', age: 21};
// console.log(user);
const strigified = JSON.stringify(user);
// console.log(strigified);

const shop = {
    owner: 'Mufassir Mahmud',
    address:{
        street: 'Munshi Bari Road',
        city: 'Feni',
        country: 'Bangladesh',
    },
    products: ['Computer', 'Lighter', 'Mobile'],
    revenue: 120000,
    isUsed: true
}
const shoping = JSON.stringify(shop);
console.log(shoping);
// console.log(shop.products[1]);
const persing = JSON.parse(shoping);
console.log(persing);