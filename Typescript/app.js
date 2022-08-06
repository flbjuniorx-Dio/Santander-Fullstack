const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function somarNumeros(numero1, numero2) {
    return parseFloat(numero1) + parseFloat(numero2);
}

button.addEventListener('click', () => {
    console.log(somarNumeros(input1.value, input2.value));
})