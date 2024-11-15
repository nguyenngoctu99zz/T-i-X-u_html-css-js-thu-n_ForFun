let timerElement = document.getElementById('timer');
let resultElement = document.getElementById('result');
let taiButton = document.getElementById('tai');
let xiuButton = document.getElementById('xiu');
let currentMoneyElement = document.getElementById('current-money');
let betAmountElement = document.getElementById('bet-amount');
let dice1Element = document.getElementById('dice1');
let dice2Element = document.getElementById('dice2');
let dice3Element = document.getElementById('dice3');
let continueButton = document.getElementById('continue');
let cancelButton = document.getElementById('cancel');
let ketQuaElement = document.getElementById('ketQua');
let timer = 10;
let interval;
let userChoice = null;
let currentMoney = 1000;

function startGame() {
    timer = 10;
    userChoice = null;
    resultElement.textContent = 'Chọn Tài hoặc Xỉu';
    dice1Element.src = `images/dice1.png`;
    dice2Element.src = `images/dice1.png`;
    dice3Element.src = `images/dice1.png`;
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            showResult();
        }
    }, 1000);
}

function showResult() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    let total = dice1 + dice2 + dice3;
    let result = total > 10 ? 'Tài' : 'Xỉu';

    dice1Element.src = `images/dice${dice1}.png`;
    dice2Element.src = `images/dice${dice2}.png`;
    dice3Element.src = `images/dice${dice3}.png`;

    ketQuaElement.textContent = `Kết quả: ${result} (${dice1} + ${dice2} + ${dice3} = ${total})`;

    let betAmount = parseInt(betAmountElement.value);
    if (isNaN(betAmount) || betAmount <= 0) {
        alert('Vui lòng nhập số tiền cược hợp lệ!');
        return;
    }

    if (userChoice) {
        if (userChoice === result) {
            currentMoney += betAmount;
            alert('Bạn đã thắng!');
        } else {
            currentMoney -= betAmount;
            alert('Bạn đã thua!');
        }
        currentMoneyElement.textContent = currentMoney;
    } else {
        alert('Bạn chưa chọn!');
    }
}

taiButton.addEventListener('click', () => {
    userChoice = 'Tài';
    resultElement.textContent = 'Bạn đã chọn Tài';
});

xiuButton.addEventListener('click', () => {
    userChoice = 'Xỉu';
    resultElement.textContent = 'Bạn đã chọn Xỉu';
});

continueButton.addEventListener('click', () => {
    clearInterval(interval);
    startGame();
});

cancelButton.addEventListener('click', () => {
    clearInterval(interval);
    userChoice = null;
    resultElement.textContent = 'Bạn đã hủy đặt lệnh';
    timerElement.textContent = '10';
    dice1Element.src = `images/dice1.png`;
    dice2Element.src = `images/dice1.png`;
    dice3Element.src = `images/dice1.png`;
});

startGame();


let lidElement = document.getElementById('lid');
let viewResultTime = 5;

function startGame() {
    timer = 10;
    userChoice = null;
    resultElement.textContent = 'Chọn Tài hoặc Xỉu';
    dice1Element.src = `images/dice1.png`;
    dice2Element.src = `images/dice1.png`;
    dice3Element.src = `images/dice1.png`;
    lidElement.classList.remove('hidden');
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            showResult();
        }
    }, 1000);
}

function showResult() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    let total = dice1 + dice2 + dice3;
    let result = total > 10 ? 'Tài' : 'Xỉu';

    dice1Element.src = `images/dice${dice1}.png`;
    dice2Element.src = `images/dice${dice2}.png`;
    dice3Element.src = `images/dice${dice3}.png`;

    lidElement.classList.remove('hidden');
    lidElement.addEventListener('click', () => {
        lidElement.classList.add('hidden');
        ketQuaElement.textContent = `Kết quả: ${result} (${dice1} + ${dice2} + ${dice3} = ${total})`;

        setTimeout(() => {
            startGame();
        }, viewResultTime * 1000);
    }, { once: true });

    let betAmount = parseInt(betAmountElement.value);
    if (isNaN(betAmount) || betAmount <= 0) {
        alert('Vui lòng nhập số tiền cược hợp lệ!');
        return;
    }

    if (userChoice) {
        if (userChoice === result) {
            currentMoney += betAmount;
            alert('Bạn đã thắng!');
        } else {
            currentMoney -= betAmount;
            alert('Bạn đã thua!');
        }
        currentMoneyElement.textContent = currentMoney;
    } else {
        alert('Bạn chưa chọn!');
    }
}

