var background2, backgroundImage
var man, manImage
var Fruit, PineappleImage , WatermelonImage, JackfruitImage
var invisibleground
var score

function preload() {
backgroundImage = loadImage("backimg.jpg") 
manImage = loadImage("man_standing-removebg-preview (1).png")
PineappleImage = loadImage("pineApple_img-removebg-preview (1).png")
WatermelonImage = loadImage("watermelon_img-removebg-preview.png")
JackfruitImage = loadImage("jackFruit_img-removebg-preview.png")
}
function setup() {
createCanvas(600,600)
background2 = createSprite(0,0,700,200)
background2.addImage( backgroundImage)
background2.velocityX=-3;
background2.scale = 3.3

man = createSprite(200,400,50,10)
man.addImage(manImage)
man.scale = 0.5
  
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
  
score = 0;
}

function draw() {
background(0)
  
if (background2.x < 0) {
    background2.x = 400
}
  

 if(keyDown("right")) {
   man.velocityX = 4 }
  
 if(keyDown("left")) {
   man.velocityX = -4}
  
 if(keyDown("space")&& man.y >= 100) {
        man.velocityY = -12;
    }
man.velocityY = man.velocityY + 0.8

 man.collide(invisibleground);
    
   
stroke("white");
textSize(20);
fill("white");
text("score: "+ score, 500,50)
  
 
  
spawnFruits();



drawSprites()
}


function spawnFruits() {
  if (frameCount % 60 === 0){
    Fruit = createSprite(600,150,40,10);
    Fruit.velocityX = -(6 + score/100);
    Fruit.velocityX = -3;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1 : Fruit.addImage(PineappleImage);
               break;
      case 2 : Fruit.addImage(WatermelonImage);
               break;
      case 3 : Fruit.addImage(JackfruitImage);
               break;
               default: break;
    }
    
    Fruit.lifeTime = 200;
    Fruit.depth = Fruit.depth + 1;
    Fruit.scale = 0.3;
    Fruit.y = Math.round(random(20,200))
  }
}        

 
