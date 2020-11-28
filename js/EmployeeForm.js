window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });

});

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData)
    } catch (e) {
        return;
    }
}

const resetForm = () => {
    setTextValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');
    setValue('#notes', '');
    setTextValue('.salary-output', '400000');
    setTextValue('.text-error', '')
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelector(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    })
}

function createAndUpdateStorage(data) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if (employeePayrollList != undefined) {
        employeePayrollList.push(data)
    } else {
        employeePayrollList = [data]
    }
    alert(employeePayrollList.toString())
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    console.log(parseInt(getInputValueById('#year')), parseInt(getInputValueById('#month')), parseInt(getInputValueById('#day')))
    let date = new Date(parseInt(getInputValueById('#year')), parseInt(getInputValueById('#month')), parseInt(getInputValueById('#day')));
    employeePayrollData.startDate = date;
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}