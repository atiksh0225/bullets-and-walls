
var wall;

var speed, weight, bullet;
function preload() {

}


function setup() {
  createCanvas(1199,400);
 speed = random(223, 321);
 weight = random(30, 52); 
thickness = random(22, 83);



 car = createSprite(70, 200, 100, 50);
car.velocityX = speed;
car.shapeColor = "red";

wall = createSprite(1200, 200, thickness, height/2);

}

function draw() {
  background(255,255,255);
  rectMode(CENTER);  
   	
 

function hasCollided(lbullet, lwall)
{
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge >= wallLeftEdge)	
{
	return true;
}

    return false;
}


if( hasCollided(bullet, wall))
{
	bullet.velocityX = 0;
	var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10) 
    {
       wall.shapeColor = color(255, 0, 0);
    }

 if(damage<10)
 {
 	wall.shapeColor = color(0, 255, 0);
 }

}














  drawSprites();
}