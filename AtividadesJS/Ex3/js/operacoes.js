function calcular(){

    var valorA = parseFloat(document.getElementById("vlrA").value);
    var valorB = parseFloat(document.getElementById("vlrB").value);
    
    document.getElementById("soma").innerHTML = valorA + "+" + valorB;
    document.getElementById("mult").innerHTML = valorA + "." + valorB;
    document.getElementById("div").innerHTML = valorA + "/" + valorB;
    document.getElementById("mod").innerHTML = valorA + "%" + valorB;
    
    document.getElementById('resSO').innerHTML = valorA + valorB;
    document.getElementById('resMU').innerHTML = valorA * valorB;
    document.getElementById('resDI').innerHTML = valorA / valorB;
    document.getElementById('resMO').innerHTML = valorA % valorB;
}