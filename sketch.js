const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var coolSound;
var button;
//var object,objectImage;

function preload() {
  bg = loadImage("gamingbackground2.png");
  
 // objectImage = loadImage("back.png");
}

function setup() {
  createCanvas(1210, 513);
  
  //object = createSprite (300,300);
  //back.addImage(backImage);
  coolSound = loadSound("cool1.mp3",loaded);  
  coolSound.setVolume(0.060)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 440, 1300, 20);

  hero = new Hero(450,800,300,220);
  rope = new Rope(hero.body, { x: 540, y: 50 });
  monster = new Monster(1050,10,170,200);

  box1 = new Box(900, 100, 50, 50);
  box2 = new Box(900, 100, 50, 50);
  box3 = new Box(900, 100, 50, 50);
  box4 = new Box(900, 100, 50, 50);

  box5 = new Box(800, 100, 50, 50);
  box6 = new Box(800, 100, 50, 50);
  box7 = new Box(800, 100, 50, 50);
  box8 = new Box(800, 100, 50, 50);
  box9 = new Box(800, 100, 50, 50);
  box10 = new Box(800, 100, 50, 50);

  box11 = new Box(700, 100, 50, 50);
  box12 = new Box(700, 100, 50, 50);
  box13 = new Box(700, 100, 50, 50);
  box14 = new Box(700, 100, 50, 50);
  box15 = new Box(700, 100, 50, 50);
  box16 = new Box(700, 100, 50, 50);
  box17 = new Box(700, 100, 50, 50);
  box18 = new Box(700, 100, 50, 50);

  button = createButton("Play");
  button.mousePressed(togglePlaying);
  button.position(260,50);
  button.size(47,30)
  button.style("color:red");

}

function draw() {
  background(bg);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  //back.display();

  hero.display();
  rope.display();
  monster.display();
  ground.display();

  fill("orange");
  stroke("white");
  textSize(25);
  text("Press play button below to switch on the stereo!!",20,30);

  //drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


function togglePlaying(){
  if(!coolSound.isPlaying()){  
  coolSound.play();
  button.html("Stop");
  }
  else{
    coolSound.stop();
    button.html("Play");
  }
}

function loaded(){
  console.log("loaded");
}
