//arrumar para nao aparecer aquelas numeros quando se tem numeros muito grande
//limitar o tamanho do numero no input!
//arrumar colocar o numero no teclado, ao adicionar funciona ok! porem quando vc tira um numero ele erra o resultado!
const text = document.getElementById('res')

var ans

text.addEventListener('keypress', ({key}) => {
    if(key == 'Enter'){
        ans = true
    }
})


var acao
var num = ''
var num1 = 0
var t = []
var pri = 0
var n
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
    pri = 0
}

function analisador(){
    var dig = text.value //o texto total
    var opr //para ver operador
    t = dig.split('')//separa cada palavra no array t
    var ult = t.length-1 //acha o ultimo elemento do array
    
   
    if(ans != true){
        if(isNaN(Number(t[ult])) == false){
        n = t[ult] 
        num += n
    }else if(t[ult] == '+'){
        if(t[0] == '+'){
            text.value = '' 
            pri = 0
            cont = 0
        }
        else if(cont == 0){
            opr = true
            acao = 'somar'
            num1 = Number(num)
            num = ''
            cont++
             
        }else{
            alert('Mais de um operador selecionado!')
            text.value = '' 
            cont = 0
        }
    }else if(t[ult] == '-'){
        if(t[0] == '-'){
            text.value = '' 
            pri = 0
            cont = 0
        }
        else if(cont == 0){
            opr = true
            acao = 'subtrair'
            num1 = Number(num)
            num = ''
            cont++
        }else{
            alert('Mais de um operador selecionado!')
            text.value = '' 
            cont = 0
        }
    }else if(t[ult] == 'x' || t[ult] == '*' || t[ult] == 'X'){
        if(t[0] == 'X' || t[0] == 'x' || t[0] == '*'){
            text.value = '' 
            pri = 0
            cont = 0
        }
        else if(cont == 0){
            opr = true
            acao = 'multiplicar'
            num1 = Number(num)
            num = ''
            cont++
        }else{
            alert('Mais de um operador selecionado!')
            text.value = '' 
            cont = 0
        }
    }else if(t[ult] == '÷' || t[ult] == '/'){
        if(t[0] == '÷' || t[0] == '/'){
            text.value = '' 
            pri = 0
            cont = 0
        }
        else if(cont == 0){
            opr = true
            acao = 'dividir'
            num1 = Number(num)
            num = ''
            cont++
        }else{
            alert('Mais de um operador selecionado!')
            text.value = '' 
            cont = 0
        }
    }else if(t[ult] == '^'){
        if(cont == 0){
            opr = true
            acao = 'potencia'
            num1 = Number(num)
            num = ''
            cont++
        }else{
            alert('Mais de um operador selecionado!')
            text.value = '' 
            cont = 0
        }
    }
    else if(num.length == 0){
        num = ''
        num1 = 0
        pri = 0
        opr == false  
    }
    if(opr == true){ 
        //analisar se o ultimo numero digitado é operador, se nao entra no else if
    } else if(isNaN(t[ult]) == true && pri>0 && t[ult] != '+')
    {
        alert('ATENÇÃO! só são aceitos números e operadores e deve haver ao menos um número para haver operador!')
        text.value = ''
        num = ''
        num1 = []
        pri = 0
    }
    }else if(ans == true){
        resultado()
    }
    
    //alert(acao)
    //alert(num)
    //alert(num1)
     
    
    pri++ 
    
    
}

function somar(){
    if(cont==0){
        if(num.length != 0){ 
            text.value += '+'
            acao = 'somar'

            num1 = Number(num)
            num = 0
            cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
        text.value = '' 
        cont = 0
    }

}

function subtracao(){
    if(cont == 0){
        if(num.length != 0){
        text.value += '-'
        acao = 'subtrair'

        num1 = Number(num)
        num = 0
        cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
        text.value = '' 
        cont = 0
    }
    
}

function multiplicacao(){
    if(cont == 0){
        if(num.length != 0){
            text.value += 'x'
            acao = 'multiplicar'

            num1 = Number(num)
            num = 0
            cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
        text.value = '' 
        cont = 0
    }
    
}

function divisao(){
    if(cont == 0){
        if(num.length != 0){
            text.value += '÷'
            acao = 'dividir'
            num1 = Number(num)
            num = 0
            cont++
    }
    }else{
        alert('Mais de um operador selecionado!')
        text.value = '' 
        cont = 0
    }
    
}

function potenciacao(){
    if(cont == 0){
      if(num.length != 0){
            text.value += '^'
            acao = 'potencia'

            num1 = Number(num)
            num = 0
            cont++
            }  
    }else{
        alert('Mais de um operador selecionado!')
        text.value = '' 
        cont = 0
    }
    
}

function resultado(){
    if(num.length != 0 && num1 != 0){
    
    var tot = conta(num1, Number(num)) //manda os numeros para analisar
    text.value = `${tot}`
    
    //text.toggleAttribute('readonly')
    }
    
    //alert(`${Number(num)}`)
    //alert(`${Number(num1)}`)
    cont = 0
    ans = false
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