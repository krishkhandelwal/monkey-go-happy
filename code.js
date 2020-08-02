var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"O9yjZNa9gskFhtVVCXxemZQfc78IOF4e","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"gktP2ef8kz9ZbNe3AXk4niOzs1_KxZ.5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"_ksoMqMqzhD7pDIr2nD43FgKYWUfiwFp","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(95,340,20,50);
player.setAnimation("monkey");
player.scale = 0.1;

var ground = createSprite(400,350,800,10);
ground.velocityX = -4;
ground.x = ground.width/2;

var obstacleGroup = createGroup();
var bananaGroup = createGroup();

function draw() {
  
  background(255);
  player.collide(ground);
  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }

  if(keyDown("space")){
    player.velocityY = -15;
  }
  if(player.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  if(player.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
  }
  player.velocityY = player.velocityY + 0.8;
  spawnBanana();
  spawnObstacle();
  drawSprites();  
  
}

function spawnObstacle(){
  if(World.frameCount % 100 === 0){
    var obstacle = createSprite(400,325,10,40);
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.16;
   // obstacle.collide(ground);
    obstacle.velocityX = -4 ;
    
    
    
    
    //assign scale and lifetime to the obstacle           
  
    obstacle.lifetime = 90;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  
  }
}

function spawnBanana (){
  if(World.frameCount % 70 === 0){
  var banana = createSprite(400,150,20,20);
  banana.setAnimation("Banana");
  banana.scale = 0.07;
  banana.y = randomNumber(120,200);
 
  banana.velocityX = -5;
  banana.lifetime = 70;
  
  bananaGroup.add(banana);
  }
  
}

  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
