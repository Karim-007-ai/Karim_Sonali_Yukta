let circle12 = {

x: 50,
y: 50,
h: 67,
w: 3.5,
color: 255,
transX: 150,
transY: 200,
xspeed: 1,
yspeed: 10,

}

let circle13 = {

x: 50,
y: 50,
h: 67,
w: 3.5,
color: 255,
transX: 250,
transY: 300,
xspeed: 1,
yspeed: 10,

}

let circle14 = {

x: 100,
y: 100,
h: 7,
w: 170,
color: 0,
transX: 350,
transY: 400,
xspeed: 1,
yspeed: 10,

}

let circle15 = {

  x: 100,
  y: 100,
  h: 7,
  w: 170,
  color: 0,
  transX: 450,
  transY: 500,
  xspeed: 1,
  yspeed: 10,

  }

class Circle01 {
constructor(incomingCircle){
this.incomingCircle = incomingCircle;
  }

 drawCircle01() {

   push();
   stroke(255);
   strokeWeight(2);
   fill(this.incomingCircle.color);
   translate(this.incomingCircle.transX, this.incomingCircle.transY);
   ellipse(this.incomingCircle.x, this.incomingCircle.y, this.incomingCircle.h, this.incomingCircle.w);
   pop();

    }

  tracingLines01(){

    push();
    stroke('blue');
    translate(this.incomingCircle.transX, this.incomingCircle.transY);
    line(this.incomingCircle.x, -height, this.incomingCircle.x, height);
    line(-width, this.incomingCircle.y, width, this.incomingCircle.y);
    pop();

  }

  moveX() {
        if (this.incomingCircle.transX > width || this.incomingCircle.transX < 0){
        this.incomingCircle.xspeed = this.incomingCircle.xspeed *-1;
        }
        this.incomingCircle.transX = this.incomingCircle.transX + this.incomingCircle.xspeed;
        }

 moveY(){

        if (this.incomingCircle.transY > height || this.incomingCircle.transY < 0){
        this.incomingCircle.yspeed = this.incomingCircle.yspeed *-1;
      }

        this.incomingCircle.transY = this.incomingCircle.transY + this.incomingCircle.yspeed;
      }

}
