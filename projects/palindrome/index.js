const input = document.getElementById("input");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", check)
function checkPalindrome(str) {
    return str.split("").reverse().join("");
}
function check() {

    const value = input.value;
    const rev = checkPalindrome(value);
    if (rev === value) {

        result.innerText = value + " : is a palindrome";
        result.className = "correct"
    } else {
        result.innerText = value + " : is not a palindrome";
        result.className = "wrong"
    }



    input.value = "";
    result = '';
}