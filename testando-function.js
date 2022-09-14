 /* const soma =(
    function (a,b,c,d){
        return a * b / c + d
    }
)(10,9,3,5)

console.log(soma) */

/*const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = prompt => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, resolve)
  })
}

(async () => {
  const nameAnswer = await question('What is your name?')
  console.log(`Nice to meet you, ${nameAnswer}.`)
  
  const whereAnswer = await question('Where are you from?')
  console.log(`I hear it's nice in ${whereAnswer}.`)
  
  rl.close()
})()*/


(
  function(a,b,c){
    return a+b*c;
  }
)(1,2,3);
console.log()


















