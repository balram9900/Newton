
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,400,30)
	
    

	bob = new Bob(250,400,30)
	bbob = new Bob(310,400,30)
	bbbob = new Bob(370,400,30)
	bbbbob = new Bob(430,400,30)
	bbbbbbob = new Bob(490,400,30)

	rope1 = new Rope(bob.body,roof.body,-150,0)
	rope2 = new Rope(bbob.body,roof.body,-90,0)
	rope3 = new Rope(bbbob.body,roof.body,-30,0)
	rope4 = new Rope(bbbbob.body,roof.body, 30,0)
	rope5 = new Rope(bbbbbbob.body,roof.body, 90,0)

//var rope = Constraint.create();

	Engine.run(engine);
  
}
function draw() {
 
  background("yellow");



  roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
  bob.display();
  bbob.display();
  bbbob.display();
  bbbbob.display();
  bbbbbbob.display();




  drawSprites();
 
}



