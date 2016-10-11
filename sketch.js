var asteroids = [];



function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 3; i++) {
    asteroids[i] = {
      x: 300,
      y: 300,
      r: random(100,270),
      speed: random(-5,5),
      rad1: random(0,360),
      radius: random(20,50),
      cc: random(50,200),
      display: function() {
        fill(this.cc);
        ellipse(this.x + this.r * cos(radians(this.rad1)), this.y + this.r * sin(radians(this.rad1)), this.radius); //code inspired by Rodger
        this.rad1 += this.speed;
      }
    }
  }

}

function draw() {
  for (var i = 0; i < asteroids.length; i++) {
  background(0);
  asteroids[i].display();
  }


}

 /* function ship() {
    display: function(){
      fill(200);
      ellipse(this.x,this.y,30);
    }
    move: function(){
      if (keyIsDown(UP_ARROW)){
       this.y += 1 ;
      }
      if (keyIsDown(DOWN_ARROW)){
        this.y -= 1;
      }
    }
  }
  
  
  
function cometCollide() {
  if (dist(asteroids.x,asteroids.y,ship.x,ship.y) === 0) {
    text("YOU HAVE CRASHED THE MOON INTO AN ASTEROID BELT", 200,250);
    delay(10000);
    ship.x = 0;
  }
}
  */