

// const firstFunc = () => {
//     let passFunc = (i) => {
//         return 3 + i;
//     }
//     return secondFunc(passFunc, 3)
// }

// let secondFunc = (func, i) => {
//     return func(i)
// }
// firstFunc();


const infiniteFunc = (...args) => {
    let sum = 0;
    args.map(arg => {
        arg > sum && (sum = arg);
    })
    return sum;
}
console.log(infiniteFunc(1, 2, 3, 4))

console.log(infiniteFunc(...[1,2,3,4,5]))

// class Person {
//     constructor(name, age, ethnicity) {
//         this.name = name;
//         this.age = age;
//         this.ethnicity = ethnicity;
//     }
// }

// let ryan = new Person('ryan', 26, 'canadian')
// let steven = new Person('steven', 26, 'canadian')