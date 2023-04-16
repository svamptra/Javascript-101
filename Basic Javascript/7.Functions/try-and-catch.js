const person = {
    firstName: 'Shibam',
    lastName: 'Patra',
    get fullName() {
        return `${person.firstName} ${person.lastName}`; 
    },

    set fullName(value) {

        if(typeof value !==string)
            throw new Error('Value is not a string');

        let parts = value.split(' ');
        if(parts.length !==2)
            throw new Error('Enter a first and last name.')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// person.fullName = null;

try {
    // person.fullName = true;
    person.fullName = '';
}
catch(e) {
    console.log(e);
}

console.log(person.fullName);

