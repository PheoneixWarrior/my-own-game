var score = 0
var  gamestate = 0
var obstacles
var player
var playerImage
var obstacle1Image, obstacle2Image, obstacle3Image
var wall1, wall2
var backgroundImage
var obstacle

function preload(){

backgroundImage = loadImage("background.jpg")

}

function setup(){
  createCanvas(1000, 700)
bg = createSprite(500, 350, 50, 50)
bg.addImage(backgroundImage)
player = createSprite(500, 300 , 50, 50)
player.shapeColor = "black"
bg.velocityY = 10
wall1 = createSprite(1000, 1400, 150, 2800)
wall2 = createSprite(1, 1400, 150, 2800)

}

function draw(){
background("white")


player.collide(wall1)
player.collide(wall2)
if(keyDown(RIGHT_ARROW)){

player.x = player.x + 10

} 
if(keyDown(LEFT_ARROW)){

  player.x = player.x - 10
  
  }

if(bg.y > 350){

bg.y = 300

}

spawnObstacles()
  drawSprites()
  fill("black")
  text("score:" + score, 500, 100)
}


function spawnObstacles(){

  if(frameCount % 50 === 0){
var rand = Math.round(random(10, 800))
var rand1 = Math.round(random(50, 180))
obstacle = createSprite(rand, 700, rand1, 30)
obstacle.velocityY = -10
 

}

}
