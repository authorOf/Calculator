const numKeys = document.querySelectorAll('.container .keys .row .key.x');
const display = document.querySelector('.container input[type="text"]');
const ansBtn = document.querySelector('.container .keys .row .key.ans');
const specialBtns = document.querySelectorAll('.container .keys .row.row5 .key');
numKeys.forEach(item => item.addEventListener('click', e => {
    display.value += item.innerText;
}));
ansBtn.addEventListener('click', e => {
    if(display.value){
        try {
            const num = eval(display.value);
            if(!num){
                throw Error();
            }
            display.value = num;
        } catch (error) {
            display.value = 'Error';
        }
    }
});
specialBtns.forEach(item => item.addEventListener('click', e => {
    if(item.innerText.toLowerCase() === 'del'){
        display.value = '';
    }else{
        display.value = display.value.slice(0, -1);
    }
}));