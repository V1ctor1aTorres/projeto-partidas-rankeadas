let resultado = subtracao(105, 46)

function subtracao(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}

if(resultado <= 10){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Ferro")
}
else if(resultado >=11 && resultado <=20){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Bronze")
}
else if(resultado >=21 && resultado <=50){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Prata")
}
else if(resultado >=51 && resultado <=80){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Ouro")
}
else if(resultado >=81 && resultado <=90){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Diamante")
}
else if(resultado >=91 && resultado <=100){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Lendário")
}
else{
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Imortal")
}

