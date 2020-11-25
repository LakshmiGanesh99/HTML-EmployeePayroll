class EmployeePayrollData {

    get id() { return this.id }
    set id(id) { this.id = id }

    get name() { return this.name }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(text.value))
            this.name = name
        else textError.textContent = "Name is Incorrect"
    }

    get profilePic() { return this.profilePic }
    set profilePic(profilePic) { this.profilePic = profilePic }

    get gender() { return this.gender; }
    set gender(gender) {
        this.gender = gender;
    }
    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", gender= " + this.gender + ", profilePic= " + this.profilePic + ", department= " + this.department +
            ", salary= " + this.salary + ", startDate= " + empDate + ", note= " + this.note;
    }

}