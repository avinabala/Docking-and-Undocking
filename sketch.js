var spaceCraft, spacecraftLaunching
var hasDocked
var iss

function preload(){
bgImg = loadImage("spacebg.jpg")
spaceCraft1 = loadImage("spacecraft1.png")
spaceCraft2 = loadImage("spacecraft2.png")
spaceCraft3 = loadImage("spacecraft3.png")
spaceCraft4 = loadImage("spacecraft4.png")
issImg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285, 240)
  spaceCraft.addImage(spaceCraft1)
  iss = createSprite(330, 130)
  iss.addImage(issImg)

  spaceCraft.scale = 0.15
  iss.scale = 0.25
}

function draw() {
  background(bgImg);
  
  if (!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1)
    if (keyDown(RIGHT_ARROW)){
    spaceCraft.x = spaceCraft.x + 2
    spaceCraft.addImage(spaceCraft4)
    }

    if (keyDown(LEFT_ARROW)){
      spaceCraft.x = spaceCraft.x - 2
      spaceCraft.addImage(spaceCraft3)
      }

    if (keyDown(DOWN_ARROW)){
      spaceCraft.y = spaceCraft.y + 2
      }
    
      if (keyDown(UP_ARROW)){
        spaceCraft.y = spaceCraft.y - 2
        }
  }

  if (spaceCraft.y <=(iss.y + 70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked = true
    textSize(25)
    fill ("white")
    text("docking successful",200,300)
  }

  drawSprites();
}
