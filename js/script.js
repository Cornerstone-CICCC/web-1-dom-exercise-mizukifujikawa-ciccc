// YOUR CODE HERE
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    document.getElementById('output1').style.color = "red";
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    document.getElementById('output2').insertAdjacentHTML('afterend', '<span>Hello word</span>');
})

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    document.querySelector('#output3 p').classList.remove('small-text');
})

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    document.getElementById('output4').style.color = "red";
})

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
    console.log(document.getElementById('message').value);
})