class Hero {
  constructor(x,y,width,height){
		var options = { 
			density: 1, 
			frictionAir: 1
}
    this.body=Bodies.rectangle(x,y,width,height,options);
	this.width = width;
	this.height = height;
	this.image=loadImage("superhero1.png");
	World.add(world, this.body);
	}
	display()
	{			
	var heroPos = this.body.position;		
	push()
	translate(heroPos.x, heroPos.y-100);
	rectMode(CENTER)
	fill(255,0,255)
	imageMode(CENTER);
	image(this.image, 0,0,300,220);
	pop()		
	}
}