/*
    Escreva um programa em JS para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:

    - área do triângulo: base * altura /2
    - área do retângulo: base * altura
    - área do quadrado: lado * lado
    - área do trapézio: (base maior + base menor) * altura /2
    - área do círculo: pi * raio^2 (considere pi = 3.14)

    Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de "Sair" e enquanto ela não for escolhida deverá voltar ao menu.
*/

function areaTriangulo() {
    const base = parseFloat(prompt('Informe o valor da base do triângulo:'))
    const altura = parseFloat(prompt('Informe o valor da altura do triângulo:'))
    return (base * altura) / 2
}

function areaRetangulo() {
    const base = parseFloat(prompt('Informe o valor da base do retângulo:'))
    const altura = parseFloat(prompt('Informe o valor da altura do retângulo:'))
    return (base * altura) 
}

function areaQuadrado() {
    const lado = parseFloat(prompt('Informe o valor do lado do quadrado:'))
    return lado * lado
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt('Informe o valor da base maior do trapézio:'))
    const baseMenor = parseFloat(prompt('Informe o valor da base menor do trapézio:'))
    const altura = parseFloat(prompt('Informe o valor da altura do trapézio:'))
    return (baseMaior + baseMenor) * altura /2
}

function areaCirculo() {
    const raio = parseFloat(prompt('Informe o valor do raio do círculo:'))
    const pi = 3.14
    return (pi * raio * raio)
}

function menu() {
    return prompt('Selecione uma das opções abaixo: \n\na) Calcular a área de um triângulo. \nb) Calcular a área de um Retângulo. \nc) Calcular a área de um Quadrado. \nd) Calcular a área de um Trapézio. \ne) Calcular a área de um Círculo. \nf) Sair.')
}

function executar() {
    let opcao = ''

    do {
        opcao = menu()
        let resultado

        switch(opcao) {
            case 'a':
                resultado = areaTriangulo()
                break
    
            case 'b':
                resultado = areaRetangulo()
                break
    
            case 'c':
                resultado = areaQuadrado()
                break

            case 'd':
                resultado = areaTrapezio()
                break

            case 'e':
                resultado = areaCirculo()
                break

            case 'f':
                alert('Encerrando programa.')
                break
    
            default:
                alert('Opção inválida.')
        }

        if (resultado){
            alert(`Resultado: ${resultado}`)
        }
            
    } while(opcao !== 'f')
}

executar()

