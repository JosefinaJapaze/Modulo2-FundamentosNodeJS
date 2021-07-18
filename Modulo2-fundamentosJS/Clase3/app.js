//Reuqired module
const createMultTable = require('./createMultTable');
//Defining the multiplication table base, number 5 in this case

const number = 5;



//Defining a variable to accumulate all multiplicacion table iterations and its reuslts
    let accResult = `Tabla de multiplicar del número ${5} desde el numero 1 al 10\n`;

//Defining a for cycle for each multiplier from 1 to 5 
    for(let i = 1; i <= 10; i++) {

    // multiply i with number
        const result = i * number;

    // display the result

    //console.log(`${number} * ${i} = ${result}`);
        accResult = accResult + `${number} * ${i} = ${result}\n`;
    
  }
  //Checks if the file was created successfully, otherwise will throw the type of error on the process
createMultTable(accResult)
    .then(()=>{
      console.log('Se creó el archivo correctamente')
  })
    .catch(err =>{
      console.error(err);
  }) 
  