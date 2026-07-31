document.getElementById("eligibilityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim().toUpperCase();
    const age = document.getElementById("age").value;
    const attendance = Number(document.getElementById("attendance").value);
    const marks = Number(document.getElementById("marks").value);
    const errorMsg = document.getElementById("errorMsg");
    const resultCard = document.getElementById("resultCard");

    if (!name || !rollNo || age === "" || isNaN(attendance) || isNaN(marks)) {
        errorMsg.textContent = "All fields are required.";
        resultCard.style.display = "none";
        return;
    }

    const rollRegex = /^[A-Z]{2}\d{3}$/;
    if (!rollRegex.test(rollNo)) {
        errorMsg.textContent = "Roll Number must be 2 letters followed by 3 digits, like CS123.";
        resultCard.style.display = "none";
        return;
    }

    errorMsg.textContent = "";

    let status = "Not Eligible";
    if (attendance >= 75 && marks >= 60) {
        status = "Eligible";
    } else if (attendance >= 75 && marks < 60) {+
        status = "Improvement Required";
    }

    resultCard.style.display = "block";
    resultCard.innerHTML = `
        <h3>Eligibility Result</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Roll No:</strong> ${rollNo}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Attendance:</strong> ${attendance}%</p>
        <p><strong>Marks:</strong> ${marks}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
});