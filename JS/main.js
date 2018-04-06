let orangeBtn = document.querySelector('.orangeBtn');

let welcomeScreen = document.querySelector('.welcome-screen');
let welcomeMessage = document.querySelector('.welcome-message');
let itemScreen = document.querySelector('.items-screen');

let items = document.querySelectorAll('.list-group-item');

let beep = document.getElementById('beep');
let isPlaying = false;

let total = document.querySelector('.total');
let totalCount = 0;

let keys = document.querySelectorAll('.KeyboardKey');

function init() {
    document.querySelector('.startBtn').addEventListener('click', itemScreenOn);
    document.querySelector('.cancel').addEventListener('click', itemScreenOn);
    document.querySelector('.enter').addEventListener('click', itemScreenOn);

    orangeBtn.addEventListener('click', orangeScreenOn);
    keys.forEach(function (key) {
        key.addEventListener('click', keyPress);
    })

    document.querySelector('.whichOne').addEventListener('click', whichOne);
    document.getElementById('check').addEventListener('click', bigOrSmall);
    document.getElementById('enter').addEventListener('click', enterOrange);

}

function itemScreenOn() {
    welcomeScreen.classList.add('hidden');
    welcomeMessage.classList.add('hidden');
    itemScreen.classList.remove('hidden');
    document.querySelector('.orange-screen').classList.add('hidden');
    
    
}

function orangeScreenOn() {
    itemScreen.classList.add('hidden');
    document.querySelector('.orange-screen').classList.remove('hidden');
}

function keyPress(ev) {
    document.getElementById('orangeName').value += ev.currentTarget.textContent;
    if (document.getElementById('orangeName').value == "ORANGE") {
        document.querySelector('.firstRow').classList.add('hidden');
        document.querySelector('.secondRow').classList.remove('hidden');
    } else {
        document.querySelector('.firstRow').classList.remove('hidden');
        document.querySelector('.secondRow').classList.add('hidden');
    }
}

function whichOne() {
    document.querySelector('.orangeCheck').classList.remove('hidden');
    document.querySelector('.secondRow').classList.add('hidden');
}

function bigOrSmall() {
    if (document.getElementById('orangeNum').value <= 2) {
        document.querySelector('.bigOrSmall').textContent = "Those are big orange(s)";
    } else {
        document.querySelector('.bigOrSmall').textContent = "Those are small orange(s)";
    }
    
    document.getElementById('enter').classList.remove('hidden');
}

function enterOrange() {
    document.getElementById('orangeName').value = "BIG ORANGES";
    document.querySelector('.orangeCheck').classList.add('hidden');
}

document.addEventListener('keypress', function (ev) {
    let char = ev.char || ev.charCode || ev.which;
    if (char == 32) {
        for (i = 0; i < 4; i++) {
            if (items[i].classList.contains('hidden')) {
                items[i].classList.remove('hidden');
                beep.play();
                totalCount = totalCount + 4.99;
                total.textContent = "Your total: $" + totalCount;
                break;
            }
        }
    }
});










let loadEvent = ('deviceready' in document) ? 'deviceready' : 'DOMContentLoaded';
document.addEventListener(loadEvent, init);
