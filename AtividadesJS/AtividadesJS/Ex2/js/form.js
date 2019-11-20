function verificaStatus(nome){
	if(nome.form.tudo.checked == 0)
		{
			nome.form.tudo.checked = 1;
			marcarTodos(nome);
		}
	else
		{
			nome.form.tudo.checked = 0;
			desmarcarTodos(nome);
		}
}
 
function marcarTodos(nome){
   for (i=0;i<nome.form.elements.length;i++)
	  if(nome.form.elements[i].type == "checkbox")
		 nome.form.elements[i].checked=1
}
 
function desmarcarTodos(nome){
   for (i=0;i<nome.form.elements.length;i++)
	  if(nome.form.elements[i].type == "checkbox")
		 nome.form.elements[i].checked=0
}

var textarea = document.querySelector('textarea');
var info = document.getElementById('carResTxtVoce');
var limite = 100;
textarea.addEventListener('keyup', verificar);

function verificar(e) {
    var qtdcaracteres = this.value.length;
    var restantes = limite - qtdcaracteres;
    if (restantes < 1) {
        this.value = this.value.slice(0, limite);
        return info.innerHTML = 0;
    }
    info.innerHTML = restantes;
}
