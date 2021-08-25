var bgImage
var burger,cola,dal,fruits,momos,vegetables,vegetables2,pizza,person
var burgerImg,colaImg,dalImg,fruitsImg,momosImg,vegetablesImg,vegetables2Img,pizzaImg,personImg,score
score=0
function preload(){
    bgImage=loadImage("path.png")
    burgerImg=loadImage("burger.png")
    colaImg=loadImage("cola.png")
    dalImg=loadImage("dal.png")
    momosImg=loadImage("momos.png")
    vegetablesImg=loadImage("vegetables.png")
    vegetables2Img=loadImage("vegetables2.png")
    pizzaImg=loadImage("pizza.png")
    personImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
    fruitsImg=loadImage("fruits.png")
}
function setup(){

    createCanvas(600,600)
    

path=createSprite(300,300)
path.addImage(bgImage)
path.scale=1

person=createSprite(300,550)
person.addAnimation("person",personImg)
}


function draw(){
background("black")

textSize(30)
stroke (0)
fill("red")
text ("Score:"+score,480,40)

if(person.isTouching(healthyFood)){
    World.remove(world, healthyFood);
    push();
   healthyFood
   
    pop();
   }
   
  
   

drawSprites()
spawnHealthyFood()
spawnJunkFood()
}
function spawnHealthyFood(){
if(frameCount%150===0){
    healthyFood=createSprite(400,0)
healthyFood.velocityY=3
    healthyFood.x=Math.round(random(190,350))
    
    healthyFood.lifetime=200
    healthyFood.scale=0.15
    var rand=Math.round(random(1,4))
    switch(rand){
        case 1:
            healthyFood.addImage(dalImg);
            break;
        case 2:
            healthyFood.addImage(vegetablesImg);
            break;
            case 3: 
            healthyFood.addImage(vegetables2Img);
            break;
            case 4: 
            healthyFood.addImage(fruitsImg);
            break;
    }
}
}

function spawnJunkFood(){
    if(frameCount%150===0){
        junkFood=createSprite(500,0)
        junkFood.velocityY=2
        junkFood.x=Math.round(random(190,350))
        
        junkFood.lifetime=200
        junkFood.scale=0.15
    var rand=Math.round(random(1,4))
    switch(rand){
            case 1:
            junkFood.addImage(momosImg);
            break;
            case 2:
            junkFood.addImage(pizzaImg);
            break;
            case 3: 
            junkFood.addImage(colaImg);
            break;
            case 4: 
            junkFood.addImage(burgerImg);
            break;
    }
    }  
}
