let lengthSlider = document.getElementById("lengthSlider");
let valueSlider = document.getElementById("valueSlider");

valueSlider.textContent = lengthSlider.value;

let updateSliderValue = () => {
    valueSlider.textContent = lengthSlider.value;
    passGen();
};

lengthSlider.addEventListener("input", updateSliderValue);

const btn = document.getElementById("btnG");
const passBox = document.getElementById("passbox");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const includeUppercaseCheckbox = document.getElementById("includeUppercase");
const includeLowercaseCheckbox = document.getElementById("includeLowercase");
const includeNumberCheckbox = document.getElementById("includeNumber");
const includeSymbolCheckbox = document.getElementById("includeSymbol");

function passGen() {
    let passLength = parseInt(valueSlider.textContent);
    let password = '';

    if (
        includeUppercaseCheckbox.checked ||
        includeLowercaseCheckbox.checked ||
        includeNumberCheckbox.checked ||
        includeSymbolCheckbox.checked
    ) {

        if (includeUppercaseCheckbox.checked) {
            password += uppercase[Math.floor(Math.random() * uppercase.length)];
        }

        if (includeLowercaseCheckbox.checked) {
            password += lowercase[Math.floor(Math.random() * lowercase.length)];
        }

        if (includeNumberCheckbox.checked) {
            password += numbers[Math.floor(Math.random() * numbers.length)];
        }

        if (includeSymbolCheckbox.checked) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        }

        passBox.style.border = "2px solid green";
    } else {
        passBox.textContent = "Please select at least one!!";
        passBox.style.border = "1px solid red";
        passBox.style.fontSize = "15px"
        return;
    }

    let allChars = '';

    if (includeUppercaseCheckbox.checked) {
        allChars += uppercase;
    }

    if (includeLowercaseCheckbox.checked) {
        allChars += lowercase;
    }

    if (includeNumberCheckbox.checked) {
        allChars += numbers;
    }

    if (includeSymbolCheckbox.checked) {
        allChars += symbols;
    }

    for (let i = password.length; i < passLength; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passBox.textContent = password;
}

btn.addEventListener("click", passGen);


const copyBtn = document.getElementById("copybtn");

copyBtn.addEventListener("click", () => {
    const password = passBox.textContent;

    if (password && password !== "Please select at least one!!") {
        navigator.clipboard.writeText(password);
        alert("Password copied to clipboard!");
    } else {
        alert("Please generate a password first!");
    }
});
