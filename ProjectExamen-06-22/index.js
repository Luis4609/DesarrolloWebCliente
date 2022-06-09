// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Get elements to generate the random background color
const buttonColor = document.getElementById('color-active')
const colorDisplay = document.querySelector('.hexValue')

// Generate a random HEX color, for the footer background
const setRandomBackground = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    buttonColor.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setRandomBackground);
setRandomBackground();