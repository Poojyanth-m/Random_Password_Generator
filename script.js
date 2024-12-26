// Selecting DOM elements
const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn = document.querySelector(".generate-btn");

// Defining character sets for password generation
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

// Function to generate password based on selected options
const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => {
        if(option.checked) { // Check if the option is selected
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id]; // Add selected characters to static password
            } else if(option.id === "spaces") {
                staticPassword += `  ${staticPassword}  `; // Add spaces if selected
            } else {
                excludeDuplicate = true; // If exclude-duplicate is selected, set flag to true
            }
        }
    });

    // Generate random password by selecting characters randomly from staticPassword
    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) {
            // Avoid duplicates if exclude-duplicate is selected
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar; // Add random character to password
        }
    }

    passwordInput.value = randomPassword; // Display the generated password in the input field
}

// Function to update the password strength indicator based on password length
const upadatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}

// Function to update slider and regenerate password on slider change
const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value; // Update slider value display
    generatePassword(); // Regenerate the password
    upadatePassIndicator(); // Update password strength indicator
}
updateSlider();

// Function to copy the password to clipboard
const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value); // Copy the password to clipboard
    copyIcon.innerText = "check"; // Change copy icon to checkmark
    copyIcon.style.color = "#4285F4"; // Change icon color
    setTimeout(() => {
        copyIcon.innerText = "copy_all"; // Reset icon after 1.5 seconds
        copyIcon.style.color = "#707070";
    }, 1500);
}

// Event listeners for interactions
copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
