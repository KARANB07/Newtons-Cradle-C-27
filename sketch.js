
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1=new bob(200,300)
	b2=new bob(250,300)
	b3=new bob(300,300)
	b4=new bob(350,300)
	b5=new bob(400,300)
	base1=new base(400,200,400,10)
	
	r=new rope(b1.body,base1.body,0,0)
	r1=new rope(b2.body,base1.body,50,0)
	r2=new rope(b3.body,base1.body,100,0)
	r3=new rope(b4.body,base1.body,150,0)
	r4=new rope(b5.body,base1.body,200,0)
	

	Engine.run(engine);
  
}


function draw() {
	background("red");
	rectMode(CENTER);
 
  b1.display();
  base1.display();
  //c1.display();
  r.display();
  r1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r2.display();
  r3.display();
  r4.display();
  //keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});

	}

}



