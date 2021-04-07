class Monster {
  constructor(x,y,width,height){
	var options = { 
      density: 5, 
      frictionAir: 0,
	  restitution:0.3
    }
	this.body=Bodies.rectangle(x, y, width, height, options);
	this.width = width;
	this.height = height;	
	this.image=loadImage("monster1.png");
	World.add(world, this.body);
	}
	display()
	{
	    var Pos=this.body.position;		
		push()
		translate(Pos.x, Pos.y-100);
		rectMode(CENTER);
		imageMode(CENTER);
		image(this.image, 0,0,180,200)
		pop()
			
	}
}
