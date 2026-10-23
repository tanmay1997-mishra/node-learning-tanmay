console.log('--- const vs let ---');
const user = {
  name: 'tanmay',
  email: 'abc@gmail.com',
  address: { city: 'jhansi' },
};

user.name = 'mishra';
console.log('const object, property changed:', user.name);

try {
  user = { name: 'someone else' };
} catch (error) {
  console.log('const reassign failed:', error.message);
}

let score = 10;
score = 20;
console.log('let reassigned:', score);

console.log('\n--- Destructuring ---');
const {
  name,
  email,
  address: { city },
  role = 'customer',
} = user;
console.log(name, email, city, role);

console.log('\n--- Spread copy ---');
const product = { id: 1, name: 'Vegan Protein', status: 'active' };
const updatedProduct = { ...product, category: 'vegetarian' };
console.log('original:', product);
console.log('updated:', updatedProduct);
