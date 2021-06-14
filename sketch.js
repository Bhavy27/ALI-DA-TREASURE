var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("Images/aladdin_cave.jpg");
  bg2 = loadImage("Images/you-got-that-right.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
  }

  text("Remember: Type All Answers In Capital Letters",550,50);

  drawSprites()
}