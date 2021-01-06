
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var floor

var wall1

var wall2

var wallB

var paperBody = this.body

var paperpos=this.body.position;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	keyPressed();


	engine = Engine.create();
	world = engine.world;

	wall1 = createSprite(700,595,10,100)
	wall1.shapeColor = color("blue");
	World.add(world, wall1);

	wall2 = createSprite(500,595,10,100)
	wall2.shapeColor = color("blue");
	World.add(world, wall2);

	wallB = createSprite(600,640,200,10)
	wallB.shapeColor = color("blue");
	World.add(world, wallB);

	//Create the Bodies Here.
	ball = new paper(60,200,25);
	World.add(world, ball)
	floor = new ground(400,650,1000,20);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  floor.display();
  drawSprites();
 
};
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.position,{x:20, y:-30});
		
	}
}