//vaca
let xvaca = 85
let yvaca = 366
let meusp = 0
    
function mostravaca(){
   image(vaquinha,xvaca,yvaca,30,30)
}

function returnvaca(){
  if (yvaca < 1)
    yvaca = 366
  if (yvaca > 410)
    yvaca = 366
  }

function movevaca(){
  if (keyIsDown(UP_ARROW)){
    yvaca -= 2;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yvaca += 3;
  }
}

function vecolisao(){
  for(let i = 0; i < imagemcarro.length; i ++ ){
    colisao = collideRectCircle(xcarro[i],ycarros[i],50,40,xvaca,yvaca,15)
    if (colisao){
      voltavaca()
      bateu.play()
      if (meusp > 0){
        meusp -= 1
      }
    } 
  }
}

function voltavaca(){
  yvaca = 366
}

function pontos(){
  fill("#FFF800")
  textAlign(CENTER)
  textSize(25)
  text(meusp,width / 5, 27)
}

function sla(){
  if (yvaca < 15){
    meusp += 1
    voltavaca()
    fezponto.play()
 }
}
