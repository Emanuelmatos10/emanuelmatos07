function tocaSomPom (idElementoAudio) {
     document.querySelector(idElementoAudio).play();
   }

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
  }
else {
  //alert('Elemento não encontrado');
  console.log('Elemento não encontrado ou seletor invalido');

}

    
const ListaDeTlecas = document.querySelectorAll('.tecla');

let contador = 0; 

//para
    for (let contador = 0; contador < ListaDeTlecas.length; contador ++){

    const tecla = ListaDeTlecas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function (){
    tocaSom(idAudio);
    }

  tecla.onkeydown = function (evento) {
      
      if (evento.code === 'Space' || evento.code === 'Enter'){

      }
          tecla.classList.add('ativa');
    }
  
  tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
  }


    }