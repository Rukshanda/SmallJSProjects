// selections
 




window.onload = () =>
    //the function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.querySelector('#calculate').onclick = calculateTip;
        
    }
 function calculateTip ( ){
    

     let billAmount = document.getElementById('billAmount').value;
     let tipAmount  = document.getElementById('tipAmount').value;
     let people = document.getElementById('people').value;

    
      
     let tip = (tipAmount / 100);
     let totalTip = (billAmount * tip) / people;
     totalTip = totalTip.toFixed(2);
     let totalMoney = parseFloat(billAmount )+  parseFloat(totalTip);

     if (people === '1') {
        document.querySelector('#tipMoney').innerHTML = `$ ${totalTip}`;
        document.querySelector('#totalMoney').innerHTML = `$ ${totalMoney}`;
     } else {
        document.querySelector('#tipMoney').innerHTML = `$ ${totalTip} each`;
        document.querySelector('#totalMoney').innerHTML = `$ ${totalMoney}`;
     }

     
 }

 function clearInput(){
     document.getElementById('billAmount').value = '';
     document.getElementById('tipAmount').value = '';
     document.getElementById('people').value = '';

     document.querySelector('#tipMoney').innerHTML = '$ 0.00';
     document.querySelector('#totalMoney').innerHTML = '$ 0.00';

 }



