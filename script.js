let cardNo = document.getElementById('cardNum');    
if (cardNo) {
    cardNo.addEventListener('keyup', fun);
} else {
    console.log('wtf');
}

function giveSpaceOnCardNumber() {
    let input = document.getElementById('cardNum');
    input.value += ' ';
}

function checkForSpace() {
    let input = document.getElementById('cardNum').value.length;
    if (input == 4 || input == 9 || input == 14) {
        giveSpaceOnCardNumber();
    }
}

function removeSpace() {
    let input = document.getElementById('cardNum');
    if (input.value[input.value.length-1] == ' ') {
        input.value = input.value.slice(0, input.value.length-1);
    }
}

function checkCharacter(key) {
    let n = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i = 0; i < 10; i++) {
        if (key == n[i]) return false;
    }
    return true;
}
function checkCharacterAndSpaces() {
    let num = document.getElementById('cardNum');
    let n = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',' '];
    let x = 0;
    for (let i = 0; i < num.value.length; i++) {
        if (n.includes(num.value[i]) == false) return true;
        if (num.value[i] == ' ') x++;
    }
    return x != 3;
}

function updateCardNo() {
    let cardno = document.getElementById('cardNum').value;
    let cardnumber = document.getElementById('CardNumber');
    let n = cardno.length;
    cardnumber.innerText = cardno + '0000 0000 0000 0000'.slice(n);
}

function fun(event) {
    let key;
    if (window.event) {
        key = event.keyCode;
    } else if (event.which) {
        key = event.which;
    }
    if (key == 8) {
        removeSpace();
        return;
    } 
    key = String.fromCharCode(key);
    checkForSpace();
    updateCardNo();
}

let cardholder = document.getElementById('cardholder');    
if (cardholder) {
    cardholder.addEventListener('keyup', updateHolderName);
} else {
    console.log('wtf');
}

function updateHolderName() {
    let name = document.getElementById('cardholder').value;
    let cardname = document.getElementById('UserName');
    if (name == '') name = 'JANE APPLESEED'
    cardname.innerText = name.toUpperCase();
}

let expmonth = document.getElementById('mm')
if (expmonth) {
    expmonth.addEventListener('keyup', updateExpiryMonth);
} else {
    console.log('wtf');
}

function updateExpiryMonth() {
    let month = document.getElementById('mm');
    let exp = document.getElementById('ExpiryDate');
    console.log(month.value);
    if (month.value.length == 0) {
        exp.innerText = '00/00';
    } else if (month.value.length == 1) {
        exp.innerText = '0' + month.value + exp.innerText.slice(2, 5);
    } else {
        exp.innerText = month.value + exp.innerText.slice(2, 5);
    }
}

let expyear = document.getElementById('yy')
if (expyear) {
    expyear.addEventListener('keyup', updateExpiryYear);
} else {
    console.log('wtf');
}

function updateExpiryYear() {
    let year = document.getElementById('yy');
    let exp = document.getElementById('ExpiryDate');
    if (year.value.length == 0) {
        exp.innerText = exp.innerText.slice(0, 3) + '00';
    } else if (year.value.length == 1) {
        exp.innerText = exp.innerText.slice(0, 3) + '0' + year.value;
    } else {
        exp.innerText = exp.innerText.slice(0, 3) + year.value;
    }
}

let cvv = document.getElementById('cvv');
if (cvv) {
    cvv.addEventListener('keyup', updateCvv);
} else {
    console.log('wtf');
}

function updateCvv() {
    let cvvInput = document.getElementById('cvv');
    let cvvCard = document.getElementById('cvvCard');
    let cvv;
    if (cvvInput.value.length == 0) {
        cvv = '000';
    } else if (cvvInput.value.length == 1) {
        cvv = '00' + cvvInput.value;
    } else if (cvvInput.value.length == 2) {
        cvv = '0' + cvvInput.value;
    } else {
        cvv = cvvInput.value;
    }
    cvvCard.innerText = cvv;
}

function checkName() {
    let name = document.getElementById('cardholder');
    if (name.value.length == 0) {
        name.style.outline = 'none !important';
        name.style.border = '2px solid red';
        msg = document.getElementById('invalidName');
        msg.style.visibility = 'visible';
        return true;
    } else {
        name.style.outline = 'none !important';
        name.style.border = '2px solid #e2e2e2';
        msg = document.getElementById('invalidName');
        msg.style.visibility = 'hidden';
    }
    return false;
}

function checkNum() {
    let num = document.getElementById('cardNum');
    if (checkCharacterAndSpaces()) {
        num.style.outline = 'none !important';
        num.style.border = '2px solid red';
        msg = document.getElementById('invalidNumber');
        msg.style.visibility = 'visible';
        msg.innerText = 'Wrong format, numbers only';
        return true;
    } else if (num.value.length != 19) {
        num.style.outline = 'none !important';
        num.style.border = '2px solid red';
        msg = document.getElementById('invalidNumber');
        msg.style.visibility = 'visible';
        msg.innerText = 'Wrong format, should be exactly 16 digits';
        return true;
    } else {
        num.style.outline = 'none !important';
        num.style.border = '2px solid #e2e2e2';
        msg = document.getElementById('invalidNumber');
        msg.style.visibility = 'hidden';
    }
    return false;
}

function checkDate() {
    let month = document.getElementById('mm');
    let year = document.getElementById('yy');
    let flag = false;

    if (month.value.length == 0) {
        mm.style.outline = 'none !important';
        mm.style.border = '2px solid red';
        msg = document.getElementById('invalidDate')
        msg.style.visibility = 'visible';
        flag = true;
    } else {
        mm.style.outline = 'none !important';
        mm.style.border = '2px solid #e2e2e2';
        msg = document.getElementById('invalidDate')
        msg.style.visibility = 'hidden';
    }
    if (year.value.length == 0) {
        yy.style.outline = 'none !important';
        yy.style.border = '2px solid red';
        msg = document.getElementById('invalidDate')
        msg.style.visibility = 'visible';
        flag = true;
    } else {
        yy.style.outline = 'none !important';
        yy.style.border = '2px solid #e2e2e2';
        msg = document.getElementById('invalidDate')
        msg.style.visibility = 'hidden';
    }
    return flag;
}

function checkCvv() {
    let cvv = document.getElementById('cvv');
    if (cvv.value.length == 0) {
        cvv.style.outline = 'none !important';
        cvv.style.border = '2px solid red';
        msg = document.getElementById('invalidCvv')
        msg.style.visibility = 'visible';
        return true;
    } else {
        cvv.style.outline = 'none !important';
        cvv.style.border = '2px solid #e2e2e2';
        msg = document.getElementById('invalidCvv')
        msg.style.visibility = 'hidden';
    }
    return false;
}

function confirmationUser() {
    let inp = document.getElementById('inputArea');
    let cnf = document.getElementById('confirmation');
    inp.style.display = 'none';
    cnf.style.display = 'flex';
}
function checkInputs() {
    checkName();
    checkNum();
    checkDate();
    checkCvv();
    if (checkName() || checkNum() || checkDate() || checkCvv()) {
        return false;
    } else {
        confirmationUser();
    }

}