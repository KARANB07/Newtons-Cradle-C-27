class bob {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':1.2,
          'friction': 0,
          'density': 1.2
            
      }
      this.radius  = 25;
      this.body = Bodies.circle(x, y,this.radius, options);
      
      
      World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;
      push();
      translate(this.body.position.x,this.body.position.y);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0,0, this.radius,this.radius);
      pop();
     
      
    }
  }







   