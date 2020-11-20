
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{isStatic:true});
	World.add(world, packageBody);
	
    box1 = Bodies.rectangle(370,650,200,20,{isStatic:true});
	World.add(world,box1);
	
	box2 = Bodies.rectangle(280,610,20,100,{isStatic:true});
    World.add(world,box2)

	box3 = Bodies.rectangle(460,610,20,100,{isStatic:true});
    World.add(world,box3);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}
function draw() {
    background(0);
    fill("green")
    textSize(20);
    text("press down button to fall medicine ",20,20);

	rect(box1.position.x,box1.position.y,200,20)
	rect(box2.position.x,box2.position.y,20,100)
	rect(box3.position.x,box3.position.y,20,100)


    packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
    drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }

  if (keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x - 20;
}

if (keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 20;
}	
}

