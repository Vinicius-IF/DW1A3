
function calcular(){
    var valorA = parseFloat(document.querySelector("#valor_A").value);
    document.querySelector("#valor_B").value = valorA*9/5 +32;
} 

function CA() {  
    var P = parseFloat(document.getElementById("valor_B").value);
    P = (P - 32)*5/9;
    P.addEventListener("celsius", modifyText); 
  } 
  
  document.addEventListener("DOMContentLoaded", CA, false);
