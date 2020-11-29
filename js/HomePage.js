window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = " <tr><th></th><th>Name</th><th>Gender</th>" +
        "<th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
        <td><id><img class="profile" alt="" src="${empPayrollData._profilePic}"> </id></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDepHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)"  alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
            <img id="${empPayrollData._id}" onclick="remove(this)"  alt="delete"
            src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDepHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [{
            _name: 'Lakshmi Ganesh',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '16 Sep 2020',
            _note: 'Fresher',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -8.png'
        },
        {
            _name: 'Aditi Noname',
            _gender: 'Female',
            _department: [
                'HR',
                'Sales'
            ],
            _salary: '400000',
            _startDate: '28 Aug 2020',
            _note: 'New Joining',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -4.png'
        }
    ];
    return employeePayrollListLocal;
}