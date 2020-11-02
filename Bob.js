class Bob {
    constructor(x, y,r) {
      var options = {
        'density':0.8,
        'friction': 0,
        'restitution':1,isStatic : false

      };
      this.body = Bodies.circle(x, y,r/2, options);
     this.r = r
    
      World.add(world, this.body);

    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
    
     ellipseMode(RADIUS)
     ellipse (0,0,this.r,this.r)


     
     

      pop();
    };
  };


  function keyPressed () {

    Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-50})
    
    
    }
 
  