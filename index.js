let contador = document.getElementById("contador")
let play = document.getElementById("play")
let placas = []
let jogando = false
let quantidadeJogadas

function reiniciarJogo(){
    placas = []
    jogando = !jogando
    play.innerHTML = "Play"
    
}

play.addEventListener("click", ()=>{
    if (jogando){ reiniciarJogo() }
    else{
        jogando = !jogando
        addPlaca()
        play.innerHTML = "Reset"
    }
})

document.addEventListener("click", (e) =>{
    if(e.target.matches(".clicavel") && jogando){
        let id = e.target.id
        jogar(id)
        brilhar(document.getElementById(id))
    }
})

function addPlaca(){
    numeroAleatorio = Math.floor(Math.random()*4)+1
    placas.push(numeroAleatorio)
    quantidadeJogadas = placas.length
    brilharPlacas()
}

function brilhar(peca){
    peca.style.filter = "brightness(5)"
    setTimeout(()=>{
        peca.style.filter = "brightness(1)"
    },200)
}

function brilharPlacas(){
    let index = 0
    function brilhaPlaca(){
        if(index < quantidadeJogadas){
            let placa = document.getElementById(placas[index]);
            brilhar(placa)
            index++
            setTimeout(brilhaPlaca,500)
        }
    }
    brilhaPlaca()
}

function jogar(jogada){
    let index = [placas.length - quantidadeJogadas]
    if(jogada == placas[index]){
        quantidadeJogadas--
    }else{
        alert("Errou, reiniciando")
        reiniciarJogo()
        contador.innerHTML = "0"
    }
    if (quantidadeJogadas == 0){
        contador.innerHTML = placas.length
        setTimeout(addPlaca,1000)
    }
}