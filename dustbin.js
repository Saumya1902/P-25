class dustbin {

    constructor(x,y,width,height){

    var options ={
       isStatic:true
    }
    this.width=width;
    this.height=height;
    this.image=loadImage("sprites/dustbingreen.png");
    this.body=Bodies.rectangle(x,y,width,height,options) 
    World.add(world,this.body);   
    }
  
  

    display() {
      rectMode(CENTER);
      fill("black");
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      image(this.image,525,415, 200,250);
      }
    };

