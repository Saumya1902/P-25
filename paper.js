class paper{

constructor(x,y,d){

    var options ={
        isStatic:false,
        restitution:0.1,
        friction:0.5,
        density:0.2,
    }
    this.d=d
    this.x=x;
    this.y=y;
    this.image = loadImage("sprites/paper.png");
    this.body=Bodies.circle(x,y,d,options);
    World.add(world,this.body);

    }



 display(){
     imageMode(RADIUS);
     fill("red");
     image(this.image,this.body.position.x,this.body.position.y,this.d,this.d);
   };
};