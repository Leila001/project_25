class Paper {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      
    
      World.add(world, this.body);
    
    }
    display(){
    
      var pos =this.body.position;
      var angle = this.body.angle;
     
      push();
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("white");
      strokeWeight(2);
      stroke("black")
      ellipse(0, 0,this.r);
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
    
      pop();
    }
 };
 