let balance = 1000; // Initial balance

// Dummy card number and PIN (In a real-world scenario, this would be stored securely)
const validCardNumber = '1234567812345678'; // 16 digits
const validPin = '1234'; // 4 digits

// Function to verify card number and PIN
function verifyCard() {
    const cardNumber = document.getElementById('card-number').value;
    const pin = document.getElementById('pin').value;

    if (cardNumber === validCardNumber && pin === validPin) {
        document.getElementById('card-verification').style.display = 'none';
        document.getElementById('atm-section').style.display = 'block'; // Show ATM features
    } else {
        document.getElementById('verification-error').style.display = 'block'; // Show error message
    }
}

// Function to check balance
function balanceEnquiry() {
    document.getElementById('balance-display').innerHTML = `Current Balance: Rs.${balance}`;
}

// Show the withdraw section
function showWithdraw() {
    document.getElementById('withdraw-form').style.display = 'block';
}

// Withdraw function
function withdraw() {
    let withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid amount to withdraw.');
    } else if (withdrawAmount > balance) {
        alert('Insufficient balance!');
    } else {
        balance -= withdrawAmount;
        alert(`Successfully withdrawn Rs.${withdrawAmount}`);
        balanceEnquiry();
    }
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('withdraw-form').style.display = 'none';
}

// Show the deposit section
function showDeposit() {
    document.getElementById('deposit-form').style.display = 'block';
}

// Deposit function
function deposit() {
    let depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid amount to deposit.');
    } else {
        balance += depositAmount;
        alert(`Successfully deposited Rs.${depositAmount}`);
        balanceEnquiry();
    }
    document.getElementById('deposit-amount').value = '';
    document.getElementById('deposit-form').style.display = 'none';
}

// Show the UPI withdraw section
function showUPIWithdraw() {
    document.getElementById('upi-form').style.display = 'block';
}

// UPI Withdraw function
function upiWithdraw() {
    let upiId = document.getElementById('upi-id').value;
    let upiAmount = parseFloat(document.getElementById('upi-amount').value);
    if (isNaN(upiAmount) || upiAmount <= 0) {
        alert('Please enter a valid amount to withdraw.');
    } else if (upiAmount > balance) {
        alert('Insufficient balance!');
    } else {
        balance -= upiAmount;
        alert(`Successfully withdrawn Rs.${upiAmount} via UPI to ${upiId}`);
        balanceEnquiry();
    }
    document.getElementById('upi-id').value = '';
    document.getElementById('upi-amount').value = '';
    document.getElementById('upi-form').style.display = 'none';
}

// Generate random PIN
function generatePin() {
    let pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generated-pin').innerHTML = `Generated PIN: ${pin}`;
}

// Show cardless transfer section
function showCardlessTransfer() {
    document.getElementById('cardless-form').style.display = 'block';
}

// Cardless transfer function
function cardlessTransfer() {
    let phone = document.getElementById('cardless-phone').value;
    let transferAmount = parseFloat(document.getElementById('transfer-amount').value);
    if (isNaN(transferAmount) || transferAmount <= 0) {
        alert('Please enter a valid amount for transfer.');
    } else if (transferAmount > balance) {
        alert('Insufficient balance!');
    } else {
        balance -= transferAmount;
        alert(`Successfully transferred Rs.${transferAmount} to ${phone}`);
        balanceEnquiry();
    }
    document.getElementById('cardless-phone').value = '';
    document.getElementById('transfer-amount').value = '';
    document.getElementById('cardless-form').style.display = 'none';
}