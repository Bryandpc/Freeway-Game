let ycarros = [40, 96, 148,210, 270, 318]
let velcar = [2, 2.9, 5.5, 7, 6, 1,8]
let xcarro = [600, 600, 600,600,600,600]


function showcar(){
  for (let i = 0; i < imagemcarro.length; i ++ ){
    image(imagemcarro[i],xcarro[i],ycarros[i],50,40)
 }
}

function returncar(){
  for (let i = 0; i < imagemcarro.length; i ++ ){
  if (xcarro[i]  < -50)
    xcarro[i] = 600
  }
}

function movecar(){
  for (let i = 0; i < imagemcarro.length; i ++ ){
    xcarro[i] -=  velcar[i]
 }
}
