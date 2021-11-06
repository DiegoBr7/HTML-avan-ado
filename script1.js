let image = document.getElementById("GK");

image.addEventListener("click",function () {

  //  image.src ="./images/deadpol.jpg"

  let lastImage = image.getAttribute("src");
   
  image.setAttribute("src","./images/deadpol.jpg")

   console.log(lastImage);


})
//let lista = document.getElementById("lista")

//let num = lista.getAttribute("num");

//let conteudo =""
//for(let i = 0 ; i < num ; i++){
  //  conteudo += "<li>"+i+"</li>";
//}
//lista.innerHTML