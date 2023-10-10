function tocaSomPom (idElementoAudio) {
     document.querySelector(idElementoAudio).play();
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