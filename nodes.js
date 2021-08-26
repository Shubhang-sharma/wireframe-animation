
class objects{
  constructor(x,y,b){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = p5.Vector.random2D();
    this.acc.setMag(random(-0.005,0.005));
    // this.b = map(b,0,255,this.vel.x,this.vel.y,[255]);
  }
  make(){
    fill('rgba(145, 183, 196,100)');
    circle(this.pos.x,this.pos.y,0.1);
  }
  away(somenode){
    let d = dist(this.pos.x,this.pos.y,somenode.pos.x,somenode.pos.y);
    return (d > this.r + somenode.r);
  }
  animate(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(2);
    this.pos.limit(windowHeight*0.3);
    
  }
  bounce(){
    this.vel.mult(-1);
  }
  suck(){
    let g = createVector(0,0);
    let f = p5.Vector.add(g,this.pos);
    f.setMag(random(0.09,0.2));
    f.mult(-1);
    this.acc.add(f);
    this.vel.limit(2);
    this.pos.limit(windowHeight*0.3);
  }
  stick(h){
    h.setMag(0.001);
    this.acc.add(h);
    this.pos.limit(windowHeight*0.3);
    this.vel.limit(2);
    
    
  }
  
}
