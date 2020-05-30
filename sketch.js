
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var box1,box2,box3,ground;



function setup() {
	createCanvas(1200, 600);
	
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(100,500,20);
    ground = new Dustbin(600,590,1200,20);
    box1 = new Dustbin(960,500,20,160);
	  box2 = new Dustbin(1090,500,20,160);
	  box3 = new Dustbin(1025,570,110,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX + "," + mouseY,10,15)

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
 
  drawSprites();
  }

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}


