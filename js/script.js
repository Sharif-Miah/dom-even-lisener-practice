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

// Option 4:

const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', function makepinkColor() {
    document.body.style.backgroundColor = 'pink'
})

// Another Option

const makeGreen = document.getElementById('make-green');

makeGreen.addEventListener('click', makeGreenColor);

function makeGreenColor() {
    document.body.style.backgroundColor = 'green'
}