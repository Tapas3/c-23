class Box{

  constructor(x,y,width,height){
var options={
  'restitution':1,
  'friction':0.8,
  'density':1
}

  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  World.add(world,this.body);

  }

  display(){
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    rotate(angle);
    translate(pos.x,pos.y);
rectMode(CENTER);
fill('orange');
rect(0,0,this.width,this.height)
   pop();
}
}