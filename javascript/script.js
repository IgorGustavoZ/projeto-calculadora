var text = document.getElementById('res')

var acao
var num = ''
var num1 = 0
var pos = 0
var t = []
var c=0
var n
var p
text.focus()
var cont = 0

function numero1(){
    text.value += '1'
    num += '1'
}
function numero2(){
    text.value += '2'
    num += '2'
}
function numero3(){
    text.value += '3'
    num += '3'
}
function numero4(){
    text.value += '4'
    num += '4'
}
function numero5(){
    text.value += '5'
    num += '5'
}
function numero6(){
    text.value += '6'
    num += '6'
}
function numero7(){
    text.value += '7'
    num += '7'
}
function numero8(){
    text.value += '8'
    num += '8'
}
function numero9(){
    text.value += '9'
    num += '9'
}
function numero0(){
    text.value += '0'
    num += '0'
}

function limpar(){
    text.value = ''
    num = ''
    num1 = 0
    c = 0
}

function analisador(){
    var dig = text.value //o texto total
    var res //para ver operador
    t = dig.split('')//separa cada palavra no array t
    var ult = t.length-1 //acha o ultimo elemento do array
    
    if(c>0 && isNaN(Number(t[ult])) == false){
        n = t[ult] 
        num += n
    }else if(num.length == 0){
        res == false
    }else if(t[ult] == '+'){
        if(cont == 0){
            res = true
            acao = 'somar'
            num1 = Number(num)
            num = 0 
            cont++
        }else{
            alert('Mais de um operador selecionado!')
            text.value = dig //resolver!!!
            cont=0
        }
        
        
    }

    if(res == true){ 
        //analisar se o ultimo numero digitado é operador, se nao entra no else if
    } else if(isNaN(t[ult]) == true && c>0 && t[ult] != '+')
    {
        alert('ATENÇÃO! só são aceitos números e operadores e deve haver ao menos um número para haver operador!')
        text.value = ''
        num = ''
        num1 = []
        c = 0
    }
    //alert(acao)
    //alert(num)
    //alert(num1)
    c++
}

function somar(){
    if(cont==0){
        if(num.length != 0){ 
            text.value += '+'
            acao = 'somar'

            num1 = Number(num)
            num = 0
            pos++
            cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
    }

}

function subtracao(){
    if(cont == 0){
        if(num.length != 0){
    text.value += '-'
    acao = 'subtrair'

    num1[pos] = Number(num)
    num = 0
    cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
    }
    
}

function multiplicacao(){
    if(cont == 0){
        if(num.length != 0){
            text.value += 'x'
            acao = 'multiplicar'

            num1[pos] = Number(num)
            num = 0
            cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
    }
    
}

function divisao(){
    if(cont == 0){
        if(num.length != 0){
            text.value += '÷'
            num1[pos] = Number(num)
            num = 0
            cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
    }
    
}

function potenciacao(){
    if(cont == 0){
      if(num.length != 0){
            text.value += '^'
            acao = 'potencia'

            num1[pos] = Number(num)
            num = 0
            cont++
            }  
    } else {
        alert('Mais de um operador selecionado!')
    }
    
}

function resultado(){
    if(num.length != 0){
    var tot = conta(num1, Number(num)) //manda os numeros para analisar
    text.value = `${tot}`
    for(var i=0;i<pos;i++)
    {
        num1[i] = null
    }
    //text.toggleAttribute('readonly')
    }
    
    //alert(`${Number(num)}`)
    //alert(`${Number(num1)}`)
    pos = 0
    cont = 0
}

function conta(n1,n2){
   switch(acao){
    case 'somar':{
        num = n1+n2
        return n1 + n2
    }
    case 'subtrair':{
        num = n1 - n2
        return n1 - n2
    }
    case 'multiplicar':{
        num = n1 * n2
        return n1 * n2
    }
    case 'dividir':{
        num = n1/n2
        return n1/n2   
    }
    case 'potencia':{
        var pot = n1
        for(i=1;i<n2;i++){
            pot *= n1
        } 
        num = pot
        return pot
    }
    default:
        break  
   }
}