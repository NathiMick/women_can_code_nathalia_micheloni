function validaMaioridade(anoNascimento) {

    let year = new Date().getFullYear();

    let result = "";

    if(Number(year) - anoNascimento > 18) {
        result = "Liberação autorizada";

    } else if (Number(year) - anoNascimento < 18) {
        result = "ATENÇÃO: Liberação NÃO autorizada";
    
    } else if (Number(year) - anoNascimento == 18) {
        result = "Validar documento de identidade";

    }

    return result    
}

console.log(validaMaioridade(2003));