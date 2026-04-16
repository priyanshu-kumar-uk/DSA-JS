let password = "hfgijbA1!";

let hasLower = false;
let hasUpper = false;
let hasDigit = false;
let hasSpecial = false;
let valid = true;

let special = "!@#$%^&*()-+";

if (password.length < 8) {
    valid = false;
}

for (let i = 0; i < password.length; i++) {
    let ch = password[i];

    if (i > 0 && password[i] === password[i - 1]) {
        valid = false;
        break;
    }

    if (ch >= "a" && ch <= "z") {
        hasLower = true;
    } else if (ch >= "A" && ch <= "Z") {
        hasUpper = true;
    } else if (ch >= "0" && ch <= "9") {
        hasDigit = true;
    } else if (special.includes(ch)) {
        hasSpecial = true;
    }
}

if (!hasLower || !hasUpper || !hasDigit || !hasSpecial) {
    valid = false;
}

console.log(valid);