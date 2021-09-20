/* Writing Logic for calculator */
window.addEventListener('load',function() {
      let box = document.getElementById('box');
      let storeNumber = '';
      let btns = document.querySelectorAll("button");
     
        for (item of btns) {
      
        item.addEventListener("click",function(e) {
            boxVal = e.target.innerText;
            console.log(boxVal);
            if (boxVal === 'C') {
                storeNumber = '';
                box.value = storeNumber;
            } 
            else if (boxVal === '=') {
                if (storeNumber === '') {
                    storeNumber = ''
                }
                else{
                box.value = eval(storeNumber);
                storeNumber = box.value;
            }
            } 
            else if (boxVal === '%') {
                storeNumber += '/100';
                box.value = storeNumber;
            } 
            else if (boxVal === 'ct') {
                storeNumber = storeNumber.slice(0,storeNumber.length-1);
                box.value = storeNumber;
            } 
            else {
                storeNumber += boxVal;
                box.value = storeNumber;
            }
        })  
      } 
})
 