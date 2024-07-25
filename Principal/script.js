var res = document.getElementById('res-p')
var c = 1
var co = 0
var virgulaOk = 0

function clicou1(){
    c = 0
    res.innerHTML += "1"
}
function clicou2(){
    c = 0
    res.innerHTML += "2"
}
function clicou3(){
    c = 0
    res.innerHTML += "3"
}
function clicou4(){
    c = 0
    res.innerHTML += "4"
}
function clicou5(){
    c = 0
    res.innerHTML += "5"
}
function clicou6(){
    c = 0
    res.innerHTML += "6"
}
function clicou7(){
    c = 0
    res.innerHTML += "7"
}
function clicou8(){
    c = 0
    res.innerHTML += "8"
}
function clicou9(){
    c = 0
    res.innerHTML += "9"
}
function clicou0(){
    c = 0
    res.innerHTML += "0"
}

/* - - - Matematica - - - */

function clicouAC(){
    res.innerHTML = ""
    c = 1
    co = 0
    virgulaOk = 0
}
function clicouP(){
    if(c == 0){
        if(co == 2){
            
        }else{
            res.innerHTML += "%"
            co = 2
            virgulaOk = 0
        }
    }
}
function clicouD(){
    if(c == 0){
        if(co == 2){
            
        }else{
            res.innerHTML += "/"
            co = 2
            virgulaOk = 0
        }
    }
}
function clicouV(){
    if(c == 0){
        if(co == 2){
            
        }else{
            res.innerHTML += "*"
            co = 2
            virgulaOk = 0
        }
    }
}
function clicouMenos(){
    if(res.innerHTML.length == 0){
        res.innerHTML += "-"
    }
    else{
        if(c == 0){
            if(co == 2){
                
            }else{
                res.innerHTML += "-"
                co = 2
                virgulaOk = 0
            }
        }
    }
}
function clicouMais(){
    if(c == 0){
        if(co == 2){
            
        }else{
            res.innerHTML += "+"
            co = 2
            virgulaOk = 0
        }
    }
}
function clicouMostrar(){
    var expreçao = res.textContent
    var part = expreçao.split(/([-]?[0-9]+)/).filter(Boolean)
    co = 0
    const num1 = parseFloat(part[0])
    const num2 = parseFloat(part[2])
    if(part[1] == "+"){
        res.innerHTML = ""
        res.innerHTML = num1 + num2
    }
    if(part[1] == "-"){
        res.innerHTML = ""
        res.innerHTML = num1 - num2
    }
    if(part[1] == "*"){
        res.innerHTML = ""
        res.innerHTML = num1 * num2
    }
    if(part[1] == "/"){
        res.innerHTML = ""
        res.innerHTML = num1 / num2
    }
    if(part[1] == "/"){
        res.innerHTML = ""
        res.innerHTML = num1 / num2
    }
    
}
function clicouApagar(){
    res.innerHTML = res.innerHTML.slice(0, -1);
}
function clicouVirgula(){
    if(virgulaOk == 0 && c == 0){
        res.innerHTML += "."
        virgulaOk = 1
        c = 1
    }
}