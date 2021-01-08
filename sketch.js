
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   ground = Bodies.rectangle(400, 660, width, 10 , {isStatic:true,friction:0.5} );
   
	 World.add(world, ground);
	 
	//Create the Bodies Here.
	 b1=new dustbin(550,590,20,150);
	 b2=new dustbin(705,590,20,150);
	 b3=new dustbin(620,645,150,20);
   ball= new paper(50,540,50);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("grey");
  ball.display();
  b3.display();
  b2.display();
  b1.display();
  fill("brown");
  rect(ground.position.x,ground.position.y,width,10);
  drawSprites();
 }



function keyPressed(){
   if(keyCode===UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});
   }

}

