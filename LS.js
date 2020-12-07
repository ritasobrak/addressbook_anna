class LS {
    saveContact(person) {
        //get person data from Local Storage
        let persons;
        //if data not exists
        if (localStorage.getItem('persons') === null) {
            persons = [];
        } else {
            //data is exists
            //get them fro Local Storage
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));
    }

    getContacts() {
        //get person data from Local Storage
        let persons;
        //if data not exists
        if (localStorage.getItem('persons') === null) {
            persons = [];
        } else {
            //data is exists
            //get them fro Local Storage
            persons = JSON.parse(localStorage.getItem('persons'));
        }
        return persons;
    }



    deleteContact(firstname, lastname) {
        //get all data from LS
        const persons = this.getContacts();
        //control each contact
        persons.forEach(function (person, index) {
            if (person.firstName === firstname && person.lastName === lastname) {
                persons.splice(index, 1);
            }
        });
        //set up data on LS
        localStorage.setItem('persons', JSON.stringify(persons));
        //return true
        return true;
    }


    clearContacts() {
        //get person data from Local Storage
        let persons;
        //if data not exists
        if (localStorage.getItem('persons') === null) {
            persons = [];
        } else {
            //data is exists
            //set empty data to Local Storage
            persons = [];
            localStorage.setItem('persons', JSON.stringify(persons));
            //return true
            return true;
        }
    }

    clearContacts() {
        localStorage.clear();
        return true;
    }

}