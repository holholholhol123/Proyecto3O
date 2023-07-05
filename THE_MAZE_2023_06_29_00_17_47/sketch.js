var player;
var wall,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11;
var door,door2,door3;
var puntuacion;
var coin,coin2,coin3,coin4,coin5,coinsGroup;
var score = 0;
var win;

function preload(){
  //Opcional: si ocupas para tu juego imágenes aquí puedes precargarlas.
}

function setup(){
  createCanvas(400, 400);
  player = createSprite(50,380,10,10)
  player.shapeColor = "#6d212c";
  wall = createSprite(0,300,750,100)
  wall.shapeColor = "#000000";
  wall2 = createSprite(300,400,200,50)
  wall2.shapeColor = "#000000";
  wall3 = createSprite(360,200,50,50)
  wall3.shapeColor = "#000000";
  wall4 = createSprite(200,230,230,5)
  wall4.shapeColor = "#000000";
  wall5 = createSprite(300,200,50,70)
  wall5.shapeColor = "#000000";
  wall6 = createSprite(350,140,125,50)
  wall6.shapeColor = "#000000";
  wall7 = createSprite(100,190,200,50)
  wall7.shapeColor = "#000000";
  wall8 = createSprite(125,125,175,50)
  wall8.shapeColor = "#000000";
  wall9 = createSprite(300,400,200,50)
  wall9.shapeColor = "#000000";
  wall10 = createSprite(295,90,175,20)
  wall10.shapeColor = "#000000";
  wall11 = createSprite(100,50,210,20)
  wall11.shapeColor = "#000000";
  door = createSprite(210,60,10,40)
  door.shapeColor = "#000000";
  door2 = createSprite(100,135,10,30)
  door2.shapeColor = "#000000";
  door3 = createSprite(60,20,10,40)
  door3.shapeColor = "#fef5a4 ";
  coin = createSprite(330,170,10,10)
  coin.shapeColor = "#fef5a4";
  coin2 = createSprite(190,365,10,10)
  coin2.shapeColor = "#fef5a4";
  coin3 = createSprite(235,200,10,10)
  coin3.shapeColor = "#fef5a4";
  coin4 = createSprite(15,125,10,10)
  coin4.shapeColor = "#fef5a4";
  coin5 = createSprite(300,50,10,10)
  coin5.shapeColor = "#fef5a4";
  coinsGroup = new Group();
  win = createSprite(15,15,15,15)
  win.shapeColor = "aqua"
  
  
  
  
}

function draw() {
   background("violet");
  
  
  
 drawSprites();
  if(keyDown("right")){
    player.x=player.x+2
  }
if(keyDown("left")){
    player.x=player.x-2
  }
if(keyDown("up")){
    player.y=player.y-2
  }
if(keyDown("down")){
    player.y=player.y+2
  }
  if (player.isTouching(wall)||
      player.isTouching(wall2)||
      player.isTouching(wall3)||
      player.isTouching(wall4)||
      player.isTouching(wall5)||
      player.isTouching(wall6)||
      player.isTouching(wall7)||
      player.isTouching(wall8)||
      player.isTouching(wall9)||
      player.isTouching(wall10)||
      player.isTouching(wall11)||
      player.isTouching(wall11)){
    player.x =50
    player.y =380
  }
  if(player.isTouching(door3)){
    player.x=80
    player.y=25 
  }
  if (player.isTouching(coinsGroup)){
    score = score+1
  }
  if (player.isTouching(coin2)){
    coin2.x =15
    coin2.y =300
  }
   if (player.isTouching(coin)){
    coin.x =35
    coin.y =300
  
}
    if (player.isTouching(coin3)){
    coin3.x =55
    coin3.y =300
  
}
   if (player.isTouching(coin4)){
    coin4.x = 75
    coin4.y = 300
    door.y = 300
    door2.y = 165
  
}
   if (player.isTouching(coin5)){
    coin5.x =95
    coin5.y =300
  
}
  fill("red")
  textSize(20)
  text("Puntuacion: " + score, 200,15)
  if (score == 5){
    door3.y = 0
  }
  if(player.isTouching(win)){
    fill("lightgreen")
    textSize(40)
    text("¡GANASTE!", 50,200)
  }
  
  coinsGroup.add(coin2)
  coinsGroup.add(coin)
  coinsGroup.add(coin3)
  coinsGroup.add(coin4)
  coinsGroup.add(coin5)
  
}