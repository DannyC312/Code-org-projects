var back = createSprite(200,200);
back.setAnimation("Factory");
back.visible = false;
back.scale = 1;
var ss = createSprite(75,220);
var flooral = createSprite(200,450);
var bullet = createSprite(250,350);
var player = createSprite(200,350);
var platform1 = createSprite(200,150);
var platform2 = createSprite(75,275);
var platform3 = createSprite(325,250);
var backgroun = createSprite(200,200);
var start = createSprite(200,200);
var stamina = 100;
var end = createSprite(200,200);
var loss = createSprite(200,200);
var pipe = createSprite(200,-30);
end.setAnimation("end");
end.visible = false;
end.scale = 2;
loss.visible = false;
loss.setAnimation("loss");
loss.scale = 1.5;




player.setAnimation("Left");
bullet.setAnimation("GunL");
flooral.setAnimation("black");
backgroun.setAnimation("bg");
platform1.setAnimation("animation_1");
platform2.setAnimation("animation_1");
platform3.setAnimation("animation_1");
ss.setAnimation("SS");
start.setAnimation("start");
pipe.setAnimation("metalpipefalling-removebg-preview.png_1");

platform1.setCollider("rectangle",0,0,100,25);
platform2.setCollider("rectangle",0,0,100,25);
platform3.setCollider("rectangle",0,0,100,25);
player.setCollider("rectangle",-69,0,110,100);
pipe.setCollider("circle",0,0,230);


bullet.scale = 0.03;
player.scale = 0.5;
ss.scale = 0.25;
backgroun.scale = 1.29;
start.scale = 1.5;
pipe.scale = 0.15;

var left = 0;
var right = 1;
var score = 0;
var health = 100;

function draw() {
//platform1.debug = true;
//platform2.debug = true;
//platform3.debug = true;
//player.debug = true;
//pipe.debug = true;
  
  flooral.displace(player);
  player.velocityY = 0;
  // draw background
if(keyDown("enter")){
back.visible = true;
start.x = 10000000000;
backgroun.x = 1000000000000;
}
if(player.x > 400){
  player.x = 400;
}
if(player.x < 0){
  player.x = 0;
}
if(player.y < 25){
  player.y = 25;
}

if(player.velocityY >= -5){
  player.velocityY = player.velocityY + 1.5;
  bullet.y = player.y;
}
if(player.velocityY == 0){
  player.velocityY = 0;
}
if(player.velocityY == -5){
  player.velocityY = -5;
}
if(keyDown("w")){
  bullet.x = player.x - 3;
  bullet.y = player.y - 1;
  player.velocityY = -3;
  player.velocityY = player.velocityY - 0.5;
  stamina = stamina - 1;
 }else{
  stamina = stamina + 0.5;
}
if(stamina <= 0){
  stamina = 0;
  player.velocityY = 5;
}
  if(stamina >= 100){
    stamina = 100;
  }
if(keyDown("a")){
  player.setAnimation("Right");
  player.x = player.x - 3;
  bullet.x = player.x + 3;
  bullet.y = player.y - 1;
  left = 1;
  right = 0;
  player.setCollider("rectangle",69,0,110,100);
}
if(keyDown("d")){
  player.setAnimation("Left");
  player.x = player.x + 3; 
  bullet.x = player.x + 3;
  bullet.y = player.y - 1;
  left = 0;
  right = 1;
  player.setCollider("rectangle",-69,0,110,100);
}
if(keyDown("s")){
  player.y = player.y + 3;
  bullet.x = player.x + 3;
  bullet.y = player.y - 1;
  stamina = stamina + 1;
    if(stamina >= 100){
    stamina = 100;
  }
}
if(keyWentDown("space")) {
    if (left == 1) {
      shootL();
      left = 0;
    }
    if (right == 1) {
      shootR();
      right = 0;
    }
  }
if(bullet.x >= player.x + 300){
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.velocityX = 0;
}
if(bullet.x <= player.x - 300){
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.velocityX = 0;
}
if(bullet.isTouching(ss)){
  ss.x = randomNumber(40,360);
  ss.y = randomNumber(40,360);
  score = score + 1;
}

if(keyDown("enter")){
if(pipe.y < 425){
  pipe.velocityY = 5;
}
}
if(pipe.y > 426){
  pipe.y = 0;
  pipe.x = randomNumber(20,380);
}
if(pipe.isTouching(player)){
  health = health - 20;
  pipe.y = 0;
    pipe.x = randomNumber(20,380);
}
if(health <= 0){
  player.destroy();
  loss.visible = true;
  pipe.destroy();
  back.visible = false;
}


platform1.displace(player);
platform2.displace(player);
platform3.displace(player);


//drawSprites()
  drawSprites();
if(backgroun.x <= 10000){
  startingtext();
}  
if(back.visible == true){
  scoreboard();
}
if(score >= 20){
  back.visible = false;
  end.visible = true;
  player.velocityX = 0;
  player.velocityY = 0;
  pipe.destroy();
}
}

function shootL(){
if(keyWentDown("space")){                                               
  bullet.x = player.x;
  bullet.velocityX = -9;
  bullet.y = player.y - 7;
  bullet.setAnimation("GunL");
}
}
function shootR(){
if(keyWentDown("space")){                                               
  bullet.x = player.x;
  bullet.velocityX = 9;
  bullet.y = player.y + 7;
  bullet.setAnimation("GunR");
}
}
function startingtext(){
  fill("white");
  textSize(40);
  stroke("black");
  strokeWeight(8);
  text("Factory Conqueror", 35,100);
  fill("white");
  textSize(20);
  stroke("black");
  strokeWeight(8);
  text("Shoot Smokestacks That Spawn To Win!",20, 300);
  text("Shoot 20 To win! (And Avoid The Pipes)",25, 350);
}
function scoreboard(){
  fill("white");
  textSize(20);
  stroke("black");
  strokeWeight(8);
  text("Health:", 280, 30);
  text(health, 350, 30);
  text("Score:", 20, 30);
  text(score, 90, 30);
  text("Stamina:", 125, 30);
  text(stamina, 205, 30);
}
