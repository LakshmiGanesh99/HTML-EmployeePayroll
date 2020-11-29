let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml = " <tr><th></th><th>Name</th><th>Gender</th>" +
        "<th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
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