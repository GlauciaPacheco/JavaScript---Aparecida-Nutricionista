var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (i = 0; i < pacientes.length; i++) {

    var paciente = (pacientes[i])

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhvalido = validaPeso(peso); //true ou false
    var alturaEhvalida = validaAltura(altura);

    if (!pesoEhvalido) {
        console.log("Peso inválido!");
        pesoEhvalido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");

    }

    if (!alturaEhvalida) {
        console.log("Altura Inválida");
        alturaEhvalida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhvalido && alturaEhvalida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;

    }
}

function validaPeso(peso){
    if(peso>=0 && peso < 1000){
    return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >=0 && altura <=3.0){
        return true;
    }else{
        return false;
    }
} 

function calculaImc (peso,altura){
    var imc = 0;

    imc= peso/(altura*altura);

    return imc.toFixed(2);

}