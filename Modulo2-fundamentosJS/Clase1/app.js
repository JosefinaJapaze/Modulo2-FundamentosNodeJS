//Defining the multiplication table base, number 5 in this case

const number = 5;

//creating a multiplication table
console.log(`Tabla de multiplicar del número ${5} desde el numero 1 al 10`)
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}