const numKeys = document.querySelectorAll('.container .keys .row .key.x');
const display = document.querySelector('.container input[type="text"]');
const ansBtn = document.querySelector('.container .keys .row .key.ans');
const specialBtns = document.querySelectorAll('.container .keys .row.row5 .key');
numKeys.forEach(item => item.addEventListener('click', e => {
    display.value += item.innerText;
}));
function displayAns(){
    if(display.value){
        try {
            const num = eval(display.value);
            if(!num || typeof num == 'function'){
                throw Error();
            }
            display.value = num;
        } catch (error) {
            display.value = 'Error';
            setTimeout(_ => {
                display.value = '';
            }, 1000);
        }
    }
}
specialBtns.forEach(item => item.addEventListener('click', e => {
    if(item.innerText.toLowerCase() === 'del'){
        display.value = '';
    }else{
        display.value = display.value.slice(0, -1);
    }
}));
ansBtn.addEventListener('click', e => {
    displayAns();
});
display.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        displayAns();
    }else if(e.key === 'Delete'){
        display.value = '';
    }
})