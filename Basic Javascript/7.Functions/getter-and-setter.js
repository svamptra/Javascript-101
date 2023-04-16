
const person = {
    firstName: 'Shibam',
    lastName: 'Patra',
    // fullName() {
    //     return `${person.firstName} ${person.lastName}`; 
    // }

    // if we put a get keyword before the fullname funciton then we can access this like a property
    get fullName() {
        return `${person.firstName} ${person.lastName}`; 
    },

    set fullName(value) {
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// console.log(person.fullName());
console.log(person.fullName);

person.fullName = 'Alok Patra';
console.log(person.fullName);





/*
 getters -> to access properties and objects
 setters -> to change(mutate) them
*/