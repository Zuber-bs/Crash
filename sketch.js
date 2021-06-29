const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ground;
var ground2;
var ground3;
var ground4;
var boxes = [];

function setup() {

    createCanvas(600, 600);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

    // Bodies
    ground = new Ground(width/2, 550, 600, 50);
    ground2 = new Ground(width/2, 50, 600, 50);
    ground3 = new Ground(50, height/2, 50, 600);
    ground4 = new Ground(550, height/2, 50, 600);

}

function mouseDragged() {
    for(var i = 0 ; i < 100; i++){
        boxes.push(new Box(mouseX, mouseY, 10));
}

    }

function draw() {
    background(0);
    Engine.update(engine);

    ground.show();
    ground2.show();
    ground3.show();
    ground4.show();

    for(var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }

    engine.gravity = {x: 0.01, y: 0.9}

    console.log(boxes.length);
}