var tom, tImage,tWalk,tWalk2,tWalk3;
var jerry, jImage,jWalk,jWalk2,jWalk3;
var bg, bgImage;

function preload() {
    //load the images here
    tImage = loadImage("images/cat1.png");
    jImage = loadImage("images/mouse1.png");
    bgImage = loadImage("images/garden.png");

    tWalk = loadAnimation("images/cat2.png");
    tWalk2 = loadAnimation("images/cat3.png");
    tWalk3 = loadAnimation("images/cat4.png");

    jtes = loadAnimation("images/mouse2.png");
    jtes2 = loadAnimation("images/mouse3.png");
    jWalk3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,20,20);
    bg.addImage(bgImage);

    tom = createSprite(900,600,20,20);
    tom.addImage(tImage);
    tom.scale = 0.2;
    tom.display();

    jerry = createSprite(100,600,20,20);
    jerry.addImage(jImage);
    jerry.scale = 0.1;
    jerry.display();
}

function draw() {

    background(200);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX = 0;
       tom.addAnimation("tWalk3", tWalk3);
       tom.x = 300;
       tom.scale = 0.2;
       tom.changeAnimation("tWalk3");

       jerry.addAnimation("jWalk3", jWalk3);
       jerry.changeAnimation("jWalk3");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    
   if(keyCode === LEFT_ARROW){
     jerry.addAnimation("jtes", jtes2);
     jerry.changeAnimation("jtes");
     jerry.frameDelay = 25;

     tom.velocityX = -5;
     tom.addAnimation("tWalk", tWalk2);
     tom.changeAnimation("tWalk");
     tom.frameDelay = 5;
    
   }

}
