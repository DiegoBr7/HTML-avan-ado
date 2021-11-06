let lista = document.getElementById("lista");

let num = lista.getAttribute("num")

let num = parseInt (lista.getAttribute("num"))

let = conteudo = "" ;

for(let i = 0; i < num; i++){

conteudo += "<li>"+i+"</li>";

}

lista.innerHTML = conteudo ;

