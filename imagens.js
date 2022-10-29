let estrada; 
let vaquinha;
let carro;
let carro2;
let carro3;
let chadsound
let bateu
let fezponto

function preload(){
  estrada = loadImage ("imagens/estrada.png");
  vaquinha = loadImage ("imagens/ator-1.png");
  carro = loadImage ("imagens/carro-1.png");
  carro2 = loadImage ("imagens/carro-2.png");
  carro3 = loadImage ("imagens/carro-3.png");
  chadsound = loadSound ("sons/chad.mp3");
  bateu = loadSound ("sons/colidiu.mp3")
  fezponto = loadSound ("sons/pontos.wav")
  imagemcarro = [carro,carro2,carro3,carro,carro2,carro3]
}

//sim, o som se chama chad
