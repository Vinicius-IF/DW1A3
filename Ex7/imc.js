
function calcular(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso/(altura*altura);
    limpar();
   
    switch(true)
    {
                case (imc<=16.9):
                var tr = document.getElementById("1");
                tr.style = "font-weight:bold";
                break;
                case (imc<=18.4):
                var tr = document.getElementById("2");
                tr.style = "font-weight:bold";
                break;
                case (imc<=24.9):
                var tr = document.getElementById("3");
                tr.style = "font-weight:bold";
                break;
                case (imc<=29.9):
                var tr = document.getElementById("4");
                tr.style = "font-weight:bold";
                break;
                case (imc<=34.9):
                var tr = document.getElementById("5");
                tr.style = "font-weight:bold";
                break;
                case (imc<=40):
                var tr = document.getElementById("6");
                tr.style = "font-weight:bold";
                break;
                default:
                var tr = document.getElementById("7");
                tr.style = "font-weight:bold";
                break;
    }
}

function limpar(){
    for(i=1; i< 8; i++){
        var tr = document.getElementById(i);
        tr.style = "font-weight:normal";
    }
}