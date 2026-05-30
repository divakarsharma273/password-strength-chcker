const password = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const message = document.getElementById("message");

password.addEventListener("input", () => {
    const value = password.value;

    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 2) {
        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";
        message.textContent = "Weak Password";
    }
    else if (score <= 4) {
        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";
        message.textContent = "Medium Password";
    }
    else {
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
        message.textContent = "Strong Password";
    }

    if (value.length === 0) {
        strengthFill.style.width = "0%";
        message.textContent = "Enter a password";
    }
});