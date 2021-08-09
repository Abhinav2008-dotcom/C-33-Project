const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies




var engine,world;
var bg;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10,snow11,snow12,snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20,snow21,snow22

function setup() {
  createCanvas(1000,500);
  engine=Engine.create();
  world=engine.world;

  snow1=new Snow(100,100)
  snow3=new Snow(130,130)
  snow4=new Snow(160,160)
  snow5=new Snow(190,190)
  snow6=new Snow(220,220)
  snow7=new Snow(250,250)
  snow9=new Snow(280,280)
  snow10=new Snow(310,310)
  snow11=new Snow(340,340)
  snow12=new Snow(370,370)
  snow13=new Snow(400,400)
  snow14=new Snow(430,430)
  snow15=new Snow(460,460)
  snow16=new Snow(490,490)
  snow17=new Snow(520,520)
  snow18=new Snow(550,550)
  snow19=new Snow(580,580)
  snow20=new Snow(610,610)
  snow21=new Snow(640,640)
  snow22=new Snow(670,670)
  


}

function preload(){
  bg=loadImage("snow3.jpg");
}

function draw() {
  background(bg);
  Engine.update(engine)
  snow1.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
  snow21.display();
  snow22.display();
  drawSprites();
}





