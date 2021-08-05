var iss,spacecraft,bg,issimg,scimg
var hasDocked=false
function preload() {
bg=loadImage("Docking-undocking/spacebg.jpg")
issimg=loadImage("Docking-undocking/iss.png")
scimg1=loadImage("Docking-undocking/spacecraft1.png")
scimg2=loadImage("Docking-undocking/spacecraft2.png")
scimg3=loadImage("Docking-undocking/spacecraft3.png")
scimg4=loadImage("Docking-undocking/spacecraft4.png")


}

function setup() {
  createCanvas(800,400);
 spacecraft= createSprite(285, 240);
 spacecraft.addImage(scimg1)
 spacecraft.scale=0.5
 iss=createSprite(330,130)
 iss.addImage(issimg)

}

function draw() {
  background(bg);  
  spacecraft.addImage(scimg1)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1) 

  }
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2
    
  }
  if(keyDown("LEFT_ARROW")){
    sc.addImage(scimg4)
    spacecraft.x=spacecraft.x-2
  }
  if(keyDown("RIGHT_ARROW")){
    sc.addImage(scimg3)
    spacecraft.x=spacecraft.x+2
  }
  if(keyDown("DOWN_ARROW")){
    sc.addImage(scimg2)
    spacecraft.y=spacecraft.y+2
  }

if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)) {
  hasDocked=true
  textSize(25) 
  fill("White")
  text("dockingsuccesfull",200,300)
}
drawSprites();
}