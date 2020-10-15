let boxes = [box01, box02, box03, box04, box05];
let boxPosition = [];

let loops = [loop01, loop02]
let loopPosition = [];

let boxes00 = [box06, box07, box08, box09, box10, box11];
let boxPosition00 = [];

let boxes01 = [box12, box13, box14, box15, box16];
let boxPosition01 = [];

let circles = [circle01, circle02, circle03, circle04, circle05, circle06, circle07, circle08, circle09, circle10, circle11]
let circlePosition = [];

let circles01 = [circle12, circle13, circle14, circle15]
let circlePosition01 = [];

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < boxes.length; i++) {
  boxPosition[i] = new MovedBox(boxes[i]);
 }

 for (let i = 0; i < loops.length; i++){
 loopPosition[i] = new Loop(loops[i]);
}

for (let i = 0; i < boxes00.length; i++) {
boxPosition00[i] = new MovedBox00(boxes00[i]);
}

for (let i = 0; i < boxes01.length; i++) {
boxPosition01[i] = new MovedBox01(boxes01[i]);
}

for (let i = 0; i < circles.length; i++){
 circlePosition[i] = new Circle(circles[i]);
}

for (let i = 0; i < circles01.length; i++){
circlePosition01[i] = new Circle01(circles01[i]);
}

}

function draw() {
  background(0);
  rectMode(CENTER);

  for (i = 0; i < boxes.length; i++) {
  boxPosition[i].moveBox();
  boxPosition[i].trackingLines();
 }

 for (i = 0; i < loops.length; i++){

   push();
   loopPosition[i].drawLoop();
   loopPosition[i].trackingLines();
   loopPosition[i].moveX();
   loopPosition[i].moveY();
   pop();

 }

   for (i = 0; i < boxes.length; i++) {
   boxPosition00[i].moveBox00();
   boxPosition00[i].trackingLines00();
  }

  for (i = 0; i < boxes01.length; i++) {
  boxPosition01[i].moveBox01();
  boxPosition01[i].trackingLines01();
 }

 for (i = 0; i < circles.length; i++){

   push();
   circlePosition[i].drawCircle();
   circlePosition[i].tracingLines();
   circlePosition[i].moveX();
   circlePosition[i].moveY();
   pop();

 }

 for (i = 0; i < circles01.length; i++){

   push();
   circlePosition01[i].drawCircle01();
   circlePosition01[i].tracingLines01();
   circlePosition01[i].moveX();
   circlePosition01[i].moveY();
   pop();

 }

}
