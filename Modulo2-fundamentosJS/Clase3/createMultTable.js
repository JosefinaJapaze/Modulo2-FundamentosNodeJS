
const path = require('path');
const fs = require('fs')

const route = path.join(__dirname, 'tabla-5.txt')

const createMultTable = (accResult) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile(route, accResult, function (err) {
        if (err) {
            reject(err);
          }
      resolve();
        });
})
}

  module.exports = createMultTable;