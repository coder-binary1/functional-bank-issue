function getInputValue(feildId) {
    const inputFeild = document.getElementById(feildId);
    const valueInText = inputFeild.value;
    const value = parseFloat(valueInText);
    inputFeild.value = '';
    return value;
}

function getInnerTextValue(feildId) {
    const feildValue = document.getElementById(feildId);
    const feildValueInText = feildValue.innerText;
    const value = parseFloat(feildValueInText);
    return value;
}

function updateTotal(feildId, amount) {
    // const totalTag = document.getElementById(feildId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);

    const previousTotal = getInnerTextValue(feildId);
    const newTotal = previousTotal + amount;
    document.getElementById(feildId).innerText = newTotal;
}

function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    // const previousBalance = getInnerTextValue('balance-total');

    let newBalance = getInnerTextValue('deposit-total') - getInnerTextValue('withdraw-total') + getInnerTextValue('balance-total');


    // if (isAdding == true) {
    //     newBalance = previousBalance + amount;
    // }
    // else {
    //     newBalance = previousBalance - amount;
    // }
    document.getElementById('balance-total').innerText = newBalance;
}

//handle deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});

//handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');

    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});