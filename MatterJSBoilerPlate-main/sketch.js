
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var canvas,ball,groundObj,leftSide;

function preload()
{
	
}

function setup() {
	canavs = createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
    }

	//Create the Bodies Here.
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	ball = Bodies.circle(200,100,20,ball_Options);
	World.add(world,ball);

    rectMode(CENTER);
    ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background("black");

  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display()
  leftSide.display();

  Engine.update(engine);

  drawSprites();
  
}



