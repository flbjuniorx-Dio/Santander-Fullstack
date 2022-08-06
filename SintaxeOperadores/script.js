function comparaNumeros (num1, num2) {
    let saoIguais, soma;

    num1 === num2 ? saoIguais = "São iguais" : saoIguais = "São diferentes";

    if (num1 + num2 < 10) {
        soma = "soma inferior a 10.";
    } else if (num1 + num2 < 20) {
        soma = "soma igual ou superior a 10 e inferior a 20.";
    } else {
        soma = "soma superior ou igual a 20.";
    }

    return saoIguais + " e " + soma;
}

var x = 10, y = 20;
console.log(comparaNumeros(x, y));