
var btn = document.querySelector("#send");
btn.addEventListener("click", function(e) {
    e.preventDefault();
})


function Calcula() {

    var notaPrimeiroBim = document.querySelector("#notaPrimeiroBim").value;
    var notaSegundoBim = document.querySelector("#notaSegundoBim").value;
    var notaTerceiroBim = document.querySelector("#notaTerceiroBim").value;
    var notaQuartoBim = document.querySelector("#notaQuartoBim").value;

    var notaPrimeiroBimConv = parseInt(notaPrimeiroBim)
    var notaSegundoBimConv = parseInt(notaSegundoBim)
    var notaTerceiroBimConv = parseInt(notaTerceiroBim)
    var notaQuartoBimConv = parseInt(notaQuartoBim)

    var notaFinal = (notaPrimeiroBimConv + notaSegundoBimConv + notaTerceiroBimConv + notaQuartoBimConv) /4;

    var notaFixada = notaFinal.toFixed(1);

    if (notaFixada >= 6){
        var i = " Você está aprovado!"
    } else if (notaFixada >= 4 && notaFixada <= 6) {
        var i = " Você está de recuperação!"
    } else {
        var i = " Você está reprovado!"
    }

    var resultado = document.querySelector("#resultado");
    resultado.innerHTML = "Sua nota final é " + notaFixada + i;

}