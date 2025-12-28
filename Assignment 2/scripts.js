/* Document Object Model
Implementation of Ch2 topic 2.1.1, 2.1.2 and 2.1.3 */

// DOM Element Selection
const Name = document.getElementById("name");
const roll = document.getElementById("roll");
const address = document.getElementById("address");
const btn_submit = document.querySelector(".btn_submit");
const btn_output = document.querySelector(".btn_output");
const transcript = document.getElementById("transcript");
const show_data = document.getElementById("show_data");

// Counter variable
let i = parseInt(localStorage.getItem("counter")) || 0;

// Save user data to localStorage (with form validation)
function saveUserData() {

    if (!Name.value) {
        alert("Name is required");
        return;
    }

    if (!roll.value) {
        alert("Roll Number is required");
        return;
    }
    if (roll.value<= 0) {
    alert("Roll Number must be a positive number");
    return;
}

    if (!address.value) {
        alert("Address is required");
        return;
    }

    alert("Form submitted successfully!");

    const user_object = {
        data_name: Name.value,
        data_roll: Number(roll.value),
        data_address: address.value,
    };

    i++;
    localStorage.setItem("counter", i);
    localStorage.setItem(`user${i}`, JSON.stringify(user_object));

    UpdateTranscript(user_object);

    // Clear form
    Name.value = "";
    roll.value = "";
    address.value = "";
}

// Display all users from localStorage
function displayAllUsers() {
    show_data.innerHTML = "";
    const totalUsers = parseInt(localStorage.getItem("counter")) || 0;

    for (let j = 1; j <= totalUsers; j++) {
        const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`));
        if (user_retrieve) ShowOutput(user_retrieve, j);
    }
}

// Update transcript section
function UpdateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}

// Append user data
function ShowOutput(obj, j) {
    show_data.innerHTML += `
        <div class="border">
            <h2>User ${j}</h2>
            ${description_list(obj)}
        </div>
    `;
}

// Reusable description list
function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt>
            <dd>${obj.data_name}</dd>
            <dt>Roll:</dt>
            <dd>${obj.data_roll}</dd>
            <dt>Address:</dt>
            <dd>${obj.data_address}</dd>
        </dl>
    `;
}

// Event Listeners
btn_submit.addEventListener("click", saveUserData);
btn_output.addEventListener("click", displayAllUsers);
