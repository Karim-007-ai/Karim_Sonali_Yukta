let circle01 = {

x: 0,
y: 0,
h: 150,
w: 90,
color: 204,
transX: 0,
transY: 0,
xspeed: 1.5,
yspeed: 1.5,

}

let circle02 = {

x: 0,
y: 0,
h: 140,
w: 140,
color: 255,
transX: 600,
transY: 600,
xspeed: -1.5,
yspeed: -1.5,

}

let circle03 = {

x: 0,
y: 0,
h: 70,
w: 70,
color: 204,
transX: 100,
transY: 100,
xspeed: 2,
yspeed: 2,

}

let circle04 = {

x: 0,
y: 0,
h: 70,
w: 70,
color: 204,
transX: 370,
transY: 225,
xspeed: -2,
yspeed: -2,

}

let circle05 = {

x: 0,
y: 0,
h: 200,
w: 200,
color: 'red',
transX: 300,
transY: 300,
xspeed: 3,
yspeed: 3,

}

let circle06 = {

x: 0,
y: 0,
h: 180,
w: 180,
color: 204,
transX: 300,
transY: 300,
xspeed: -3,
yspeed: -3,

}

let circle07 = {

x: 0,
y: 0,
h: 10,
w: 10,
color: 255,
transX: 300,
transY: 300,
xspeed: 1.5,
yspeed: 1.5,

}

let circle08 = {

x: 0,
y: 0,
h: 7,
w: 7,
color: 0,
transX: 250,
transY: 300,
xspeed: 4,
yspeed: 4,

}

let circle09 = {

x: 0,
y: 0,
h: 7,
w: 7,
color: 0,
transX: 370,
transY: 300,
xspeed: -4,
yspeed: -4,

}

let circle10 = {

x: 0,
y: 0,
h: 7,
w: 7,
color: 0,
transX: 300,
transY: 400,
xspeed: 5,
yspeed: 5,

}

let circle11 = {

x: 0,
y: 0,
h: 7,
w: 7,
color: 0,
transX: 400,
transY: 300,
xspeed: -5,
yspeed: -5,

}

class Circle {
constructor(incomingCircle){
this.incomingCircle = incomingCircle;
  }

 drawCircle() {

   push();
   stroke(255);
   strokeWeight(2);
   fill(this.incomingCircle.color);
   translate(this.incomingCircle.transX, this.incomingCircle.transY);
   ellipse(this.incomingCircle.x, this.incomingCircle.y, this.incomingCircle.h, this.incomingCircle.w);
   pop();

    }

  tracingLines(){

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
