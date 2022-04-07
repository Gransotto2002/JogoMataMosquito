var altura = 0
var largura = 0
var vidas = 1
var tempo = 31

var criaMosquitoTempo

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  criaMosquitoTempo = 1000
}else if(nivel ==='impossible'){
  criaMosquitoTempo = 750
}



// Resgata os dados de dimensionamento da tela
function dimensao(){
  largura = window.innerWidth;
  altura = window.innerHeight;

/*   console.log(largura, altura) */
}
dimensao()

var cronometro = setInterval( function(){
  tempo--

  if(tempo <= 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  }

  document.getElementById('tempo').innerHTML = tempo
},1000)





// Criar no HTML

function posicaoRandomica(){
  if(document.getElementById('mosquito')){
  document.getElementById('mosquito').remove()


    if(vidas >= 3){
      window.location.href = 'fim_de_jogo.html'
    } else{
      document.getElementById('v' + vidas).src="/img/coracao_vazio.png"
      vidas++
    }
  }  



  //Seta randomicamente a posição do mosquito
  var posicaoX = Math.floor(Math.random() * largura -90)
  var posicaoY = Math.floor(Math.random() * altura -90)

  //Verifica se a soma é < 0
  posicaoX = posicaoX <0 ? 0 : posicaoX
  posicaoY = posicaoY <0 ? 0 : posicaoY


/* console.log(posicaoX, posicaoY) */
  // cria o mosquito
  var mosquito = document.createElement('img')
  mosquito.src = 'img/mosca.png'
  mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio()

  //Move o mosquito de acordo com a posição randomica
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito)
}

var criaMosquito = setInterval(function(){
  posicaoRandomica()
}, criaMosquitoTempo)







//Seta o tamanho do mosquito
function tamanhoAleatorio(){
  var classe = Math.floor(Math.random() * 3)

  switch(classe){
    case 0: 
      return 'mosquito1'

    case 1:
      return 'mosquito2'

    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio() {
  var lado = Math.floor(Math.random() * 2)

  switch(lado){
    case 0:
      return 'ladoA'

    case 1: 
    return 'ladoB'
  }
}






