const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var leftSide;
var rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(1350,690);
	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	ground = new Ground(680,680,1370,20);
	leftSide = new Ground(1100,610,20,120);
	rightSide = new Ground(900,610,20,120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
	}
	
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)
  	rectMode(CENTER);
 	ellipseMode(RADIUS);
	
	Engine.run(engine);
}

function keyPressed() {
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:57,y:0})

	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  leftSide.show();
  rightSide.show();

  drawSprites();
 
}







