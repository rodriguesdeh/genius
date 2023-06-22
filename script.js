const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const azul = document.getElementById('azul');

const jogarMaquina = document.getElementById('jogarMaquina');
const verificar = document.getElementById('verificar');

let vetjogador=[], vetmaq=[];

jogar();

vermelho.onclick = ()=>{
    setTimeout(()=>{
        vermelho.style.backgroundColor='#FF0000';
     },500);
    vermelho.style.backgroundColor='#FA8072';
     vetjogador.push(1);
     console.log('Jogador ' + vetjogador);
}
verde.onclick = ()=>{
    
    setTimeout(()=>{
        verde.style.backgroundColor='#228B22'
     },500);
     verde.style.backgroundColor='#7FFF00'
     vetjogador.push(2);
     console.log('Jogador ' + vetjogador);
}

amarelo.onclick = ()=>{
    
    setTimeout(()=>{
        amarelo.style.backgroundColor='#FFD700'
     },500);
     amarelo.style.backgroundColor='#FFFF00'
     vetjogador.push(3);
     console.log('Jogador ' + vetjogador);
}

azul.onclick = ()=>{
    
    setTimeout(()=>{
        azul.style.backgroundColor='#0000FF'
     },500);
     azul.style.backgroundColor='#00BFFF';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}

function azulPisca(){
    setTimeout(()=>{
        azul.style.backgroundColor='#0000FF'
     },500);
     azul.style.backgroundColor='#00BFFF';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}




jogarMaquina.onclick = ()=>{
    jogar();
    vetjogador=[];
};

function jogar(){
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Máquina '+ vetmaq);
}

function verifygame2(){
    tamVet = vetmaq.length;
    let i = 0, resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
           resp=0;
           vetmaq=[];
           break;
        }else{
            resp=1;
        }
        i += 1;
     }
     console.log('Teste de acerto = ' + resp);
     vetjogador=[];
     
}

verificar.onclick=()=>{
    verifygame();
};
