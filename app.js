// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    // retornamos el valor
    return Number(valueInYen.toFixed(2));
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = (valueInYen / 127.9) * 0.8;
    // retornamos el valor
    return Number(valueInPound.toFixed(2));
}



module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound } 