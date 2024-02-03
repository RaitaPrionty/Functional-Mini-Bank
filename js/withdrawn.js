// 1:- get withdrawn button 
document.getElementById('btn-withdrawn').addEventListener('click',function(){

    // 2:- withdrawn input field
    const withdrawnInputField = InputFieldById('withdrawn-field');
    
    // 3:- withdrawn total amount
    const withdrawnTotal = TotalAlmountById('withdrawn-total'); 
    const withdrawnTotalBalance = withdrawnTotal + withdrawnInputField;

    //4:- set withdrawn total amount
    setText('withdrawn-total',withdrawnTotalBalance );

    //5:- get balance
    const balance = TotalAlmountById('balance-total');
    const balanceTotalAmount = balance - withdrawnInputField;

    // 6:- set balancetotal amount
    setText('balance-total',balanceTotalAmount);
})