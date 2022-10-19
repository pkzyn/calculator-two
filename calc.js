const buttonClean = document.getElementById('clean')
const buttonSum = document.getElementById('sum')
const buttonMult = document.getElementById('mult')
const buttonDiv = document.getElementById('div')
const buttonSub = document.getElementById('sub')

function clean () {
  const resultado = document.getElementById('result')
  const boxOne = document.getElementById('fildOne')
  const boxTwo = document.getElementById('fildTwo')

  boxOne.value = ""
  boxTwo.value = ""
  resultado.innerHTML = " "
}

function calculations (parametro) {
const boxOne = document.getElementById ('fildOne').value
const boxTwo = document.getElementById ('fildTwo').value
const resultado = document.getElementById('result')

if (!boxOne || !boxTwo) {
  resultado.innerHTML = "Digite algum valor no campo"
}
else {
  resultado.innerHTML = ""
}

resultado.innerHTML = eval(`${boxOne}${parametro}${boxTwo}`)
}

buttonSub.addEventListener('click', () => calculations ('-'))
buttonMult.addEventListener('click', () => calculations ('*'))
buttonDiv.addEventListener('click', () => calculations ('/'))
buttonSum.addEventListener('click', () => calculations ('+'))
buttonClean.addEventListener('click', clean)
