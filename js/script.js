/*
  File: script.js
  Author: CS100 Team
  Date Created: 23 July 2023
  Copyright: CSTU
  Description: JS code of CSTU Passport that validate with JS
*/

const config = {
    backendUrl: "http://localhost:8000/", // Default backend URL
};
const port = 8000;

const fullnameInput = document.getElementById("fullname");
const studentIDInput = document.getElementById("studentID");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const academicYearInput = document.getElementById("academicYear");
const semesterInput = document.getElementById("semester");
const facultyInput = document.getElementById("faculty");
const workTitleInput = document.getElementById("workTitle");
const activityTypeInput = document.getElementById("activityType");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const locationInput = document.getElementById("location");
const descriptionInput = document.getElementById("description");

const fullnameError = document.getElementById("fullnameError");
const studentIDError = document.getElementById("studentIDError");
const emailError = document.getElementById("emailError");
const phoneNumberError = document.getElementById("phoneNumberError");
const academicYearError = document.getElementById("academicYearError");
const semesterError = document.getElementById("semesterError");
const facultyError = document.getElementById("facultyError");
const workTitleError = document.getElementById("workTitleError");
const activityTypeError = document.getElementById("activityTypeError");
const startDateError = document.getElementById("startDateError");
const endDateError = document.getElementById("endDateError");
const locationError = document.getElementById("locationError");
const descriptionError = document.getElementById("descriptionError");

const dataArray = [fullnameInput, studentIDInput, emailInput, phoneNumberInput, academicYearInput, semesterInput, facultyInput, workTitleInput, activityTypeInput, startDateInput, endDateInput, locationInput, descriptionInput];

const dataErrorArray = [fullnameError, studentIDError, emailError, phoneNumberError, academicYearError, semesterError, facultyError, workTitleError, activityTypeError, startDateError, endDateError, locationError, descriptionError];

// Function to validate Firstname and Lastname
function validateName() {
    const names = fullnameInput.value.trim().split(" ");

    if ((names.length !== 2 || names[0] == "" || names[1] == "") && names != "") {
        fullnameError.textContent = "Enter only your Firstname and Lastname.";
        return false;
    } else {
        fullnameError.textContent = ""; // Clear the error message when valid
    }
    return true;
}

// Function to validate Student ID
function validateStudentID() {
    const studentIDPattern = /^\d{10}$/;

    if (!studentIDPattern.test(studentIDInput.value) && studentIDInput.value != "") {
        studentIDError.textContent = "Enter a 10-digit Student ID.";
        return false;
    } else {
        studentIDError.textContent = ""; // Clear the error message when valid
    }
    return true;
}

// Function to validate University Email
function validateEmail() {
    const emailPattern = /^.+@dome\.tu\.ac\.th$/;

    if (!emailPattern.test(emailInput.value) && emailInput.value != "") {
        emailError.textContent =
            'Enter "@dome.tu.ac.th" emali.';
        return false;
    } else {
        emailError.textContent = ""; // Clear the error message when valid
    }
    return true;
}

// Function to validate Phone Number
function validatePhoneNumber() {
    const phoneNumberPattern = /^0[0-9]{9}$/;

    if (!phoneNumberPattern.test(phoneNumberInput.value) && phoneNumberInput.value != "") {
        phoneNumberError.textContent =
            "Enter a 10-digit Phone Number.";
        return false;
    } else {
        phoneNumberError.textContent = ""; // Clear the error message when valid
    }
    return true;
}

const facultyValues = ["00", "01", "02", "03", "04", "05", "03", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "21", "22", "23", "24", "26", "27", "64"];

const facultyTexts = [
    "สำนักบัณฑิตอาสาสมัคร",
    "คณะนิติศาสตร์",
    "คณะพาณิชยศาสตร์และการบัญชี",
    "คณะรัฐศาสตร์",
    "คณะเศรษฐศาสตร์",
    "คณะสังคมสงเคราะห์ศาสตร์",
    "คณะศิลปศาสตร์",
    "คณะวารสารศาสตร์และสื่อสารมวลชน",
    "คณะสังคมวิทยาและมานุษยวิทยา",
    "คณะวิทยาศาสตร์และเทคโนโลยี",
    "คณะวิศวกรรมศาสตร์",
    "คณะแพทยศาสตร์",
    "คณะสหเวชศาสตร์",
    "คณะทันตแพทยศาสตร์",
    "คณะพยาบาลศาสตร์",
    "คณะศิลปกรรมศาสตร์",
    "คณะสถาปัตยกรรมศาสตร์และการผังเมือง",
    "คณะสาธารณสุขศาสตร์",
    "คณะเภสัชศาสตร์",
    "สถาบันภาษา",
    "สถาบันเทคโนโลยีนานาชาติสิรินธร",
    "วิทยาลัยนวัตกรรม",
    "วิทยาลัยสหวิทยาการ",
    "โครงการไทยศึกษา",
    "วิทยาลัยนานาชาติปรีดี พนมยงค์",
    "โครงการนิติเศรษฐศาสตร์การค้าระหว่างประเทศ"
];

for (let i = 0; i < facultyTexts.length; i++) {
    const option = document.createElement("option");
    option.value = facultyValues[i];
    option.text = facultyTexts[i];
    facultyInput.appendChild(option);
}

function validateFaculty() {
    if (facultyInput.value != studentIDInput.value[2] + studentIDInput.value[3] && emailInput.value != "") {
        facultyError.textContent =
            "Choose your faculty.";
        return false;
    } else {
        facultyError.textContent = ""; // Clear the error message when valid
    }
    return true;
}

function required() {
    let pass = true;

    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].value == "") {
            dataErrorArray[i].textContent = "Required.";
            pass = false;
        } else {
            dataErrorArray[i].textContent = "";
        }
    }

    return pass;
}

for (let i = 0; i < dataArray.length; i++) {
    dataArray[i].addEventListener("input", () => {
        resetError(dataErrorArray[i]);
    });
}

function resetError(event) {
    event.textContent = "";
    return true;
}

// Function to validate form inputs on user input
function validateFormOnInput() {
    validateName();
    validateStudentID();
    validateEmail();
    validateFaculty();
    required();
}

function output() {
    const facultyInputText = facultyTexts[facultyValues.indexOf(facultyInput.value)];
    const activityTypeTexts = ["", "Course", "Activity", "Work", "Research", "Sports", "Competition", "Computer Science"];
    const activityTypeText = activityTypeTexts[parseInt(activityTypeInput.value)];

    document.getElementById("fullnameOutput").textContent = "Name: " + fullnameInput.value;
    document.getElementById("studentIDOutput").textContent = "Student ID: " + studentIDInput.value;
    document.getElementById("emailOutput").textContent = "Email: " + emailInput.value;
    document.getElementById("phoneNumberOutput").textContent = "Phone Number: " + phoneNumberInput.value;
    document.getElementById("academicYearOutput").textContent = "Academic Year: " + academicYearInput.value;
    document.getElementById("semesterOutput").textContent = "Semester: " + semesterInput.value;
    document.getElementById("facultyOutput").textContent = facultyInputText;
    document.getElementById("workTitleOutput").textContent = workTitleInput.value;
    document.getElementById("activityTypeOutput").textContent = "Activity Type: " + activityTypeText;
    document.getElementById("startTimeOutput").textContent = startDateInput.value.split('T')[0];
    document.getElementById("startDateOutput").textContent = startDateInput.value.split('T')[1];
    document.getElementById("endTimeOutput").textContent = endDateInput.value.split('T')[0];
    document.getElementById("endDateOutput").textContent = endDateInput.value.split('T')[1];
    document.getElementById("locationOutput").textContent = "Location: " + locationInput.value;
    document.getElementById("descriptionOutput").textContent = descriptionInput.value;
    return true;
}

// Function to fetch activity types from the backend
async function fetchActivityTypes() {
    try {
        const response = await fetch(`http://${window.location.hostname}:${port}/getActivityType`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Failed to fetch activity types.");
            return [];
        }
    } catch (error) {
        console.error("An error occurred while fetching activity types:", error);
        return [];
    }
}

// Function to populate activity types in the select element
function populateActivityTypes(activityTypes) {
    const activityTypeSelect = document.getElementById("activityType");

    for (const type of activityTypes) {
        const option = document.createElement("option");
        option.value = type.id;
        option.textContent = type.value;
        activityTypeSelect.appendChild(option);
    }
}

// Event listener when the page content has finished loading
document.addEventListener("DOMContentLoaded", async () => {
    const activityTypes = await fetchActivityTypes();
    populateActivityTypes(activityTypes);
});

// Function to submit the form
async function submitForm(event) {
    event.preventDefault();

    // Validate form inputs before submission
    if (!validateName() || !validateStudentID() || !validateEmail() || !validateFaculty() || !required()) {
        return;
    }

    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;
    const startDateError = document.getElementById("startDateError");
    const endDateError = document.getElementById("endDateError");
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    if (endDate <= startDate) {
        startDateError.textContent = "Start date must come before end date.";
        endDateError.textContent = "End date must be after start date.";
    }

    // Create the data object to send to the backend
    const formData = new FormData(event.target);
    const data = {
        first_name: formData.get("fullname").split(" ")[0],
        last_name: formData.get("fullname").split(" ")[1],
        faculty: formData.get("faculty"),
        student_id: parseInt(formData.get("studentID")),
        email: formData.get("email"),
        phone_number: formData.get("phoneNumber"),
        title: formData.get("workTitle"),
        type_of_work_id: parseInt(formData.get("activityType")),
        academic_year: parseInt(formData.get("academicYear")) - 543,
        semester: parseInt(formData.get("semester")),
        start_date: formData.get("startDate"),
        end_date: formData.get("endDate"),
        location: formData.get("location"),
        description: formData.get("description")
    };

    console.log(data);
    output();
    document.getElementById("activityCard").classList.remove("hidden");

    try {
        // Send data to the backend using POST request
        const response = await fetch(`http://${window.location.hostname}:${port}/record`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log("Form data submitted successfully!");

            // Format JSON data for display
            const formattedData = Object.entries(responseData.data)
                .map(([key, value]) => `"${key}": "${value}"`)
                .join("\n");

            // Display success message with formatted data
            alert(responseData.message + "\n" + formattedData);

            document.getElementById("myForm").reset();
        } else {
            console.error("Failed to submit form data.");

            // Display error message
            alert("Failed to submit form data. Please try again.");
        }
    } catch (error) {
        console.error("An error occurred while submitting form data:", error);
    }
}

// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", submitForm);

// Event listeners for input validation on user input
// document.getElementById("fullname").addEventListener("input", validateName);
// document.getElementById("studentID").addEventListener("input", validateStudentID);
// document.getElementById("email").addEventListener("input", validateEmail);
