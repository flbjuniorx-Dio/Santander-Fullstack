function validaArray(array, num) {
    let RefErrCount = 0;
    let TypeErrCount = 0;
    let RangeErrCount = 0;

    try {
        if (!array && !num) throw new ReferenceError("Parâmetros não foram enviados");
        if (typeof array !== 'object') throw new TypeError("Array informada não é do tipo 'object");
        if (typeof num !== 'number') throw new TypeError("Parâmetro informado não é do tipo 'number'");
        if (array.length != num) throw new RangeError('Tamanho do array for diferente do número enviado como parâmetro');
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log(e.name + ': ' + e.message);
            RefErrCount += 1;
        } else if (e instanceof TypeError) {
            console.log(e.name + ': ' + e.message);
            TypeErrCount += 1;
        } else if (e instanceof RangeError) {
            console.log(e.name + ': ' + e.message);
            RangeErrCount += 1;
        }
        
    } finally {
        console.log("Array = [" + arr + "]");
        console.log("Numero = " + num);
    }

    let Errors = [RefErrCount, TypeErrCount, RangeErrCount];
    return "Total Errors = " + Errors;
}

let arr = [2];
let number = 3;

validaArray(arr, number);