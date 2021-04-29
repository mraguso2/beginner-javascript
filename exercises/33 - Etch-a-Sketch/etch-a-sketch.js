// select the elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakebtn = document.querySelector('button.shake');
const MOVE_AMOUNT = 20;

// setup our canvas for drawing

const { width, height } = canvas;
//create random x and y starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
    // increment the hue
    hue += 10
    // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what user did
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key })
    }
}

// clear / shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    }, { once: true }) // will remove eventlistner itself
}


// listen for arrow keys
window.addEventListener('keydown', handleKey);
