const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var Box1
var ground
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Box1 = new Box(200,300,50,50) 
    Box2 = new Box(240,100,50,100) 
    ground = new Ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log (Box2.body.positionx)
    console.log(Box2.body.angle)
    ground.display()
    Box1.display()
    Box2.display()
}
