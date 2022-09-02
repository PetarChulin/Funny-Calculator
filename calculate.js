
document.getElementById("myID").addEventListener("mouseover", function () {
    document.getElementById("myID").classList = 'image';
    document.getElementById('calc').classList = 'anime';
});
document.getElementById("myID").addEventListener("mouseout", function () {
    document.getElementById("myID").style.backgroundColor = "rgb(130, 138, 138)";
    document.getElementById("myID").classList.remove('image');
    document.getElementById('calc').classList.remove('anime')
});

function checkClick() {
    let clickCount = 0;
    if (clickCount % 2 == 0) {
        document.getElementsByName('digits')[0].value = sum;
    }
    clickCount++
}

document.getElementById("myID").addEventListener("mouseover", action);


function clearFields() {
    document.getElementsByName('digits')[0].value = '';
    document.getElementsByName('sum')[0].value = '';
    clickCount = 0;
}


function calc() {
    let sum = 1;

    let operator = document.getElementsByName('digits')[0].value;

    if (operator.includes('*')) {
        let num1 = operator.split('*')[0];
        let num2 = operator.split('*')[1];

        if (num2 == '') { num2 = num1; }
        sum = (Number(num1) * Number(num2));

        sum.toString().includes('.') && sum.toString().split('.')[1].length >= 6
            ? document.getElementsByName('digits')[0].value = sum.toFixed(1)
            : document.getElementsByName('digits')[0].value = sum;
        operator = operator.replace('*', '');

    } else if (operator.includes('+')) {
        let sum = 0;
        let num1 = operator.split('+')[0];
        let num2 = operator.split('+')[1];
        if (num2 == '') { num2 = num1; }
        sum = Number(num1) + Number(num2);
        document.getElementsByName('digits')[0].value = sum;
        operator = operator.replace('+', '');
    } else if (operator.includes('-')) {
        let num1 = operator.split('-')[0];
        let num2 = operator.split('-')[1];
        if (num2 == '') { num2 = num1; }
        let sum = Number(num1) - Number(num2);
        document.getElementsByName('digits')[0].value = sum;
        operator = operator.replace('-', '');
    } else if (operator.includes('/')) {
        let num1 = operator.split('/')[0];
        let num2 = operator.split('/')[1];
        if (num2 == '') { num2 = num1; }
        let sum = Number(num1) / Number(num2);
        document.getElementsByName('digits')[0].value = sum;
        operator = operator.replace('/', '');
    }
}


let body = document.getElementById('body');
let sign;
let image;



let anim = {
    speed: 1,
    signInterval: 3000
};
let scene = {
    lastSign: 0
};

let player = {
    x: 300,
    y: 0,
    width: 0,
    height: 0
};

function action(timestamp) {
    if (timestamp - scene.lastSign > anim.signInterval + 40000 * Math.random()) {
        sign = document.createElement('div');
        sign.classList.add('sign');
        image = document.createElement('img');
        sign.y = 0;
        sign.style.top = sign.y + 'px';
        sign.style.left = (body.offsetWidth - 96) * Math.random() * 7 + 'px';

        sign.appendChild(image);
        body.appendChild(sign);
        scene.lastSign = timestamp;
        choosePic();
    }
    let signs = document.querySelectorAll('.sign');
    signs.forEach(sign => {

        sign.y += anim.speed;
        sign.style.top = sign.y + 'px';
        sign.y >= body.offsetHeight - sign.offsetHeight ? body.removeChild(sign) : null;

    });
    window.requestAnimationFrame(action);

    document.getElementById("myID").removeEventListener("mouseover", action);
}
function choosePic() {
    let pics = new Array('images/icons8-mathematics-62.png', 
    'images/icons8-mathematics-64.png', 
    'images/icons8-circled-6-100.png',
    'images/icons8-5-c-96.png',
    'images/icons8-circled-2-c-80.png');

    let randomNum = Math.floor(Math.random() * pics.length);
    image.src = pics[randomNum];
}

