document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById("nomeContato").value;
    var numero = document.getElementById("numeroContato").value;

    
    if (numero.length !== 11) {
        alert("O número deve ter 11 dígitos.");
        return;
    }

    
    var tabela = document.getElementById("tabela");
    var novaLinha = tabela.insertRow(-1);

    
    var celulaNome = novaLinha.insertCell(0);
    var celulaNumero = novaLinha.insertCell(1);
    celulaNome.innerHTML = nome;
    celulaNumero.innerHTML = numero;

    
    document.getElementById("nomeContato").value = "";
    document.getElementById("numeroContato").value = "";
});