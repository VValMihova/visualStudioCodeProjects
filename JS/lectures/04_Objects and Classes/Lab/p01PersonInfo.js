function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;

    // return {
    //     firstName,
    //     lastName, 
    //     age,
    // }
}

personInfo("Peter", "Pan", "20");
