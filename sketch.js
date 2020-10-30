const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true 
  }

  ground = Bodies.rectangle(100,350,800,50,options);
  World.add(world,ground);

  var ball_options = {
    restitution: 2
  }

  ball = Bodies.circle(200,200,60,ball_options);
  World.add(world,ball);

}

function draw() {
  background("black");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,60,60);
}