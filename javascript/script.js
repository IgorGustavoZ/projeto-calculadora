var text = document.getElementById('res')

var acao
var num = ''
var num1 = []
var pos = 0
var t = []
var c=0
text.focus()

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
    num1 = []
    c = 0
}

function desativar(){
    text.removeAttribute('readonly')
    text.value = ''
    num = ''
    num1 = []
}

function analisador(){
    var dig = text.value //o texto total
    var res //para ver operador
    t = dig.split('')//separa cada palavra no array t
    var ult = t.length-1 //acha o ultimo elemento do array
    n = t[ult] //da uma ajeitada, alguma vezes nao faz a conta certa!
    if(c!=0 && isNaN(Number(t[ult])) == false){
        var n
        num += n
    }
    for(var i = 0; i<t.length;i++){
        if(t[i]=='+'){
            res = true
        }
    }

    if(res == true){ //analisa o operador
        acao = 'somar'
        num1[pos] = Number(num)
        num = 0
        pos++
    } else if(isNaN(Number(dig)) == true )
    {
        alert('ATENÇÃO! só são aceitos números e operadores!')
        text.value = ''
        num = ''
        num1 = []
        c = 0
    }
    //alert(acao)
    //alert(Number(num))
    c++
}

/*function desativar(){
    text.removeAttribute('readonly')
    text.innerHTML = ''
}*/

function somar(){
    if(num.length != 0){ 
    text.value += '+'
    acao = 'somar'

    num1[pos] = Number(num)
    num = 0
    pos++
    }
}

function subtracao(){
    if(num.length != 0){
    text.value += '-'
    acao = 'subtrair'

    num1[pos] = Number(num)
    num = 0
    pos++
    }
}

function multiplicacao(){
    if(num.length != 0){
    text.value += 'x'
    acao = 'multiplicar'

    num1[pos] = Number(num)
    num = 0
    pos++
    }
}

function divisao(){
    if(num.length != 0){
    text.value += '÷'

    num1[pos] = Number(num)
    num = 0
    pos++
    }
}

function potenciacao(){
    if(num.length != 0){
    text.value += '^'
    acao = 'potencia'

    num1[pos] = Number(num)
    num = 0
    pos++
    }
}

function resultado(){
    if(num.length != 0){
    var tot = conta(num1, Number(num)) //manda os numeros para analisar
    text.value = `${tot}`
    num1[pos] = Number(num)
    text.toggleAttribute('readonly')
    }
    
    //alert(`${Number(num)}`)
    //alert(`${Number(num1)}`)
}

function conta(n1,n2){
   switch(acao){
    case 'somar':{
        var tot = 0
        for(var i=0;i<pos;i++){
            tot += n1[i]
            n1[i] = null // limpando para evitar problema
        }
        tot += n2
        num = tot
        pos = 0
        
        return tot
    }
    case 'subtrair':{
        var tot = 0
        if(pos > 1){ // 2 2 |2 > n2| mais de 2 numeros
        for(var i=0;i<pos;i++){
            if(n1[i+1] == null){
                break
            }else{
                tot += n1[i] - n1[i+1]
                n1[i] = null
            }
        }
            tot = n1[i-1] - n2
            num = tot 
            pos = 0
            return tot
        }else{ //apenas 2 numeros
            tot = n1[0] - n2
            num = tot 
            pos = 0
            return tot
        } 
    }
    case 'multiplicar':{
        if(pos > 1){
        var tot = 1
          for(var i=0;i<pos;i++){
            tot *= n1[i]
            n1[i] = null
        }  
          
        } else{
            tot = n2 * n1
            num = tot
            pos = 0
            return tot
        }
        tot *= n2
        num = tot
        pos = 0
        return tot
    }
    case 'dividir':{
        if(n1==0 && n2==0){
            return 'Indefinido!'
        }else{
            var tot = n1[0]
            for(var i=0;i<pos;i++){
                if(n1[i+1]==null)
                {
                    break
                }else{
                    tot /= n1[i+1]
                    n1[i] = null //nao funcionando *arrumar*
                }
                
            }
            tot /= n2
            num = tot
            pos = 0
            
            return tot
        }
        
    }
    case 'potencia':{
        var pot = n1
        for(i=1;i<n2;i++){
            pot *= n1
        } //nao feito
        num = pot
        //alert(`${pot}`) aqui esta com problema de supercarregamento de dados!! arrume
        return pot
    }
    default:
        break  
   }
}