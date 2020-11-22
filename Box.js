class Box {
    constructor(x, y, width, height){
      var options = {
        "restitution":0.8,
        "friction":1.0,
        "density":0.044,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    {
        visibility();
      }  
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(10);
      stroke("red");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
    Score(){
        if(this.visibility<0&&this.visibility>-105){
            score++;

            block1.score();
            block2.score();
            block3.score();
            block4.score();
            block5.score();
            block6.score();
            block7.score();
            block8.score();
            block9.score();
            
        }
    }
  };
  
  