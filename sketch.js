
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyimg,boy

function preload()
{
boyimg=loadImage("plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,400,70,70)
	boy.loadImage=boyimg
	tree = new Tree(600,600,20,1200);
	stone= new Stone(190,400,50,50);

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 tree.display()
}



