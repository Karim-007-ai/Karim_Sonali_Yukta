
let box06 = {
color: '255',
rectX: 0,
rectY: 0,
rectWidth: 100,
rectHeight: 180,
transX: 100,
transY: 180,
speedX: 2,
speedY: 2,

}

let box07 = {
rectX: 0,
rectY: 0,
color: '255',
rectWidth: 44,
rectHeight: 20,
transX: 44,
transY: 20,
speedX: -2,
speedY: -2,

}

let box08 = {
rectX: 0,
rectY: 0,
color: '255',
rectWidth: 32,
rectHeight: 10,
transX: 32,
transY: 10,
speedX: 1.5,
speedY: 1.5,

}

let box09 = {
rectX: 0,
rectY: 0,
color: '255',
rectWidth: 10,
rectHeight: 30,
transX: 10,
transY: 30,
speedX: -1.5,
speedY: -1.5,

}

let box10 = {
rectX: 0,
rectY: 0,
color: '255',
rectWidth: 20,
rectHeight: 10,
transX: 20,
transY: 10,
speedX: 2.5,
speedY: 2.5,

}

let box11 = {
rectX: 0,
rectY: 0,
color: '255',
rectWidth: 49,
rectHeight: 6,
transX: 49,
transY: 6,
speedX: -2.5,
speedY: -2.5,

}

class MovedBox00 {
constructor (incomingBox) {
  this.incomingBox = incomingBox;
}

 moveBox00() {
  push();
  if (this.incomingBox.transX > width || this.incomingBox.transX < 0) {
    this.incomingBox.speedX = this.incomingBox.speedX*-1;
  }
  this.incomingBox.transX = this.incomingBox.transX + this.incomingBox.speedX;
  if (this.incomingBox.transY > width || this.incomingBox.transY < 0) {
    this.incomingBox.speedY = this.incomingBox.speedY*-1;
  }
  this.incomingBox.transY = this.incomingBox.transY + this.incomingBox.speedY;
  translate(this.incomingBox.transX, this.incomingBox.transY);

  stroke(0);
  strokeWeight(2)
  fill(this.incomingBox.color);
  rect(this.incomingBox.rectX, this.incomingBox.rectY, this.incomingBox.rectWidth, this.incomingBox.rectHeight);
  pop();
}

  trackingLines00() {
  stroke(255);
  strokeWeight(1.5)
  line(this.incomingBox.transX, 0,this.incomingBox.transX, height)
  line(0, this.incomingBox.transY, height, this.incomingBox.transY)
}
}
