var res0 = document.getElementById('res-0')
var res1 = document.getElementById('res-1')
var res2 = document.getElementById('res-2')

function clicou1(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 1
    }
    else{
        res2.innerHTML += 1
    }
}
function clicou2(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 2
    }
    else{
        res2.innerHTML += 2
    }
}
function clicou3(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 3
    }
    else{
        res2.innerHTML += 3
    }
}
function clicou4(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 4
    }
    else{
        res2.innerHTML += 4
    }
}
function clicou5(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 5
    }
    else{
        res2.innerHTML += 5
    }
}
function clicou6(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 6
    }
    else{
        res2.innerHTML += 6
    }
}
function clicou7(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 7
    }
    else{
        res2.innerHTML += 7
    }
}
function clicou8(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 8
    }
    else{
        res2.innerHTML += 8
    }
}
function clicou9(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 9
    }
    else{
        res2.innerHTML += 9
    }
}
function clicou0(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += 0
    }
    else{
        res2.innerHTML += 0
    }
}

/* - - - Matematica - - - */

function clicouAC(){
    res0.innerHTML = ""
    res1.innerHTML = ""
    res2.innerHTML = ""
}
function clicouP(){
    if(res0.innerHTML.length != 0){
        res1.innerHTML = '%'
    }
}
function clicouD(){
    if(res0.innerHTML.length != 0){
        res1.innerHTML = '/'
    }
}
function clicouV(){
    if(res0.innerHTML.length != 0){
        res1.innerHTML = '*'
    }
}
function clicouMenos(){
    if(res0.innerHTML.length != 0){
        res1.innerHTML = '-'
    }
    else{
        res0.innerHTML += '-'
    }
}
function clicouMais(){
    if(res0.innerHTML.length != 0){
        res1.innerHTML = '+'
    }
}
function clicouMostrar(){
    switch(res1.innerHTML){
        case '+':
            res0.innerHTML = parseFloat(res0.innerHTML) + parseFloat(res2.innerHTML)
            res1.innerHTML = ""
            res2.innerHTML = ""
            break
            case '-':
                res0.innerHTML = parseFloat(res0.innerHTML) - parseFloat(res2.innerHTML)
                res1.innerHTML = ""
                res2.innerHTML = ""
                break
            case '*':
                res0.innerHTML = parseFloat(res0.innerHTML) * parseFloat(res2.innerHTML)
                res1.innerHTML = ""
                res2.innerHTML = ""
                break
            case '/':
                res0.innerHTML = parseFloat(res0.innerHTML) / parseFloat(res2.innerHTML)
                res1.innerHTML = ""
                res2.innerHTML = ""
                break
            case '%':
                res0.innerHTML = parseFloat(res0.innerHTML) * parseFloat(res2.innerHTML)/100
                res1.innerHTML = ""
                res2.innerHTML = ""
                break
        default:
            alert("valor não reconhecido")

    }
}
function clicouApagar(){
    if(res2.innerHTML.length != 0){
        res2.innerHTML = res2.innerHTML.slice(0, -1);
    }
    else if(res1.innerHTML.length != 0){
        res1.innerHTML = res1.innerHTML.slice(0, -1);
    }
    else if(res0.innerHTML.length != 0){
        res0.innerHTML = res0.innerHTML.slice(0, -1);
    }
}
function clicouVirgula(){
    if(res1.innerHTML.length == 0){
        res0.innerHTML += "."
        i - false
    }
    else{
        res2.innerHTML += "."
        i = false
    }
}