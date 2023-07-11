var ball;
var engine;
var world;
var groundObj;
var leftSide;
var rigthSide


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{


}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;	

	ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

ball = Bodies.circle(200, 390, 400, 20, ball_options);
	World.add(world, ball);

	//Create the Bodies Here.
	groundObj = new ground(width/2,670,width,20)
	leftSide = new ground(1100, 600, 20, 120);
	rigthSide = new ground(1350, 600, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	groundObj.display();
	leftSide.display();
	rigthSideSide.display();

	ellipse(ball.position.x, ball.position.y, 40, 40)

  drawSprites();
 
}



