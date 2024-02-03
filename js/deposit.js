// 1:- get the deposit button by id
document.getElementById('btn-deposit').addEventListener('click',function(){
    
    // 2:- the deposit input field
    const depositInput = InputFieldById('deposit-field');
    
    // 3:- the deposit total amount
    const depositTotal = TotalAlmountById('deposit-total');
    const depositTotalBalance = depositTotal + depositInput;
    
    // 4:-set deposit total balance
    setText('deposit-total', depositTotalBalance);

    // 5:-the balance of deposit
    const balance = TotalAlmountById('balance-total');
    const balanceTotal = balance + depositInput;

    // 6:- set balance total
    setText('balance-total',balanceTotal );
})