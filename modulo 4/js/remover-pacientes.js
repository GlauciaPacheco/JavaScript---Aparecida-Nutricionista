var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});


/*
    // Pode ser feito dessa maneira, ou como acima em uma linha só//
    var alvoEvento= event.target;
    var paiDoAlvo = alvoEvento.parentNode // TR = paciente = remover
    event.target.remove();
*/

// essa função faz a ação em quem diretamente está escutando, ex) paciente.(não serve para essa este remover a linha da tabela)//

/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado com um duplo click");
        this.remove();

    });
})
*/