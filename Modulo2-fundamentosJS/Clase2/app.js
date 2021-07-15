//Defining the multiplication table base, number 5 in this case

const number = 5;

function createTable (){
//creating a multiplication table
    console.log(`Tabla de multiplicar del número ${5} desde el numero 1 al 10`)

//Defining a variable to accumulate all multiplicacion table iterations and its reuslts
    let accResult = '';

//Defining a for cycle for each multiplier from 1 to 5 
    for(let i = 1; i <= 10; i++) {

    // multiply i with number
        const result = i * number;

    // display the result

    //console.log(`${number} * ${i} = ${result}`);
        accResult = accResult + `${number} * ${i} = ${result}\n`;
    
}
//Shows the result on console
console.log(accResult)

fs = require('fs')
fs.writeFile('tabla-5.txt', accResult, function (err) {
  if (err) {
    return console.log(err);
  }
});
}

createTable();
