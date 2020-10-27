class Building {

  constructor() {
    this.height = 10;
    //where it is on the ground
    this.position = 1;
    this.yPosition = 390;
    this.width = 25;
    this.floors = 10;

    //Each floor is approximately equal to 12 feet
    //If a building has 3 floors it would be 3*12=36 feet high.
    this.building_height = this.floors * 12;

  }
  display() {
    this.height = this.floors * 8;
    this.yPosition = 395 - (this.height);
    //this.xPosition=395-(this.height);
    this.xPosition = this.position * 40;
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }

}



var b1, b2, b3, b4, b5, b6, b7;
function setup() {
  
  // canvas
  
  createCanvas(400, 400);
  
  // buildings
  
  b1 = new Building();
  b1.position = 3;
  b1.floors = 18;

  b2 = new Building();
  b2.position = 4;
  b2.floors = 22;
  
  b3 = new Building();
  b3.position = 5;
  b3.floors = 24;
  
  b4 = new Building();
  b4.position = 6;
  b4.floors = 26;
  
  b5 = new Building();
  b5.position = 7;
  b5.floors = 28;
  
  b6 = new Building();
  b6.position = 8;
  b6.floors = 30;
  
  b7 = new Building();
  b7.position = 9;
  b7.floors = 32;

}

function draw() {
  
  // background colour (light blue because of the sky)
  
  background(0, 255, 255);
  
  // drawing the buildings
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  
  // this is a sun to show the sunlight's direction
  // as you can see, the people in the penthouses get the sunlight
  
  circle(20, 20, 20);
}