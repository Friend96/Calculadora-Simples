var res = document.getElementById('res-p')
var c = 1
var virgulaOk = 0

function clicou1(){
    c = 0
    res.innerHTML += "1"
}
function clicou2(){
    c = 0
    alert("2")
}
function clicou3(){
    c = 0
    alert("3")
}
function clicou4(){
    c = 0
    alert("4")
}
function clicou5(){
    c = 0
    alert("5")
}
function clicou6(){
    c = 0
    alert("6")
}
function clicou7(){
    c = 0
    alert("7")
}
function clicou8(){
    c = 0
    alert("8")
}
function clicou9(){
    c = 0
    alert("9")
}
function clicou0(){
    c = 0
    alert("0")
}

/* - - - Matematica - - - */

function clicouAC(){
    res.innerHTML = ""
    c = 1
    virgulaOk = 0
}
function clicouP(){
    if(c == 0){
        res.innerHTML += "%"
        c = 1
        virgulaOk = 0
    }
}
function clicouD(){
    if(c == 0){
        res.innerHTML += "/"
        c = 1
        virgulaOk = 0
    }
}
function clicouV(){
    if(c == 0){
        res.innerHTML += "*"
        c = 1
        virgulaOk = 0
    }
}
function clicouMenos(){
    if(res.innerHTML.length == 0){
        res.innerHTML += "-"
    }
    if(c == 0){
        res.innerHTML += "-"
        c = 1
        virgulaOk = 0
    }
}
function clicouMais(){
    if(c == 0){
        res.innerHTML += "+"
        c = 1
        virgulaOk = 0
    }
}
function clicouMostrar(){
    alert("mostrar")
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