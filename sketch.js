var snow , snowImg  ;
var  bg , bgImg ;
var boy , boyImg ;

function preload () {

bgImg = loadImage("snow1.jpg") ;
boyImg = loadImage("C1.png");
snowImg = loadImage("snow4.webp");

}

function setup() {
  createCanvas(1000,600);
  bg = createSprite(400,200,150,150);
  bg.addImage(bgImg);
  boy=createSprite(200,350,50,50);
  boy.addImage(boyImg);
  boy.scale=0.5;
}

function draw() {
  background(255,255,255); 
  
  if (keyDown(RIGHT_ARROW)){

    boy.x=boy.x+2;

  }

    
  if (keyDown(LEFT_ARROW)){

    boy.x=boy.x-2;

  }
  

  if (frameCount % 50 === 0) {
    snow = createSprite(200,10);
    snow.addImage(snowImg);
    snow.scale = 0.1 ;
    snow.velocityY=2;
    snow.lifetime=300;
    snow.x=Math.round(random(100,700));
    }
    
  drawSprites();
 
}