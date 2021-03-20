const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var myEngine,world;

var ground;
var hero;



function preload() {
//preload the images here
var monster = loadImage('images/monster-01.png');
var backImage = loadImage('images/GamingBackground.png');

}

function setup() {

myEngine = Engine.create();
world = myEngine.world;

  createCanvas(1200, 500);
  // create sprites here

  ground = new Ground(600,450,1200,50);
  hero = new Hero(400,800,250);



}

function draw() {
  background('pink');

  ground.display();
  hero.display();

}

