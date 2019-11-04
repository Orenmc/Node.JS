const person = {
    name: 'Oren',
    age: 29,
    greet(){
        console.log('Hi, I\'m ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

const numbers = [1,2,3,4,5,6,7,8,9,10];

/*
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3));
*/

const printName = ({name}) => {
    console.log(name);
}
printName(person);

const {name, age} = person;
console.log(name,age);