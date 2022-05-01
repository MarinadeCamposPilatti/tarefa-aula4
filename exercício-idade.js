function legalAgeOrNot (age) {
    if(age>=18){
        console.log("A idade é maior ou igual a 18 anos. Pode entrar na boate.")
    }
    else{
        console.log("A idade é menor que 18 anos, entrada não permitida!")
    }
}

let age =[13,18,20]

console.log(age.forEach(legalAgeOrNot))


