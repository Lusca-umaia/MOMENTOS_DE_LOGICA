let usuarios = 0
let controleSalario = 0
let salario = 0, filhos = 0, mediaF = 0, mediaS = 0, salarioT = 0, filhosT = 0, usuar150 = 0, percent = 0
for (i = 0; i == 0; i = 0) {
    salario = parseInt(prompt("Informe o seu salário:"))

    if (salario < 0) {
        percent = (usuar150 / usuarios) * 100
        break;
    }

    usuarios++

    filhos = parseInt(prompt("Informe a quantidade de filhos que possui:"))

    salarioT = salarioT + salario
    filhosT = filhosT + filhos

    mediaF = filhosT / usuarios
    mediaS = salarioT / usuarios

    if (salario > controleSalario) {
        controleSalario = salario
    }

    if (salario < 150) {
        usuar150++
    }
}

console.log("Quantidade de pessoas que realizaram a pesquisa: ", usuarios)
console.log("Média de filhos da população: ", mediaF)
console.log("Média do salário da população ", mediaS)
console.log("Maior salário da população ", controleSalario)
console.log("Percentual de pessoas que ganham salário abaixo de 150R$: ", percent + "%")
console.log("Salário Total: ", salarioT)
console.log("Quantidade total de filhos: ", filhosT)

