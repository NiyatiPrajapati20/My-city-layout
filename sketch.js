var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=4;
  b1.floors=36;
  
  b2=new Building();
  b2.position=2;
  b2.floors=30;
  
   b3=new Building();
  b3.position=3;
  b3.floors=25;
  
 b4=new Building();
  b4.position=7;
  b4.floors=40;
  
  b5=new Building();
  b5.position=6;
  b5.floors=35;

  b6=new Building();
  b6.position=5;
  b6.floors=27;
  
  b7=new Building();
  b7.position=1;
  b7.floors=43;
  
  b8=new Building();
  b8.position=9;
  b8.floors=32;

  b9=new Building();
  b9.position=8;
  b9.floors=21;
}

function draw() {
  background(54);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

}