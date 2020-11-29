window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const headerHTML = ""
    const innerHTML = `${headerHTML}
    </tr>
    <td>
        <id><img class="profile" alt="" src="../assets/profile-images/Ellipse -5.png"> </id>
    </td>
    <td>Lakshmi Ganesh</td>
    <td>Male</td>
    <td>
        <div class="dept-label">Engineering</div>
        <div class="dept-label">HR</div>
    </td>
    <td>300000</td>
    <td>1 Nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHTML;
}