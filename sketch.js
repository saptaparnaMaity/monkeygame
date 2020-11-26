
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
   
  
  invisibleGround = createSprite(400,355,900,10);
  invisibleGround.visible = false;
  
  //create Obstacle and banana Groups
  
  
  
bananaGroup=new Group();  
obstaclesGroup=new Group(); 
  
}

function draw() {
  
  background("white");
  //displaying score
  
  
monkey.collide(invisibleGround);  
      
    //scoring
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -12;
    
    
    
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
food();    
obstacles();    
    
      
   
stroke("black");  
textSize(20);  
fill("black");  
survivalTime=Math.round(frameCount/frameRate())  
text("survival Time: "+survivalTime,100,50); 
  
  
  
  
  
  
  
  
  
  drawSprites();
}

function food(){
 
  if (frameCount % 80 === 0){ 
     banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(200,250));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 190;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;   
    
    //adding banana to the group
   bananaGroup.add(banana);
  }
}


function obstacles(){
  
if (frameCount % 300 === 0){
    obstacle = createSprite(400,327,10,40);
   obstacle.velocityX = -4;
   obstacle.addImage("obstacles",obstacleImage)
    
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }      
  
  
  
  
  
  
}

