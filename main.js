function tocaSomPom () {

    document.querySelector('#som_tecla_pom').play();
   }
const ListaDeTlecas = document.querySelectorAll('.tecla');


let contador = 0; 

//enquanto
while (contador < ListaDeTlecas.length) {

ListaDeTlecas[0].onclick = tocaSomPom;

 contador = contador = 1;

 console.log (contador);
 }