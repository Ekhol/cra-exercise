import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please!`);
console.log(`Sure, here you go: ${fruit}`);
console.log(`Yummy! May I have another?`);

let remainder = remove(fruits, fruit);

console.log(`Sorry, we're all out of that! We have ${remainder.length} other fruits`)