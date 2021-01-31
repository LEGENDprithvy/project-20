var car,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  car = createSprite(500,200,50,50);
  wall = createSprite(1500,200,60, height/2)
  speed = random(-10,-20);
  weight = random(90,20);
  car.velocityX = speed;
}


function draw() {
  background("black");  
  
  car.shapeColor = "red";
  
  if(wall.x = car.x  <   (car.width+wall.width)/2)
   {
    car.velocityX = 0;
    var deformation = 0.5* weight * speed* speed/22509;
    if(deformation<180)
     
     {
       car.shapeColor = color(255,0,0);
       
     }
    
     if(deformation<180  &&  deformation>100)
      {
        car.shapeColor = color(230,230,0);
      }
   
      if(deformation<100)
      {
        car.shapeColor = color(0,255,0);
      }
      }
      drawSprites();
    }