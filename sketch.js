var a;
var circles=[];

var ground, stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;

var score = 0

function setup() {
  createCanvas(800,800);
  stroke(255)

  ground = new Ground(400,790,800,20);
  stand = new Ground(400,300,400,20);

  block9 = new Box(330,235,30,40);
  block8 = new Box(360,235,30,40);
  block7 = new Box(390,235,30,40);
  block6 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block4 = new Box(360,195,30,40);
  block3 = new Box(390,195,30,40);
  block2 = new Box(420,195,30,40);
  block1 = new Box(390,155,30,40);

  polygon.Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  polygon.Constraint(this.bodyA);

 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  

  text("SCORE:"+score,750,40);  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}