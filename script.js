let calc = require("./calc")

let args = process.argv.slice(2)

// console.log(args)

// let a = Number(args[1]);
// let b = Number(args[2]);
// let c = "";

// if(args[0] === 's') {
//   c = calc.soma(a, b);
// }else if(args[0] === 'm'){
//   c = calc.mult(a, b)
// }else {
//   c = "Opção inválida"
// }

// console.log(c);

let fs = require('fs');

let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) => {
  if(error) throw error;

  fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) => {
    if(error) throw error;

    console.log("Arquivo gerado com sucesso");
  })
});
