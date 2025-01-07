//arrumar para nao aparecer aquelas numeros quando se tem numeros muito grande
//limitar o tamanho do numero no input!
//arrumar colocar o numero no teclado, ao adicionar funciona ok! porem quando vc tira um numero ele erra o resultado! RESOLVIDO
//quero que quando de um numero infino ex: 0.3333... que nao seja possivel usar nenhum numero para evitar bugs 
const text = document.getElementById('tela-operacoes')
const body = document.body

let operacao = '' 
let operando1 = ''
let operando2 = 0 
let contOperacoes = 0 //conta o numero de operadores

//para que seja possivel o uso do enter pelo usuario
body.addEventListener('keypress', ({key}) => {
    if(key == 'Enter')  resultado()   
})

//fazer essa funcao!
const pararNumeros = (()=>{

})

document.getElementById('n1').addEventListener('click',()=>{
    text.innerHTML += '1'
    operando1 += '1'
})
    
document.getElementById('n2').addEventListener('click',()=>{
    text.innerHTML += '2'
    operando1 += '2'
})

document.getElementById('n3').addEventListener('click',()=>{
    text.innerHTML += '3'
    operando1 += '3'
})

document.getElementById('n4').addEventListener('click',()=>{
    text.innerHTML += '4'
    operando1 += '4'
})


document.getElementById('n5').addEventListener('click',()=>{
    text.innerHTML += '5'
    operando1 += '5'
})

document.getElementById('n6').addEventListener('click',()=>{
    text.innerHTML += '6'
    operando1 += '6'
})


document.getElementById('n7').addEventListener('click',()=>{
    text.innerHTML += '7'
    operando1 += '7'
})

document.getElementById('n8').addEventListener('click',()=>{
    text.innerHTML += '8'
    operando1 += '8'
})

document.getElementById('n9').addEventListener('click',()=>{
    text.innerHTML += '9'
    operando1 += '9'
})

document.getElementById('n0').addEventListener('click',()=>{
    text.innerHTML += '0'
    operando1 += '0'
})

function limpar(){
    text.innerHTML = ''
    operando1 = ''
    operando2 = 0
    contOperacoes = 0
}

function somar(){
    if(contOperacoes==0){
        if(operando1.length != 0){ 
            text.innerHTML += '+'
            operacao = 'somar'

            operando2 = Number(operando1)
            operando1 = 0
            contOperacoes++
    }
    }else{
        alert('Mais de um operador selecionado!')
        text.innerHTML = '' 
        contOperacoes = 0
    }

}

function subtracao(){
    if(contOperacoes == 0){
        if(operando1.length != 0){
        text.innerHTML += '-'
        operacao = 'subtrair'

        operando2 = Number(operando1)
        operando1 = 0
        contOperacoes++
    }
    }else{
        alert('Mais de um operador selecionado!')
        text.innerHTML = '' 
        contOperacoes = 0
    }
    
}

function multiplicacao(){
    if(contOperacoes == 0){
        text.innerHTML += 'x'
        operacao = 'multiplicar'

        operando2 = Number(operando1)
        operando1 = 0
        contOperacoes++
    }else{
        alert('Mais de um operador selecionado!')
        text.innerHTML = '' 
        contOperacoes = 0
    }
    
}

function divisao(){
    if(contOperacoes == 0){
        text.innerHTML += '÷'
        operacao = 'dividir'
        operando2 = Number(operando1)
        operando1 = 0
        contOperacoes++
    }else{
        alert('Mais de um operador selecionado!')
        text.innerHTML = '' 
        contOperacoes = 0
    }
    
}

function potenciacao(){
    if(contOperacoes == 0){
        text.innerHTML += '^'
        operacao = 'potencia'

        operando2 = Number(operando1)
        operando1 = 0
        contOperacoes++          
    }else{
        alert('Mais de um operador selecionado!')
        text.innerHTML = '' 
        contOperacoes = 0
    }
    
}

function resultado(){
    let numerosAntesdoPonto = 0
    const resultado = conta(operando2, Number(operando1)) //manda os numeros para realizar a conta
    let resultadoArray = []

    resultadoArray = String(resultado).split('')
    console.log(resultadoArray)
    if(resultadoArray.length >= 17){
        text.innerHTML = ''
        for(let val of resultadoArray){
            if(resultadoArray[val] == undefined) break
            else numerosAntesdoPonto++
        }
        resultadoArray.map((valor,ind)=>{
            if(ind<numerosAntesdoPonto+4) text.innerHTML += valor
        })
        text.innerHTML += '...'
    }else if(resultado == Infinity) text.innerHTML = 'Infinito'
    else text.innerHTML = `${resultado}`
   
    
    contOperacoes = 0
    operando2 = 0
}

function conta(n1,n2){
   switch(operacao){
    case 'somar':{
        operando1 = n1+n2
        return n1 + n2
    }
    case 'subtrair':{
        operando1 = n1 - n2
        return n1 - n2
    }
    case 'multiplicar':{
        operando1 = n1 * n2
        return n1 * n2
    }
    case 'dividir':{
        if(n1 == 0 && n2 == 0) return 'Indefinido'
        operando1 = n1/n2
        return n1/n2   
    }
    case 'potencia':{
        let pot = n1
        for(i=1;i<n2;i++){
            pot *= n1
        } 
        operando1 = pot
        return pot
    }
    default:
        break  
   }
}