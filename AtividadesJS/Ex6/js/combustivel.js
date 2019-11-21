
function calcular(){
    var gas = parseFloat(document.getElementById("gas").value);
    var alc = parseFloat(document.getElementById("alc").value);
    var equiv = gas*(0.7);
    if (alc<=equiv){
        document.getElementById("Viabilidade").textContent = "Álcool é o mais viavel";
    }
    else {
        document.getElementById("Viabilidade").textContent = "Gasolina é o mais viavel";
    }
} 


