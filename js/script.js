function backgraundRed() {
    document.body.style.backgroundColor = 'red'
}

function backgraundYellow() {
    document.body.style.backgroundColor = 'yellow'
}

// Another Option add to background Color
// option 3:

const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makeBlueColor

function makeBlueColor() {
    document.body.style.backgroundColor = 'blue'
}

// Option 3 another

const purpleColor = document.getElementById("make-purple");

purpleColor.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}
